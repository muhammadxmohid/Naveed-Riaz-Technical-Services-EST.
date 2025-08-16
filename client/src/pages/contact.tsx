import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us - NAVEED RIAZ TECHNICAL SERVICES EST.";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact NAVEED RIAZ TECHNICAL SERVICES EST. for professional technical services in UAE. Get your free quote today. Available across all emirates.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Contact NAVEED RIAZ TECHNICAL SERVICES EST. for professional technical services in UAE. Get your free quote today. Available across all emirates.';
      document.head.appendChild(meta);
    }
  }, []);

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      info: "+971 XX XXX XXXX",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@naveedriazservices.com",
      description: "Send us your project details"
    },
    {
      icon: MapPin,
      title: "Service Area",
      info: "UAE - All Emirates",
      description: "We serve across the United Arab Emirates"
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "Saturday - Thursday: 8:00 AM - 6:00 PM",
      description: "We're here when you need us"
    }
  ];

  return (
    <div className="font-inter bg-gray-50 text-dark-slate">
      <Navigation />
      <main>
        {/* Header Section */}
        <section className="bg-primary text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to start your project? Get in touch with our professional team for a free consultation and detailed quote.
            </p>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-secondary">Multiple ways to reach us for your convenience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="text-center bg-gray-50 rounded-xl p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                    <p className="font-medium text-primary mb-2">{method.info}</p>
                    <p className="text-sm text-secondary">{method.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Contact Form Section */}
        <ContactSection />

        {/* Additional Info Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Why Choose Our Services?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <h3 className="font-semibold">Free Consultation & Quote</h3>
                      <p className="text-secondary">Get a detailed assessment and transparent pricing for your project</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <h3 className="font-semibold">Quick Response Time</h3>
                      <p className="text-secondary">We respond to all inquiries within 24 hours</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <h3 className="font-semibold">Professional Team</h3>
                      <p className="text-secondary">Experienced and certified technicians for all services</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <h3 className="font-semibold">Quality Guarantee</h3>
                      <p className="text-secondary">All work comes with warranty and quality assurance</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Service Areas</h2>
                <p className="text-secondary mb-4">
                  We proudly serve clients across all emirates in the UAE, providing consistent quality 
                  and professional service regardless of location.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    <span>Dubai</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    <span>Abu Dhabi</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    <span>Sharjah</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    <span>Ajman</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    <span>Fujairah</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    <span>Ras Al Khaimah</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    <span>Umm Al Quwain</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
