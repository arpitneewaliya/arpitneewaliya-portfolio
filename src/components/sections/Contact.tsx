"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2, CheckCircle2, Mail, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setErrorMsg("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Something went wrong. Please try again.");

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An error occurred.";
      setErrorMsg(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Get in Touch
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 font-medium">
            Have a question, project idea, or opportunity? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Direct Email Card */}
          <div className="md:col-span-5 p-5 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-950/60 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-100 shrink-0">
                <Mail className="size-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase font-semibold">Direct Email</span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.socials.email}`}
                  className="block text-xs sm:text-sm font-bold text-zinc-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate"
                >
                  {PORTFOLIO_DATA.socials.email}
                </a>
              </div>
            </div>

            <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Prefer direct messaging? Drop me an email or connect on LinkedIn / X. I typically respond within 24 hours.
            </p>

            <div className="pt-2 border-t border-dashed border-zinc-300 dark:border-zinc-800 flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 font-mono font-medium">
              <MapPin className="size-3.5 text-zinc-600 dark:text-zinc-400" />
              <span>{PORTFOLIO_DATA.location}</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="bg-white dark:bg-zinc-900/60 border-zinc-300 dark:border-zinc-800 h-10 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-emerald-500/50 font-medium"
                    {...register("name")}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-600 font-medium">{errors.name.message}</span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-white dark:bg-zinc-900/60 border-zinc-300 dark:border-zinc-800 h-10 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-emerald-500/50 font-medium"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-600 font-medium">{errors.email.message}</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <Textarea
                  id="message"
                  placeholder="Your Message..."
                  className="min-h-[100px] bg-white dark:bg-zinc-900/60 border-zinc-300 dark:border-zinc-800 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-emerald-500/50 resize-none font-medium"
                  {...register("message")}
                />
                {errors.message && (
                  <span className="text-[11px] text-red-600 font-medium">{errors.message.message}</span>
                )}
              </div>

              {errorMsg && (
                <div className="text-red-600 text-xs p-2.5 bg-red-500/10 rounded-md border border-red-500/20 font-medium">
                  {errorMsg}
                </div>
              )}

              {isSuccess && (
                <div className="text-emerald-700 dark:text-emerald-400 text-xs p-2.5 bg-emerald-500/10 rounded-md border border-emerald-500/20 flex items-center gap-2 font-medium">
                  <CheckCircle2 className="size-4 shrink-0" />
                  <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-10 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white font-bold text-xs transition-colors cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                    <Loader2 className="size-3.5 animate-spin ml-1" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="size-3.5 ml-1" />
                  </>
                )}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
