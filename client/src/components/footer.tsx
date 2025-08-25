import { Link } from "wouter";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-slate text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">
              NAVEED RIAZ TECHNICAL SERVICES EST.
            </h3>
            <p className="text-gray-300 mb-4">
              Professional technical services for construction, maintenance, and
              installation projects across the UAE.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Wallpaper & Plaster Works
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Floor & Wall Tiling
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Plumbing & Sanitary
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Electrical Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  HVAC Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Carpentry & Flooring
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" /> +971 55 915 6868
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" /> navriaz1978@gmail.com
              </p>
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" /> 361, Al Khatib Building,
                Satwa, Dubai
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; 2024 NAVEED RIAZ TECHNICAL SERVICES EST. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
