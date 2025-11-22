import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-[#6B7280]">
            Have questions? Want to partner? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#1F2937] mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-[#3B82F6]" />
                </div>
                <div>
                  <p className="font-medium text-[#1F2937] mb-1">Email</p>
                  <a
                    href="mailto:hello@jeeva.care"
                    className="text-[#3B82F6] hover:underline"
                  >
                    hello@jeeva.care
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F0FDF4] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-[#10B981]" />
                </div>
                <div>
                  <p className="font-medium text-[#1F2937] mb-1">Phone</p>
                  <a
                    href="tel:+919876543210"
                    className="text-[#10B981] hover:underline"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFF7ED] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-[#F59E0B]" />
                </div>
                <div>
                  <p className="font-medium text-[#1F2937] mb-1">Location</p>
                  <p className="text-[#6B7280]">
                    NIT Rourkela Campus
                    <br />
                    Rourkela, Odisha 769008
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-br from-[#3B82F6] to-[#10B981] rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Office Hours</h4>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-bold">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-bold">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-bold">Closed</span>
                </p>
              </div>
              <p className="mt-6 text-sm text-white/80">
                Emergency support available 24/7 for partner hospitals
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all"
                  placeholder="Partnership Inquiry"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all resize-none"
                  placeholder="Tell us how we can help..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#3B82F6] text-white px-8 py-4 rounded-xl hover:bg-[#2563EB] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 font-medium text-lg"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
