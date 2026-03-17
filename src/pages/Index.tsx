import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ParallaxStats from "@/components/home/ParallaxStats";
import ServicesSection from "@/components/home/ServicesSection";
import DestinationCards from "@/components/home/DestinationCards";
import UniversityLogos from "@/components/home/UniversityLogos";
import VideoSection from "@/components/home/VideoSection";
import ConsultationForm from "@/components/home/ConsultationForm";
import CountryComparison from "@/components/home/CountryComparison";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import FAQSection from "@/components/home/FAQSection";
import ImageGallery from "@/components/home/ImageGallery";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ParallaxStats />
      <ServicesSection />
      <DestinationCards />
      <VideoSection />
      <UniversityLogos />
      <ConsultationForm />
      <CountryComparison />
      <TestimonialSlider />
      <FAQSection />
      <ImageGallery />
      <CTASection />
    </Layout>
  );
};

export default Index;
