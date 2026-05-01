import Link from "next/link";
import { Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-gray-800" style={{ backgroundColor: '#0D1B2A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <img src="/images/logof.jpg" alt="Startedge Logo" className="h-12 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Startedge Global Pvt. Ltd. is a strategic consulting and leadership development firm committed to helping organizations and leaders achieve exceptional growth.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.linkedin.com/in/vishal-khasgiwala-698800214" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-executiveGold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/share/1RRKddJyjJ/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-executiveGold transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-white border-b border-gray-800 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3 font-medium">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-executiveGold transition-colors text-sm">
                  About The Firm
                </Link>
              </li>
              <li>
                <Link href="#leadership" className="text-gray-400 hover:text-executiveGold transition-colors text-sm">
                  Our Leadership
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-executiveGold transition-colors text-sm">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#insights" className="text-gray-400 hover:text-executiveGold transition-colors text-sm">
                  Insights & Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-white border-b border-gray-800 pb-2 inline-block">
              Core Services
            </h4>
            <ul className="space-y-3 font-medium">
              <li>
                <Link href="#expertise" className="text-gray-400 hover:text-executiveGold transition-colors text-sm">
                  Strategic Business Consulting
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="text-gray-400 hover:text-executiveGold transition-colors text-sm">
                  Leadership Development
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="text-gray-400 hover:text-executiveGold transition-colors text-sm">
                  Skill & Career Guidance
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="text-gray-400 hover:text-executiveGold transition-colors text-sm">
                  Corporate Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6 text-white border-b border-gray-800 pb-2 inline-block">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-executiveGold mr-3 mt-0.5 flex-shrink-0" />
                <a href="mailto:startedgeglobalpvtltd@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  startedgeglobalpvtltd@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-executiveGold mr-3 mt-0.5 flex-shrink-0" />
                <a href="tel:+918155942323" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +91 81559 42323
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-executiveGold mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Rajkot | Indore<br />India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Startedge Global Pvt. Ltd. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
