import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Terminal, Mail, MessageSquare, User, Github, Linkedin, Tag, FileText } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([
    '> Contact system initialized...',
    '> Ready to receive messages',
    '> Type your message and press SEND'
  ]);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add initial terminal output
    const initialOutput = [
      ...terminalOutput,
      `> Processing message from ${formData.name}...`,
      '> Validating input data...',
      '> Establishing secure connection...'
    ];
    
    setTerminalOutput(initialOutput);

    try {
      // Submit to Supabase
      const { error } = await supabase
        .from('contacts')
        .insert({
          name: formData.name,
          email: formData.email,
          inquiry_type: formData.inquiryType,
          subject: formData.subject,
          message: formData.message
        });

      if (error) throw error;

      // Success terminal output
      const successOutput = [
        ...initialOutput,
        '> Message sent successfully!',
        '> Thank you for reaching out. I\'ll get back to you soon.',
        '> Connection closed.'
      ];

      setTerminalOutput(successOutput);
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({ name: '', email: '', inquiryType: '', subject: '', message: '' });
      
    } catch (error) {
      // Error terminal output
      const errorOutput = [
        ...initialOutput,
        '> Error: Failed to send message',
        '> Please try again or contact me directly',
        '> Connection closed.'
      ];

      setTerminalOutput(errorOutput);
      
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate or just want to chat about tech and remote work?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Terminal Interface */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="card-glow rounded-xl p-6"
          >
            <div className="bg-background/50 rounded-lg p-4 mb-6">
              {/* Terminal Header */}
              <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-border">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <Terminal className="w-4 h-4 text-muted-foreground ml-2" />
                <span className="text-sm font-mono text-muted-foreground">
                  wolfie_e@portfolio:~$
                </span>
              </div>

              {/* Terminal Output */}
              <div className="font-mono text-sm space-y-1 h-64 overflow-y-auto">
                {terminalOutput.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${
                      line.includes('successfully') || line.includes('Thank you') 
                        ? 'text-green-400' 
                        : line.includes('Error') 
                        ? 'text-red-400'
                        : 'text-terminal-green'
                    }`}
                  >
                    {line}
                  </motion.div>
                ))}
                <div className="terminal-cursor"></div>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="mailto:kdiyorbek133@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span>kdiyorbek133@gmail.com</span>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="https://t.me/Wolfie_09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-primary" />
                <span>@Wolfie_09 on Telegram</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                href="https://www.linkedin.com/in/diyorbek-komilov-b19802227"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
                <span>LinkedIn Profile</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                href="https://github.com/Wolfie-07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <Github className="w-5 h-5 text-primary" />
                <span>GitHub Profile</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glow rounded-xl p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-foreground mb-2">
                  <User className="w-4 h-4" />
                  <span>Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-foreground mb-2">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-foreground mb-2">
                  <Tag className="w-4 h-4" />
                  <span>Inquiry Type</span>
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                >
                  <option value="">Select inquiry type</option>
                  <option value="project">Project Collaboration</option>
                  <option value="job">Job Opportunity</option>
                  <option value="consultation">Consultation</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-foreground mb-2">
                  <FileText className="w-4 h-4" />
                  <span>Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200"
                  placeholder="Brief subject of your message"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-foreground mb-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Message</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 resize-none"
                  placeholder="Tell me about your project, idea, or just say hello!"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full btn-electric flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Messages are stored securely via{' '}
                <span className="text-primary font-semibold">
                  Supabase integration
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;