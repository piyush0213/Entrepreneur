import { ParticleBackground } from "@/components/ParticleBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { TransformationSection } from "@/components/sections/TransformationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { QualificationSection } from "@/components/sections/QualificationSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
    return (
        <main className="relative">
            <ParticleBackground />
            <HeroSection />
            <ProblemSection />
            <TransformationSection />
            <SkillsSection />
            <ResultsSection />
            <PricingSection />
            <QualificationSection />
            <VisionSection />
            <FinalCTASection />
            <Footer />
        </main>
    );
}
