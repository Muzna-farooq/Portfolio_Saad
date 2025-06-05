import { useState, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Mail, Send, MapPin, Phone, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          'service_dq7k59k',    // <-- Replace with your EmailJS service ID
          'template_hy3h8uq',   // <-- Replace with your EmailJS template ID
          formRef.current,
          'Mxe7H6qCOVZHiMbqP'     // <-- Replace with your EmailJS public key
        );

        setSubmitStatus({
          type: 'success',
          message: "Thanks for your message! I'll get back to you soon.",
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary-900 rounded-full filter blur-[150px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind? Let's discuss how I can help bring your vision to life."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-primary-800/60 backdrop-blur-sm rounded-xl p-6 border border-primary-700 shadow-lg h-full">
              <h3 className="text-2xl font-display font-semibold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white/70 text-sm">Email</h4>
                    <a href="mailto:saadkhalid29@gmail.com" className="text-white hover:text-accent-300 transition-colors">saadkhalid29@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white/70 text-sm">Phone</h4>
                    <p className="text-white">+92 324 5757508</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white/70 text-sm">Location</h4>
                    <p className="text-white">Remote</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-primary-700">
                  <h4 className="text-white text-sm mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/saad-butt-3142ba120//" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-700 hover:bg-secondary-800 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} className="text-white" />
                    </a>
                    <a 
                      href="mailto:saadkhalid29@gmail.com" 
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-700 hover:bg-secondary-800 transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={18} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-primary-800/60 backdrop-blur-sm rounded-xl p-6 border border-primary-700 shadow-lg"
            >
              <h3 className="text-2xl font-display font-semibold text-white mb-6">Send Me a Message</h3>

              {submitStatus.type && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-900/20 text-green-300 border border-green-900' 
                    : 'bg-red-900/20 text-red-300 border border-red-900'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-primary-700/50 border border-primary-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-400 placeholder-white/40"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-primary-700/50 border border-primary-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-400 placeholder-white/40"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-white/80 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-primary-700/50 border border-primary-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-400 placeholder-white/40"
                  placeholder="Enter the subject"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-primary-700/50 border border-primary-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-400 placeholder-white/40"
                  placeholder="Tell me about your project or inquiry"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-6 py-3 bg-secondary-800 hover:bg-secondary-700 text-white font-medium rounded-lg transition-colors shadow-glow flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
