import React from 'react';
import Link from 'next/link';
import { Users, Instagram, Twitter, Youtube, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/Untitled (250 x 250 px) (1).png" 
                alt="SufiPulse Logo" 
                className="w-12 h-12 rounded-xl shadow-lg object-contain bg-white p-2"
              />
              <div>
                <h3 className="text-lg font-bold">SufiPulse</h3>
                <p className="text-sm text-emerald-300">Global Collaboration</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              We don't sell divine lyrics. We amplify them. From Kashmir's sacred valleys to the global ummah — submit your Sufi kalam. Let the world hear its pulse.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <div className="space-y-2">
              <Link href="/gallery" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Divine Kalam Gallery</Link>
              <Link href="/process" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">How It Works</Link>
              <Link href="/founder" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Our Founder</Link>
              <Link href="/writers" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Writer Universe</Link>
              <Link href="/vocalists" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Vocalist Lounge</Link>
              <Link href="/studio" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Our Studio</Link>
            </div>
          </div>

          {/* Collaborate */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Collaborate</h4>
            <div className="space-y-2">
              <Link href="/contact" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Submit Kalam</Link>
              <Link href="/contact" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Join Artist Pool</Link>
              <Link href="/contact" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Partnership</Link>
              <Link href="/about" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Our Ethos</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="p-2 bg-slate-700 rounded-lg hover:bg-emerald-600 transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-700 rounded-lg hover:bg-emerald-600 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-700 rounded-lg hover:bg-emerald-600 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-700 rounded-lg hover:bg-emerald-600 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-300">
              <Mail className="w-4 h-4" />
              <span>connect@sufipulse.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className='flex flex-col gap-2'>
            <p className="text-slate-300 text-sm">
              © 2025 SufiPulse. A project of <a  href="http://dkf.sufisciencecenter.info" target='_blank' className="text-emerald-300 hover:underline">Dr. Kumar Foundation</a> & <a href="https://sufisciencecenter.info/" target="_blank" className="text-emerald-300 hover:underline">Sufi Science Center USA</a>.
            </p>
            <p className="text-slate-300 text-sm">
             Website desgined, developed & maintained by <a href="https://primelogicsol.com" target='_blank' className="text-emerald-300 hover:underline">Prime Logic Solutions USA</a>
            </p>
            </div>
            <p className="text-slate-300 text-sm">
              "We do not monetize the sacred. We serve it."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;