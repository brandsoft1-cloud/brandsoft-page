import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Founder from "@/components/Founder";
import SuccessStories from "@/components/SuccessStories";
import Contact from "@/components/Contact";
import SolutionsGrid from "@/components/SolutionsGrid";
import TrustAuthorityStrip from "@/components/b2b/TrustAuthorityStrip";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-violet-500/30">
      <Navbar />
      <Hero />
      <TrustAuthorityStrip />
      <Services />
      <SolutionsGrid />
      <Founder />
      <SuccessStories />
      <Contact />
    </main>
  );
}
