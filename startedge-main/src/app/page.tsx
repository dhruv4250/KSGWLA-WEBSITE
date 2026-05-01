import Navbar from "@/components/Navbar";
import HeroAuthority from "@/components/HeroAuthority";
import Gallery from "@/components/Gallery";
import ImpactStats from "@/components/ImpactStats";
import Expertise from "@/components/Expertise";
import AboutFirm from "@/components/AboutFirm";
import Leadership from "@/components/Leadership";
import GlobalExperience from "@/components/GlobalExperience";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroAuthority />
      <Testimonials />
      <Gallery />
      <ImpactStats />
      <Expertise />
      <AboutFirm />
      <Leadership />
      {/* <GlobalExperience /> */}
      <CaseStudies />
      {/* <Insights /> */}
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
