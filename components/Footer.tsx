import React from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Youtube, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About SufiPulse */}
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
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <Mail className="w-4 h-4" />
                <span>connect@sufipulse.org</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <Phone className="w-4 h-4" />
                <span>+1 (XXX) XXX-XXXX | +91 (XXXX) XXXXXX</span>
              </div>
              <p className="text-slate-300 text-sm">
                Building bridges between hearts across all boundaries and cultures.
              </p>
            </div>
            <div className="space-y-2">
              <Link href="/about" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Our Mission</Link>
              <Link href="/journey" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">From Inspiration to Global Impact</Link>
              <Link href="/studio" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Inside Our Studio</Link>
              <Link href="/join" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Join the Movement</Link>
            </div>
          </div>

          {/* Explore */}
          <div className="flex justify-end">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Explore</h4>
              <div className="space-y-2 text-right">
                <Link href="/writers" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Writers</Link>
                <Link href="/vocalists" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Vocalists</Link>
                <Link href="/studio" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Studio</Link>
                <Link href="/reflections" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Reflections</Link>
                <Link href="/kalam-library" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Kalam Library</Link>
              </div>
            </div>
          </div>

          {/* Resources & Support */}
          <div className="flex justify-end">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Resources & Support</h4>
              <div className="space-y-2 text-right">
                <Link href="/how-it-works/writers" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">How It Works (Writers)</Link>
                <Link href="/how-it-works/vocalists" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">How It Works (Vocalists)</Link>
                <Link href="/faqs/writers" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Writer FAQs</Link>
                <Link href="/vocal-style-gallery" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Vocal Style Gallery</Link>
                <Link href="/guest-blogs" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 text-sm">Guest Blogs</Link>
              </div>
            </div>
          </div>

          {/* Contact & Global Hubs */}
          <div className="flex justify-end">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Contact & Global Hubs</h4>
              <div className="space-y-2 text-right">
                <div className="flex items-center justify-end space-x-2 text-sm text-slate-300">
                  <span>Virginia, USA – Global Creative Hub</span>
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-end space-x-2 text-sm text-slate-300">
                  <span>Srinagar, Kashmir – Heritage & Recording Hub</span>
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-end space-x-2 text-sm text-slate-300">
                  <span>Dubai, UAE – Remote Recording Hub</span>
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-end space-x-2 text-sm text-slate-300">
                  <span>Mumbai, India – Remote Recording Hub</span>
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-end space-x-2 text-sm text-slate-300">
                  <span>Istanbul, Turkey – Remote Recording Hub</span>
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-4">
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
                  <Linkedin className="w-5 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className='flex flex-col gap-2'>
              <p className="text-slate-300 text-sm">
                © 2025 SufiPulse. A project of <a href="http://dkf.sufisciencecenter.info" target='_blank' className="text-emerald-300 hover:underline">Dr. Kumar Foundation</a> & <a href="https://sufisciencecenter.info/" target="_blank" className="text-emerald-300 hover:underline">Sufi Science Center USA</a>.
              </p>
              <p className="text-slate-300 text-sm">
                Website designed, developed & maintained by <a href="https://primelogicsol.com" target='_blank' className="text-emerald-300 hover:underline">Prime Logic Solutions USA</a>
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