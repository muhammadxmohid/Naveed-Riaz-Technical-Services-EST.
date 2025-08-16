import { Link } from "wouter";
import { PaintBucket, Grid3X3, Wrench, Zap, Snowflake, Hammer } from "lucide-react";

const services = [
  {
    id: "wallpaper",
    title: "Wallpaper & Plaster Works",
    description: "Professional wallpaper installation and high-quality plaster works for interior finishing",
    icon: PaintBucket,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "tiling",
    title: "Floor & Wall Tiling",
    description: "Expert tiling services for floors and walls with precision installation and finishing",
    icon: Grid3X3,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "plumbing",
    title: "Plumbing & Sanitary",
    description: "Complete plumbing solutions including installation, repairs, and sanitary fitting services",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "electrical",
    title: "Electrical Installation",
    description: "Professional electromechanical equipment installation and maintenance services",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "hvac",
    title: "HVAC Systems",
    description: "Air-conditioning, ventilation, and air filtration systems installation and maintenance",
    icon: Snowflake,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: "carpentry",
    title: "Carpentry & Flooring",
    description: "False ceiling, light partitions, carpentry, and wood flooring installation services",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Professional Services</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            We provide comprehensive technical services with years of experience and professional expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <img 
                  src={service.image} 
                  alt={`${service.title} services`} 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <div className="flex items-center mb-4">
                  <IconComponent className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-secondary mb-6">{service.description}</p>
                <Link 
                  href="/contact" 
                  className="text-primary font-semibold hover:text-blue-700 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
