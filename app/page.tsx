import Hero from "@/components/home/Hero";
import PopularTools from "@/components/home/PopularTools";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import AboutSection from "@/components/home/AboutSection";
import FeaturedTools from "@/components/home/FeaturedTools";
import SupportedFormats from "@/components/home/SupportedFormats";
import FAQSection from "@/components/home/FAQSection";
import SEOFooter from "@/components/home/SEOFooter";

export default function HomePage() {
  return (
    <>
      <Hero />

      <PopularTools />

      <WhyChooseUs />

      <HowItWorks />

      <AboutSection />

      <FeaturedTools />

      <SupportedFormats />

      <FAQSection />

      <SEOFooter />
    </>
  );
}