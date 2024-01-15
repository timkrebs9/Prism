import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";


const LandingPage = () => {
  return ( 
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <Faq />
      <Footer />
    </div>
   );
}
 
export default LandingPage;