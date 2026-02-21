import { ParticleBackground } from "@/components/ParticleBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { TransformationSection } from "@/components/sections/TransformationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AccessSection } from "@/components/sections/AccessSection";
import { GoalsSection } from "@/components/sections/GoalsSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ChoiceSection } from "@/components/sections/ChoiceSection";
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
            <AccessSection />
            <GoalsSection />
            <ResultsSection />
            <ChoiceSection />
            <PricingSection />
            <QualificationSection />
            <VisionSection />
            <FinalCTASection />
            <Footer />
        </main>
    );
}
