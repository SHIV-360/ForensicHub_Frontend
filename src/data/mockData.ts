import placeholderImage from '../assets/images/hero-bg.png';

// Added missing lawsData
export const lawsData = [
    {
        title: 'Digital Evidence Standards',
        description: 'Guidelines for identifying, preserving, and presenting digital evidence.',
        image: placeholderImage,
        category: 'Federal',
    },
    {
        title: 'Privacy & Data Protection',
        description: 'Legal frameworks protecting data handling and privacy rights.',
        image: placeholderImage,
        category: 'International',
    },
    {
        title: 'TOP 10 OWAPS',
        description: 'Understand what is OWAPS and how it was made for the cyber personnels, what are its modern value ',
        image: placeholderImage,
        category: 'International',
    },
    {
        title: 'Cybercrime Legislation',
        description: 'Laws prohibiting computer-based crimes and digital fraud.',
        image: placeholderImage,
        category: 'Federal',
    },
    {
        title: 'Chain of Custody',
        description: 'Legal requirements for evidence handling and documentation.',
        image: placeholderImage,
        category: 'Procedural',
    },
];

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
        title: 'AWS IAM Investigation',
        description: 'Investigation of a cloud based attack on a Fortune 500 company.',
        image: placeholderImage,
        tags: ['Network Security', 'Advanced'],
        duration: '3 weeks',
        tools: 6,
        videos: 12,
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
        videos: 0,
    },
];

export const resourcesData = [
    {
        title: 'Digital Forensics Fundamentals',
        description: 'Comprehensive introduction to digital forensics principles and practices.',
        image: placeholderImage,
        category: 'Guides',
        size: '2.5 MB',
        downloads: 1200,
    },
    {
        title: 'Network Analysis Toolkit',
        description: 'Professional-grade network packet analysis and investigation tools.',
        image: placeholderImage,
        category: 'Tools',
        size: '15 MB',
        downloads: 850,
    },
    {
        title: 'Mobile Forensics Video Course',
        description: 'In-depth video tutorials on mobile device data extraction and analysis.',
        image: placeholderImage,
        category: 'Videos',
        size: '1.2 GB',
        downloads: 2300,
    },
    {
        title: 'Legal Documentation Templates',
        description: 'Court-ready templates for evidence reports and instance.',
        image: placeholderImage,
        category: 'Templates',
        size: '500 KB',
        downloads: 3200,
    },
    {
        title: 'Malware Analysis Handbook',
        description: 'Advanced techniques for reverse-engineering and malware analysis.',
        image: placeholderImage,
        category: 'Guides',
        size: '4.8 MB',
        downloads: 950,
    },
    {
        title: 'Cloud Forensics Checklist',
        description: 'Step-by-step checklist for investigating cloud-based incidents.',
        image: placeholderImage,
        category: 'Templates',
        size: '150 KB',
        downloads: 1800,
    },
];

export const certificationResources = [
    { title: 'GCFE Study Guide', link: '#' },
    { title: 'CCE Practice Exams', link: '#' },
    { title: 'CISSP Security Assessment', link: '#' },
];

export const industryStandards = [
    { title: 'ISO 27037 Guidelines', link: '#' },
    { title: 'NIST Cybersecurity Framework', link: '#' },
    { title: 'RFC 3227 Evidence Guidelines', link: '#' },
];

export const resourceCategories = [
    { title: 'Beginner Guides', icon: 'Book', description: 'Step-by-step tutorials for newcomers to digital forensics.' },
    { title: 'Professional Tools', icon: 'Tools', description: 'Software and utilities for forensic analysis and investigation.' },
    { title: 'Video Tutorials', icon: 'Film', description: 'Visual deep-dives into complex topics and tool usage.' },
    { title: 'Documentation', icon: 'FileEarmarkText', description: 'Templates, checklists, and standards for reporting.' },
];

// --- NEW DATA FOR PLAYGROUND PAGE ---
export const challengesData = [
    {
        title: 'Network Traffic Analysis',
        category: 'Network',
        image: placeholderImage,
        points: 100,
        progress: 75,
        difficulty: 'Intermediate',
    },
    {
        title: 'Mobile Device Forensics',
        category: 'Mobile',
        image: placeholderImage,
        points: 250,
        progress: 45,
        difficulty: 'Intermediate',
    },
    {
        title: 'Email Header Analysis',
        category: 'Email',
        image: placeholderImage,
        points: 400,
        progress: 10,
        difficulty: 'Advanced',
    },
    {
        title: 'Malware Detection',
        category: 'Malware',
        image: placeholderImage,
        points: 600,
        progress: 0,
        difficulty: 'Expert',
    }
];

export const leaderboardData = [
    { name: 'Alex Chen', points: 2450 },
    { name: 'Sarah Kim', points: 2375 },
    { name: 'Mike Johnson', points: 2100 },
    { name: 'Emma Davis', points: 2050 },
];

export const recentActivityData = [
    { description: 'Completed "Network Analysis" challenge', time: '1 hour ago' },
    { description: 'Started "Mobile Forensics" challenge', time: '3 hours ago' },
    { description: 'Achieved "Streak Master" badge', time: '1 day ago' },
];

// --- NEW UNIFIED PROFILE DATA OBJECT ---
export const userProfileData = {
    name: 'Alex Johnson',
    title: 'Digital Forensics Analyst',
    stats: {
        level: 12,
        xp: 1250,
        completed: 23,
        streak: 7,
    },
    learningProgress: {
        overall: 62,
        skills: [
            { name: 'Network Forensics', progress: 85, variant: 'primary' },
            { name: 'Mobile Analysis', progress: 72, variant: 'info' },
            { name: 'Legal Compliance', progress: 90, variant: 'success' },
            { name: 'Malware Analysis', progress: 45, variant: 'warning' },
        ]
    },
    skillsAssessment: [
        { skill: 'Network Forensics', type: 'Technical', progress: 85 },
        { skill: 'Mobile Analysis', type: 'Technical', progress: 72 },
        { skill: 'Legal Compliance', type: 'Legal', progress: 90 },
        { skill: 'Evidence Documentation', type: 'Legal', progress: 95 },
        { skill: 'Malware Analysis', type: 'Technical', progress: 45 },
        { skill: 'Cloud Forensics', type: 'Technical', progress: 60 },
    ],
    recentActivity: [
        { description: 'Network Traffic Analysis', time: '2 hours ago' },
        { description: 'Downloaded Mobile Forensics Guide', time: '1 day ago' },
        { description: 'Earned Network Expert badge', time: '3 days ago' },
        { description: 'Viewed Corporate Breach Case', time: '5 days ago' },
    ],
    achievements: [
        { title: 'First Case Solved', icon: 'CheckCircleFill' },
        { title: 'Network Expert', icon: 'ShieldCheck' },
        { title: 'Mobile Master', icon: 'PhoneFill' },
        { title: 'Streak Champion', icon: 'TrophyFill' },
    ],
    quickStats: {
        memberSince: 'Jan 2024',
        timeSpent: '124 hours',
        resourcesDownloaded: 47,
        communityRank: '#142',
    }
};

import { EnvelopeFill, TelephoneFill, GeoAltFill } from 'react-bootstrap-icons';
// --- DATA FOR CONTACT PAGE ---
export const contactInfo = [
    { icon: EnvelopeFill, value: 'contact@forensichub.com', href: 'mailto:contact@forensichub.com' },
    { icon: TelephoneFill, value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: GeoAltFill, value: '123 Cyber Security Blvd, San Francisco, CA 94103', href: '#' },
];

export const officeHours = [
    { days: 'Monday - Friday', hours: '9:00 AM - 5:00 PM PST' },
    { days: 'Saturday - Sunday', hours: '10:00 AM - 4:00 PM PST' },
];

export const teamMembers = [
    { name: 'Dr. Sarah Chen', title: 'Lead Forensic Analyst' },
    { name: 'Mike Rodriguez', title: 'Network Specialist' },
    { name: 'Alex Kim', title: 'Mobile Forensics Expert' },
    { name: 'Emma Davis', title: 'Legal Counsel' },
    { name: 'Dr. James Wilson', title: 'Malware Researcher' },
    { name: 'Lisa Thompson', title: 'Community Manager' },
];