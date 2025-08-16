import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import WhyChooseUs from "@/components/why-choose-us";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    document.title = "NAVEED RIAZ TECHNICAL SERVICES EST. - Professional Construction & Technical Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional technical services in UAE including wallpaper installation, plumbing, electrical, HVAC, tiling, and carpentry. Get your free quote today.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional technical services in UAE including wallpaper installation, plumbing, electrical, HVAC, tiling, and carpentry. Get your free quote today.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="font-inter bg-gray-50 text-dark-slate">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesOverview />
        <WhyChooseUs />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
