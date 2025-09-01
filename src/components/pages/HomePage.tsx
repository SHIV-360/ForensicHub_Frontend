// frontend/src/components/pages/HomePage.tsx

import HeroSection from '../home/HeroSection';
import StatsSection from '../home/StatsSection';
import FeaturesSection from '../home/FeaturesSection';
import WhatsNewSection from '../home/WhatsNewSection';
import CommunitySection from '../home/CommunitySection';
import '../home/HomePage.css'; // Consolidated CSS

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <FeaturesSection />
            <WhatsNewSection />
            <CommunitySection />
        </>
    );
};

export default HomePage;