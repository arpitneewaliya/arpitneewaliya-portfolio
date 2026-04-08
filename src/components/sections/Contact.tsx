"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, MapPin, Code, Briefcase, Globe, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Whether you have a specific project in mind or just want to say hi, my inbox is always open. Let's build something enduring together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-400">Full Name</Label>
                  <Input id="name" placeholder="John Doe" className="bg-white/5 border-white/10 h-12 text-white placeholder:text-gray-600 focus-visible:ring-1 focus-visible:ring-white/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-400">Email Address</Label>
                  <Input id="email" type="email" placeholder="hello@example.com" className="bg-white/5 border-white/10 h-12 text-white placeholder:text-gray-600 focus-visible:ring-1 focus-visible:ring-white/30" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-400">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-1 focus-visible:ring-white/30 resize-none" 
                />
              </div>
              <Button type="submit" size="lg" className="w-full h-14 rounded-full bg-white text-black hover:bg-gray-200">
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center space-y-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-2">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Direct Email</h3>
              <a href="mailto:hello@monolith.studio" className="text-gray-400 hover:text-white transition-colors">hello@monolith.studio</a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Code", icon: Code, link: "#" },
                { name: "Work", icon: Briefcase, link: "#" },
                { name: "Website", icon: Globe, link: "#" },
                { name: "Email", icon: Mail, link: "#" },
              ].map(social => (
                <a key={social.name} href={social.link} className="flex items-center justify-center p-6 border border-white/10 bg-white/5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group">
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white mr-3" />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white">{social.name}</span>
                </a>
              ))}
            </div>
            
            <div className="mt-8 flex items-center justify-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-2" /> Based in India
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
