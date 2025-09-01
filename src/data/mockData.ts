// frontend/src/data/mockData.ts

import placeholderImage from '../assets/images/hero-bg.png';

// ... (your existing lawsData array)

export const caseStudiesData = [
    {
        title: 'Corporate Data Breach Investigation',
        description: 'Investigation of a sophisticated APT attack on a Fortune 500 company.',
        image: placeholderImage,
        tags: ['Network Security', 'Advanced'],
        duration: '2 weeks',
        tools: 4,
        videos: 8,
    },
    {
        title: 'Mobile Device Financial Fraud',
        description: 'Recovery of deleted financial records from an Android device.',
        image: placeholderImage,
        tags: ['Mobile Forensics', 'Intermediate'],
        duration: '2 weeks',
        tools: 3,
        videos: 15,
    },
    {
        title: 'Email Phishing Campaign Analysis',
        description: 'Traced the source of a targeted phishing campaign.',
        image: placeholderImage,
        tags: ['Email Forensics', 'Beginner'],
        duration: '1 week',
        tools: 8,
        videos: 0, // Assuming 0 for this one based on UI
    },
];