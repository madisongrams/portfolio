import ConfettiContainer from "../components/ConfettiContainer";
import IntroSection from "../components/about/IntroSection";
import TechnologySection from "../components/about/TechnologySection";
import RecommendationSection from "../components/about/RecommendationSection";
import EndSection from "../components/about/EndSection";


export default function About() {
  return (
    <ConfettiContainer title="About Me">
      
        <IntroSection />
        <TechnologySection />
        <RecommendationSection />
        <EndSection />
    </ConfettiContainer>
  );
}
