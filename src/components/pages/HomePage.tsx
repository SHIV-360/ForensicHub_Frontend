import React from 'react';

// Corrected import paths
import HeroSection from '../home/HeroSection';
import StatsSection from '../home/StatsSection';
import FeaturesSection from '../home/FeaturesSection';
import WhatsNewSection from '../home/WhatsNewSection';
import CommunitySection from '../home/CommunitySection';

const HomePage: React.FC = () => {
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