import { useState, useEffect } from "react";
import { Send, Mail, MapPin, Clock, Code } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner@2.0.3";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [helloWorldCount, setHelloWorldCount] = useState(0);
  const MAX_HELLO_WORLDS = 3;

  useEffect(() => {
    const stored = localStorage.getItem('helloWorldCount');
    if (stored) {
      setHelloWorldCount(parseInt(stored));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form submitted:", formData);
    
    toast.success("Message sent!", {
      description: "I'll get back to you as soon as possible.",
    });
    
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

  const sendHelloWorld = () => {
    if (helloWorldCount >= MAX_HELLO_WORLDS) {
      toast.error("Hello World limit reached!", {
        description: "You've already sent 3 Hello Worlds.",
      });
      return;
    }

    const newCount = helloWorldCount + 1;
    setHelloWorldCount(newCount);
    localStorage.setItem('helloWorldCount', newCount.toString());

    toast.success("Hello World sent! 👋", {
      description: `${MAX_HELLO_WORLDS - newCount} remaining`,
    });
  };

  return (
    <section id="contact" className="min-h-screen py-24 sm:py-32 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--neon-cyan)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[var(--neon-violet)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--neon-violet)]"></div>
                <span className="font-mono text-sm text-[var(--neon-violet)]">CONTACT</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--neon-violet)]"></div>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono text-[var(--neon-cyan)]">
              LET'S CONNECT
            </h2>
            
            <p className="text-foreground/70 max-w-2xl mx-auto text-base sm:text-lg">
              If you wanna talk about a project or just send me a hello world...
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Contact info */}
            <div className="space-y-6 flex flex-col">
              {/* Availability card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border-2 border-[var(--neon-cyan)]/30 bg-black/60 backdrop-blur-sm p-6 hover:border-[var(--neon-cyan)] transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[var(--neon-cyan)] mt-1" />
                  <div>
                    <h3 className="font-mono text-[var(--neon-cyan)] mb-2">Availability</h3>
                    <p className="text-sm text-foreground/70">
                      Available for freelance missions and contracts.
                    </p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-[var(--neon-cyan)]/50 to-transparent mb-4"></div>
                <div className="font-mono text-sm text-[var(--neon-cyan)]">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse shadow-lg shadow-green-500/50"></span>
                  Available immediately
                  {/* To show as unavailable, uncomment the line below and comment the line above */}
                  {/* <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse shadow-lg shadow-red-500/50"></span> */}
                  {/* Not Available */}
                </div>
              </motion.div>

              {/* Email card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="border-2 border-[var(--neon-cyan)]/30 bg-black/60 backdrop-blur-sm p-6 hover:border-[var(--neon-cyan)] transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[var(--neon-cyan)] mt-1" />
                  <div>
                    <h3 className="font-mono text-[var(--neon-cyan)] mb-2">Email</h3>
                    <a
                      href="mailto:waseem.naseeven@gmail.com"
                      className="text-sm text-foreground/80 hover:text-[var(--neon-cyan)] transition-colors break-all"
                    >
                      waseem.naseeven@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Location card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="border-2 border-[var(--neon-cyan)]/30 bg-black/60 backdrop-blur-sm p-6 hover:border-[var(--neon-cyan)] transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--neon-cyan)] mt-1" />
                  <div>
                    <h3 className="font-mono text-[var(--neon-cyan)] mb-2">Location</h3>
                    <p className="text-sm text-foreground/70">Paris, France</p>
                    <p className="text-xs text-foreground/60 mt-1">Remote / On-site</p>
                  </div>
                </div>
              </motion.div>

              {/* Hello World card - Enhanced design */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="border-2 border-[var(--neon-violet)]/50 bg-gradient-to-br from-black/80 via-black/60 to-[var(--neon-violet)]/5 backdrop-blur-sm p-6 hover:border-[var(--neon-violet)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--neon-violet)]/20"
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-3 pb-3 border-b border-[var(--neon-violet)]/30">
                    <motion.div
                      className="p-2 bg-[var(--neon-violet)]/10 border border-[var(--neon-violet)]/30"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Code className="w-5 h-5 text-[var(--neon-violet)]" />
                    </motion.div>
                    <div>
                      <h3 className="font-mono text-[var(--neon-violet)]">
                        Quick Hello
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Just want to say hi? Send a quick Hello World message!
                    </p>

                    <div className="font-mono text-xs space-y-2 p-4 border-2 border-[var(--neon-violet)]/30 bg-black/60 backdrop-blur-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground/60">Sent:</span>
                        <span className="text-[var(--neon-violet)]">{helloWorldCount}/{MAX_HELLO_WORLDS}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-foreground/60">Remaining:</span>
                        <span className="text-[var(--neon-cyan)]">{MAX_HELLO_WORLDS - helloWorldCount}</span>
                      </div>
                    </div>

                    <button
                      onClick={sendHelloWorld}
                      disabled={helloWorldCount >= MAX_HELLO_WORLDS}
                      className={`w-full py-3.5 border-2 font-mono text-sm transition-all duration-300 relative overflow-hidden group ${
                        helloWorldCount >= MAX_HELLO_WORLDS
                          ? "border-foreground/20 text-foreground/30 cursor-not-allowed bg-black/20"
                          : "border-[var(--neon-violet)] text-[var(--neon-violet)] hover:text-black"
                      }`}
                    >
                      {!helloWorldCount || helloWorldCount < MAX_HELLO_WORLDS ? (
                        <>
                          <motion.div
                            className="absolute inset-0 bg-[var(--neon-violet)] opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <span>▶</span>
                            <span>Send Hello_World()</span>
                          </span>
                        </>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <span>◼</span>
                          <span>LIMIT REACHED</span>
                        </span>
                      )}
                    </button>

                    {helloWorldCount >= MAX_HELLO_WORLDS && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-mono text-foreground/50 text-center p-3 border border-foreground/20 bg-black/40"
                      >
                        💡 Use the contact form for detailed messages
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="border-2 border-[var(--neon-cyan)]/50 bg-black/60 backdrop-blur-sm h-full flex flex-col">
                {/* Terminal header */}
                <div className="border-b-2 border-[var(--neon-cyan)]/30 px-6 py-4 flex items-center justify-between bg-gradient-to-r from-[var(--neon-cyan)]/10 to-transparent">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 font-mono text-sm text-[var(--neon-cyan)]">
                      wnaseeve@42.42.42.42
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center px-3 py-1 border-2 border-[var(--neon-cyan)] bg-[var(--neon-cyan)]/10 rounded-sm">
                    <span className="font-mono text-xs text-[var(--neon-cyan)]">~/contact</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-6 p-6 sm:p-8">
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
                        className="bg-black/80 border-[var(--neon-cyan)]/30 focus:border-[var(--neon-cyan)] font-mono text-foreground"
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
                        className="bg-black/80 border-[var(--neon-cyan)]/30 focus:border-[var(--neon-cyan)] font-mono text-foreground"
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
                      className="bg-black/80 border-[var(--neon-cyan)]/30 focus:border-[var(--neon-cyan)] font-mono text-foreground"
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
                      rows={8}
                      className="bg-black/80 border-[var(--neon-cyan)]/30 focus:border-[var(--neon-cyan)] font-mono resize-none flex-1 text-foreground"
                      placeholder="Describe your project or mission..."
                    />
                  </div>

                  <div className="flex flex-col gap-4 mt-auto">
                    <Button
                      type="submit"
                      className="w-full md:w-auto bg-[var(--neon-cyan)] text-black hover:bg-[var(--neon-cyan)]/90 font-mono border-2 border-[var(--neon-cyan)] hover:shadow-lg hover:shadow-[var(--neon-cyan)]/30 transition-all duration-300 group"
                    >
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      SEND MESSAGE
                    </Button>

                    <p className="text-xs text-foreground/50 font-mono">
                      <span className="text-[var(--neon-cyan)]">*</span> Required fields
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}