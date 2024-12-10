'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Linkedin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Chrome,
  Globe
} from 'lucide-react';

interface MenuSection {
  title: string;
  links: { label: string; href: string; }[];
}

const menuSections: MenuSection[] = [
  {
    title: "Menu",
    links: [
      { label: "New arrivals", href: "/new-arrivals" },
      { label: "Best sellers", href: "/best-sellers" },
      { label: "Recently viewed", href: "/recently-viewed" },
      { label: "Popular this week", href: "/popular" },
      { label: "All products", href: "/products" },
    ]
  },
  {
    title: "Categories",
    links: [
      { label: "Crockery", href: "/category/crockery" },
      { label: "Furniture", href: "/category/furniture" },
      { label: "Homeware", href: "/category/homeware" },
      { label: "Plant pots", href: "/category/plant-pots" },
      { label: "Chairs", href: "/category/chairs" },
      { label: "Crockery", href: "/category/crockery" },
    ]
  },
  {
    title: "Our company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Vacancies", href: "/careers" },
      { label: "Contact us", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Returns policy", href: "/returns" },
    ]
  }
];

const socialLinks = [
  { Icon: Linkedin, href: "#" },
  { Icon: Facebook, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Globe, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Chrome, href: "#" },
];

const Footer = (): React.ReactElement => {
  const [email, setEmail] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#2A254B] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* Menu Sections */}
          {menuSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-medium mb-4">Join our mailing list</h3>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 bg-transparent border border-white text-white placeholder-gray-300 text-sm rounded-l-md"
                required
              />
              <button
                type="submit"
                className="bg-white text-[#2A254B] px-6 py-2 text-sm rounded-r-md hover:bg-gray-100 transition-colors"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">Copyright 2022 Avion LTD</p>
          <div className="flex gap-4">
            {socialLinks.map(({ Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
