import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import ClientLogos from '@/components/ClientLogos';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Founder from '@/components/Founder';
import SuccessStories from '@/components/SuccessStories';
import Contact from '@/components/Contact';
import SolutionsGrid from '@/components/SolutionsGrid';

export default function Home() {
    return (
        <main className="min-h-screen relative selection:bg-violet-500/30">
            <Navbar />
            <Hero />
            <StatsStrip />
            <ClientLogos />
            <Services />
            <SolutionsGrid />
            <Pricing />
            <Founder />
            <SuccessStories />
            <Contact />
        </main>
    );
}
