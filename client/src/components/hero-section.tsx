import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="relative bg-primary text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Professional Technical Services You Can Trust
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-200">
            Expert construction, plumbing, electrical, and HVAC services for residential and commercial projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="bg-accent text-dark-slate px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-center inline-block"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-center inline-block"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
