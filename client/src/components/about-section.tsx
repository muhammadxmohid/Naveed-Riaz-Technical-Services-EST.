import { Wrench, Users, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Wrench,
    title: "15+ Years Experience",
    description: "Established technical service provider with extensive experience in construction and maintenance"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals specialized in various technical services and construction trades"
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description: "Committed to delivering quality results and maintaining long-term client relationships"
  }
];

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About NAVEED RIAZ TECHNICAL SERVICES</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Your trusted partner for comprehensive technical services and construction solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{stat.title}</h3>
                <p className="text-secondary">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
