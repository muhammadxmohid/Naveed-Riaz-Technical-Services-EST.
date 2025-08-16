import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Link } from "wouter";
import { Award, Users, ThumbsUp, CheckCircle, Clock, Shield } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us - NAVEED RIAZ TECHNICAL SERVICES EST.";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about NAVEED RIAZ TECHNICAL SERVICES EST. - 15+ years of professional technical services in UAE. Trusted by clients for quality construction and maintenance work.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Learn about NAVEED RIAZ TECHNICAL SERVICES EST. - 15+ years of professional technical services in UAE. Trusted by clients for quality construction and maintenance work.';
      document.head.appendChild(meta);
    }
  }, []);

  const stats = [
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "Established technical service provider with extensive experience"
    },
    {
      icon: Users,
      number: "500+",
      label: "Projects Completed",
      description: "Successfully completed projects across UAE"
    },
    {
      icon: ThumbsUp,
      number: "100%",
      label: "Customer Satisfaction",
      description: "Committed to quality and client satisfaction"
    }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Quality Workmanship",
      description: "We take pride in delivering high-quality work that exceeds expectations and stands the test of time."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and commit to completing projects on time, every time."
    },
    {
      icon: Shield,
      title: "Professional Integrity",
      description: "Our business is built on trust, transparency, and professional conduct in all our dealings."
    }
  ];

  return (
    <div className="font-inter bg-gray-50 text-dark-slate">
      <Navigation />
      <main>
        {/* Header Section */}
        <section className="bg-primary text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Our Company</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner for comprehensive technical services and construction solutions in the UAE
            </p>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-secondary">
                  <p>
                    NAVEED RIAZ TECHNICAL SERVICES EST. was founded with a vision to provide reliable, 
                    professional technical services across the UAE. With over 15 years of experience 
                    in the construction and maintenance industry, we have built a reputation for quality, 
                    reliability, and customer satisfaction.
                  </p>
                  <p>
                    Our journey began with a simple commitment: to deliver exceptional technical services 
                    that exceed our clients' expectations. Today, we are proud to be a trusted partner 
                    for hundreds of satisfied customers across all emirates.
                  </p>
                  <p>
                    We specialize in a comprehensive range of services including wallpaper installation, 
                    plumbing, electrical work, HVAC systems, tiling, and carpentry. Our team of skilled 
                    professionals brings expertise, dedication, and attention to detail to every project.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional construction team at work" 
                  className="rounded-xl shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Achievements</h2>
              <p className="text-xl text-secondary max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and customer satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center bg-white rounded-xl p-8 shadow-lg">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                    <p className="text-secondary">{stat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-secondary max-w-3xl mx-auto">
                The principles that guide our work and define our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-dark-slate" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-secondary">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional team meeting" 
                  className="rounded-xl shadow-lg w-full h-96 object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Expert Team</h2>
                <div className="space-y-4 text-lg text-secondary">
                  <p>
                    Our success is built on the expertise and dedication of our professional team. 
                    Each member brings specialized skills and years of experience in their respective fields.
                  </p>
                  <p>
                    From certified plumbers and electricians to skilled carpenters and HVAC technicians, 
                    our team is equipped to handle any technical service requirement with precision and efficiency.
                  </p>
                  <p>
                    We invest in continuous training and development to ensure our team stays updated 
                    with the latest techniques, safety standards, and industry best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the difference of working with true professionals. Contact us today for your technical service needs.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-accent text-dark-slate px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-lg"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
