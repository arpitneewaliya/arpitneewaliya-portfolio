"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, MapPin, Code, Briefcase, Globe, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Something went wrong. Please try again later.');

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-white/5 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg px-2">
            Whether you have a specific project in mind or just want to say hi, my inbox is always open. Let's build something enduring together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-400">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="bg-white/5 border-white/10 h-12 text-white placeholder:text-gray-600 focus-visible:ring-1 focus-visible:ring-white/30" 
                    {...register("name")}
                  />
                  {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-400">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="hello@example.com" 
                    className="bg-white/5 border-white/10 h-12 text-white placeholder:text-gray-600 focus-visible:ring-1 focus-visible:ring-white/30" 
                    {...register("email")}
                  />
                  {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-400">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-1 focus-visible:ring-white/30 resize-none" 
                  {...register("message")}
                />
                {errors.message && <span className="text-red-400 text-sm">{errors.message.message}</span>}
              </div>

              {errorMsg && <div className="text-red-400 text-sm p-3 bg-red-400/10 rounded-md border border-red-400/20">{errorMsg}</div>}
              {isSuccess && <div className="text-green-400 text-sm p-3 bg-green-400/10 rounded-md border border-green-400/20 flex items-center"><CheckCircle2 className="w-4 h-4 mr-2"/> Message sent successfully! I'll get back to you soon.</div>}

              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full h-14 rounded-full bg-white text-black hover:bg-gray-200 disabled:opacity-70">
                {isSubmitting ? (
                  <>Sending... <Loader2 className="w-4 h-4 ml-2 animate-spin" /></>
                ) : (
                  <>Send Message <Send className="w-4 h-4 ml-2" /></>
                )}
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
            <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center space-y-4 mb-6 sm:mb-8">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-2">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Direct Email</h3>
              <a href="mailto:arpit.neewaliya@gmail.com" className="text-gray-400 hover:text-white transition-colors">arpit.neewaliya@gmail.com</a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "GitHub", icon: FaGithub, link: "https://github.com/arpitneewaliya" },
                { name: "X (Twitter)", icon: FaXTwitter, link: "https://x.com/arpitneewaliya" },
                { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/arpitneewaliya/" },
                { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/arpit.neewaliya" },
              ].map(social => (
                <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 sm:p-6 border border-white/10 bg-white/5 rounded-xl sm:rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group">
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
