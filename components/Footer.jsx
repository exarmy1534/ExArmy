import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer(){
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">
              Ex-Army Travels
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted car rental partner in Varanasi for over 5 years.
              Professional, reliable, and affordable.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-amber-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-400">About</Link></li>
              <li><Link href="/rent" className="hover:text-amber-400">Our Fleet</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li >Airport Transfers</li>
              <li >Temple Tours</li>
              <li >Outstation Trips</li>
              <li >Corporate Rentals</li>
              <li >Wedding & Events</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">

              {/* Phone */}
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-400 mt-1" />
                <a
                  href="tel:+917830931514"
                  className="hover:text-amber-400 transition-colors"
                >
                  +91 78309 31514
                </a>
              </li>

              {/* Email */}
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-400 mt-1" />
                <a
                  href="mailto:exarmy1534@gmail.com?subject=Car Rental Inquiry"
                  className="hover:text-amber-400 transition-colors"
                >
                  exarmy1534@gmail.com
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1" />
                <p>
                  Varanasi, Uttar Pradesh
                  <br />
                  India - 221001
                </p>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ex-Army Travels. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm mt-4 md:mt-0">
              <a  >Privacy Policy</a>
              <a  >Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
