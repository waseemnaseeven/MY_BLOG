import { useState } from "react";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation - replace with your actual sending logic
    console.log("Form submitted:", formData);
    
    toast.success("Message sent!", {
      description: "I'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--neon-yellow)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header with cyberpunk terminal style */}
          <div className="mb-12 relative group">
            {/* Glowing corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-[var(--neon-magenta)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-r-4 border-t-4 border-[var(--neon-cyan)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative border border-[var(--neon-magenta)]/50 bg-gradient-to-br from-card/80 via-card/50 to-card/80 backdrop-blur-md shadow-2xl shadow-[var(--neon-magenta)]/10 overflow-hidden">
              {/* Scan line effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--neon-magenta)]/5 to-transparent animate-pulse pointer-events-none"></div>
              
              {/* Terminal top bar */}
              <div className="relative border-b border-[var(--neon-magenta)]/30 px-4 py-3 bg-gradient-to-r from-[var(--neon-magenta)]/5 via-transparent to-[var(--neon-cyan)]/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 border border-red-600 shadow-lg shadow-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 border border-yellow-600 shadow-lg shadow-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 border border-green-600 shadow-lg shadow-green-500/50"></div>
                    </div>
                    <div className="h-4 w-px bg-[var(--neon-magenta)]/30 mx-2"></div>
                    <span className="font-mono text-sm text-[var(--neon-magenta)]">
                      wnaseeve<span className="text-muted-foreground">@</span><span className="text-[var(--neon-cyan)]">42.42.42.42</span>
                    </span>
                  </div>
                  <div className="hidden md:flex items-center gap-2 px-3 py-1 border border-[var(--neon-magenta)]/30 bg-[var(--neon-magenta)]/10 rounded-sm">
                    <span className="font-mono text-xs text-[var(--neon-magenta)]">~/contact</span>
                  </div>
                </div>
              </div>
              
              {/* Terminal content */}
              <div className="relative p-8 font-mono space-y-6">
                {/* Command prompt */}
                <div className="flex items-center gap-3">
                  <span className="text-[var(--neon-cyan)]">~</span>
                  <span className="text-foreground">touch contact</span>
                  <div className="w-2 h-4 bg-[var(--neon-magenta)] animate-pulse ml-1"></div>
                </div>
                
                {/* Output */}
                <div className="ml-6 pl-4 border-l-2 border-[var(--neon-magenta)]/30">
                  <p className="text-muted-foreground leading-relaxed">
                    Have a project or mission? Feel free to contact me to discuss your Backend Golang or AWS Cloud DevOps needs.
                  </p>
                </div>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-magenta)] to-transparent opacity-50"></div>
            </div>

            {/* Bottom corners */}
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-4 border-b-4 border-[var(--neon-yellow)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-[var(--neon-orange)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Contact info */}
            <div className="space-y-6 flex flex-col h-full">
              {/* Availability card */}
              <div className="border border-[var(--neon-cyan)]/30 bg-card/50 backdrop-blur-sm p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[var(--neon-cyan)] mt-1" />
                  <div>
                    <h3 className="font-mono mb-2">Availability</h3>
                    <p className="text-sm text-muted-foreground">
                      Available for freelance missions and contracts.
                    </p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-[var(--neon-cyan)]/50 to-transparent mb-4"></div>
                <div className="font-mono text-sm text-[var(--neon-cyan)]">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Available immediately
                  {/* To show as unavailable, uncomment the line below and comment the line above */}
                  {/* <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span> */}
                  {/* Not Available */}
                </div>
              </div>

              {/* Email card */}
              <div className="border border-[var(--neon-cyan)]/30 bg-card/50 backdrop-blur-sm p-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[var(--neon-cyan)] mt-1" />
                  <div>
                    <h3 className="font-mono mb-2">Email</h3>
                    <a
                      href="mailto:waseem.naseeven@gmail.com"
                      className="text-sm text-[var(--neon-cyan)] hover:text-[var(--neon-magenta)] transition-colors break-all"
                    >
                      waseem.naseeven@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location card */}
              <div className="border border-[var(--neon-cyan)]/30 bg-card/50 backdrop-blur-sm p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--neon-cyan)] mt-1" />
                  <div>
                    <h3 className="font-mono mb-2">Location</h3>
                    <p className="text-sm text-muted-foreground">Paris, France</p>
                    <p className="text-xs text-muted-foreground mt-1">Remote / On-site</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="border border-[var(--neon-cyan)]/30 bg-card/50 backdrop-blur-sm p-8 h-full flex flex-col">
                {/* Terminal header */}
                <div className="border-b border-[var(--neon-cyan)]/30 pb-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 font-mono text-sm text-muted-foreground">
                      ~/contact-form
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-mono text-sm mb-2 text-[var(--neon-cyan)]"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-input-background border-[var(--neon-cyan)]/30 focus:border-[var(--neon-cyan)] font-mono"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block font-mono text-sm mb-2 text-[var(--neon-cyan)]"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-input-background border-[var(--neon-cyan)]/30 focus:border-[var(--neon-cyan)] font-mono"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block font-mono text-sm mb-2 text-[var(--neon-cyan)]"
                    >
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-input-background border-[var(--neon-cyan)]/30 focus:border-[var(--neon-cyan)] font-mono"
                      placeholder="Your company (optional)"
                    />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <label
                      htmlFor="message"
                      className="block font-mono text-sm mb-2 text-[var(--neon-cyan)]"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-input-background border-[var(--neon-cyan)]/30 focus:border-[var(--neon-cyan)] font-mono resize-none flex-1"
                      placeholder="Describe your project or mission..."
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button
                      type="submit"
                      className="w-full md:w-auto bg-[var(--neon-cyan)] text-[var(--dark-bg)] hover:bg-[var(--neon-magenta)] font-mono border-2 border-[var(--neon-cyan)] hover:border-[var(--neon-magenta)] transition-all duration-300 group"
                    >
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send message
                    </Button>

                    <p className="text-xs text-muted-foreground font-mono">
                      <span className="text-[var(--neon-cyan)]">*</span> Required fields
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
