import AboutSection from "@/components/web/sections/AboutSection";
import HeroSection from "@/components/web/sections/HeroSection";
import IdeasSection from "@/components/web/sections/IdeasSection";
import PortfolioSection from "@/components/web/sections/PortfolioSection";
import ReferenceSection from "@/components/web/sections/ReferenceSection";
import { ServicesSection } from "@/components/web/sections/ServicesSection";

export default function(){
  return(
    <>
    <HeroSection />
    <IdeasSection />
    <ServicesSection />
    <PortfolioSection/>
    <AboutSection/>
    <ReferenceSection/>
    </>
  )
}