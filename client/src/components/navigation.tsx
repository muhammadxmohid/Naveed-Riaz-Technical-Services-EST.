import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const scrollToSection = (sectionId: string) => {
    if (location === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-xl font-bold text-primary">NAVEED RIAZ</h1>
                <p className="text-xs text-secondary">TECHNICAL SERVICES EST.</p>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link 
                  href="/" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/") ? "text-primary" : "text-dark-slate hover:text-primary"
                  }`}
                >
                  Home
                </Link>
                <Link 
                  href="/services" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/services") ? "text-primary" : "text-dark-slate hover:text-primary"
                  }`}
                >
                  Services
                </Link>
                <Link 
                  href="/about" 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/about") ? "text-primary" : "text-dark-slate hover:text-primary"
                  }`}
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                type="button" 
                className="inline-flex items-center justify-center p-2 rounded-md text-dark-slate hover:text-primary focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 sticky top-16 z-40">
          <div className="px-4 py-2 space-y-1">
            <Link 
              href="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive("/") ? "text-primary bg-blue-50" : "text-dark-slate hover:text-primary hover:bg-gray-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive("/services") ? "text-primary bg-blue-50" : "text-dark-slate hover:text-primary hover:bg-gray-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive("/about") ? "text-primary bg-blue-50" : "text-dark-slate hover:text-primary hover:bg-gray-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block bg-primary text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
