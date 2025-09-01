// frontend/src/data/mockData.ts

// You will need to add these images to your src/assets/images/ folder
import lawImg1 from '../assets/images/law-books.jpg';
import lawImg2 from '../assets/images/privacy.jpg';
import lawImg3 from '../assets/images/cybercrime.jpg';
import lawImg4 from '../assets/images/chain-of-custody.jpg';

export const lawsData = [
    {
        title: 'Digital Evidence Standards',
        description: 'Guidelines for identifying, preserving, and presenting digital evidence.',
        image: lawImg1,
        category: 'Federal',
    },
    {
        title: 'Privacy & Data Protection',
        description: 'Legal frameworks protecting data handling and privacy rights.',
        image: lawImg2,
        category: 'International',
    },
    {
        title: 'Cybercrime Legislation',
        description: 'Laws prohibiting computer-based crimes and digital fraud.',
        image: lawImg3,
        category: 'Federal',
    },
    {
        title: 'Chain of Custody',
        description: 'Legal requirements for evidence handling and documentation.',
        image: lawImg4,
        category: 'Procedural',
    },
    {
        title: 'Expert Testimony',
        description: 'Standards for forensic expert witness testimony.',
        image: lawImg1, // Reusing image for example
        category: 'Procedural',
    },
    {
        title: 'International Cooperation',
        description: 'Cross-border digital evidence sharing agreements.',
        image: lawImg2, // Reusing image for example
        category: 'International',
    },
];