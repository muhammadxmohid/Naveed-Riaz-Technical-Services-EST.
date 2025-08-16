import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Link } from "wouter";
import { PaintBucket, Grid3X3, Wrench, Zap, Snowflake, Hammer } from "lucide-react";

const services = [
  {
    id: "wallpaper",
    title: "Wallpaper & Plaster Works",
    description: "Professional wallpaper installation and high-quality plaster works for interior finishing. Our experienced team ensures perfect application with attention to detail and quality materials.",
    features: [
      "Professional wallpaper installation",
      "Interior and exterior plastering",
      "Surface preparation and finishing",
      "Quality materials and tools",
      "Clean and efficient work"
    ],
    icon: PaintBucket,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "tiling",
    title: "Floor & Wall Tiling",
    description: "Expert tiling services for floors and walls with precision installation and finishing. We work with various tile types and provide professional installation for residential and commercial spaces.",
    features: [
      "Ceramic and porcelain tile installation",
      "Natural stone tile work",
      "Waterproofing and preparation",
      "Precise cutting and fitting",
      "Grouting and sealing"
    ],
    icon: Grid3X3,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "plumbing",
    title: "Plumbing & Sanitary Installation",
    description: "Complete plumbing solutions including installation, repairs, and sanitary fitting services. Our certified plumbers handle all types of plumbing work with quality materials and professional service.",
    features: [
      "Pipe installation and repair",
      "Sanitary fixture installation",
      "Water heater installation",
      "Drainage and sewage systems",
      "Emergency plumbing services"
    ],
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "electrical",
    title: "Electromechanical Equipment Installation",
    description: "Professional electromechanical equipment installation and maintenance services. Our qualified electricians ensure safe and efficient electrical installations for all your needs.",
    features: [
      "Electrical wiring and installation",
      "Panel and switchboard installation",
      "Motor and equipment installation",
      "Lighting system installation",
      "Electrical maintenance and repair"
    ],
    icon: Zap,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "hvac",
    title: "Air-Conditioning & Ventilation Systems",
    description: "Air-conditioning, ventilation, and air filtration systems installation and maintenance. We provide comprehensive HVAC solutions for optimal indoor climate control.",
    features: [
      "AC unit installation and maintenance",
      "Ventilation system design",
      "Air filtration systems",
      "Ductwork installation",
      "Energy-efficient solutions"
    ],
    icon: Snowflake,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: "carpentry",
    title: "Carpentry & Wood Flooring Works",
    description: "False ceiling, light partitions, carpentry, and wood flooring installation services. Our skilled carpenters deliver quality woodwork with precision and attention to detail.",
    features: [
      "False ceiling installation",
      "Wood flooring installation",
      "Custom carpentry work",
      "Light partition systems",
      "Furniture and cabinet installation"
    ],
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  }
];

export default function Services() {
  useEffect(() => {
    document.title = "Our Services - NAVEED RIAZ TECHNICAL SERVICES EST.";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive technical services including wallpaper installation, tiling, plumbing, electrical work, HVAC systems, and carpentry in UAE. Professional quality guaranteed.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Comprehensive technical services including wallpaper installation, tiling, plumbing, electrical work, HVAC systems, and carpentry in UAE. Professional quality guaranteed.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="font-inter bg-gray-50 text-dark-slate">
      <Navigation />
      <main>
        {/* Header Section */}
        <section className="bg-primary text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Professional Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive technical services delivered by experienced professionals with quality guarantee
            </p>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={isEven ? '' : 'lg:col-start-2'}>
                      <img 
                        src={service.image} 
                        alt={`${service.title} services`} 
                        className="rounded-xl shadow-lg w-full h-96 object-cover"
                      />
                    </div>
                    <div className={isEven ? '' : 'lg:col-start-1'}>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold">{service.title}</h2>
                      </div>
                      <p className="text-lg text-secondary mb-6">{service.description}</p>
                      <ul className="space-y-2 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            <span className="text-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link 
                        href="/contact" 
                        className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Get Quote for This Service
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-slate mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-dark-slate mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and detailed quote for your technical service needs.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Get Your Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
