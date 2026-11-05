import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const srcDir = join(root, "src");
const publicDir = join(root, "public");
const dataPath = join(srcDir, "data", "data.ts");
const errors = [];

function read(path) {
  return readFileSync(path, "utf8");
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function addError(message) {
  errors.push(message);
}

const sourceFiles = walk(srcDir).filter((path) => /\.(tsx?|mts|md)$/.test(path));
const source = sourceFiles.map(read).join("\n");
const data = read(dataPath);

for (const match of source.matchAll(/(?:image|src)\s*[:=]\s*["'](\/[^"']+)["']/g)) {
  const assetPath = join(publicDir, match[1].slice(1));
  if (!existsSync(assetPath)) {
    addError(`Missing public asset: ${match[1]}`);
  }
}

for (const match of data.matchAll(/(?:liveUrl|githubUrl|url|companyUrl|github|linkedin|twitter|leetcode|codeforces|devto|medium):\s*["']([^"']+)["']/g)) {
  try {
    const url = new URL(match[1]);
    if (!["http:", "https:"].includes(url.protocol)) {
      addError(`Unsupported URL protocol: ${match[1]}`);
    }
  } catch {
    addError(`Invalid URL: ${match[1]}`);
  }
}

for (const section of ["projects", "blogs", "skills"]) {
  const sectionMatch = data.match(new RegExp(`${section}:\\s*\\[([\\s\\S]*?)\\]\\s+as`));
  if (!sectionMatch) {
    addError(`Could not find ${section} data section`);
    continue;
  }

  const names = [...sectionMatch[1].matchAll(/(?:title|name):\s*"([^"]+)"/g)].map((match) => match[1]);
  const duplicates = names.filter((name, index) => names.indexOf(name) !== index);
  for (const duplicate of new Set(duplicates)) {
    addError(`Duplicate ${section} name: ${duplicate}`);
  }
}

const sectionIds = new Set(
  [...source.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
);
for (const match of source.matchAll(/href=["']\/#([^"']+)["']/g)) {
  if (!sectionIds.has(match[1])) {
    addError(`Navigation target does not exist: #${match[1]}`);
  }
}

if (errors.length > 0) {
  console.error("Portfolio validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else {
  console.log(
    `Portfolio validation passed (${sourceFiles.length} source files checked; public assets and data links are valid).`,
  );
}
