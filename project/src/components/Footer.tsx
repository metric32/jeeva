import { Heart, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { FooterWaveDivider, FooterPattern } from './illustrations/FooterIllustrations';

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#demo' },
      { name: 'For Hospitals', href: '#hospitals' },
      { name: 'Pricing', href: '#contact' },
      { name: 'Download App', href: '#contact' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Team', href: '#team' },
      { name: 'Events', href: '#events' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Data Security', href: '#' },
    ],
  };

  return (
    <>
      <div className="h-24">
        <FooterWaveDivider />
      </div>
      <footer className="bg-[#1F2937] text-white pt-16 pb-8 px-6 relative overflow-hidden">
        <FooterPattern />
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl font-bold text-white">JEEVA</div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Saving lives one bed at a time.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3B82F6] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3B82F6] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3B82F6] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:hello@jeeva.care"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#3B82F6] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 JEEVA. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span>Made with</span>
              <Heart size={16} className="text-[#EF4444] fill-[#EF4444]" />
              <span>in Odisha</span>
            </div>
          </div>
        </div>
      </div>
      </footer>
    </>
  );
}
