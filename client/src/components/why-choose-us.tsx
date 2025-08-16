import { Award, Clock, Shield, DollarSign } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Professional Expertise",
    description: "Years of experience in technical services with skilled professionals and quality workmanship"
  },
  {
    icon: Clock,
    title: "Timely Completion",
    description: "Committed to completing projects on time without compromising on quality standards"
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "All our work comes with quality assurance and professional warranty coverage"
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Fair and transparent pricing for all services with detailed quotations"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional construction team at work" 
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Why Choose Our Services?</h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-secondary">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
