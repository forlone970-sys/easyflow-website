import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'medimate',
    name: 'MediMate',
    category: 'Healthcare / Medication Management',
    tagline: 'Patient-focused medication schedule & routine coordination',
    shortDescription:
      'MediMate is a medication reminder application designed to help patients manage their medication routines and stay organized.',
    fullDescription:
      'MediMate is crafted to simplify medication adherence for patients and their families. By offering structured reminders, comprehensive course tracking, and seamless caregiver communication, it fosters confidence and consistency in daily health management without medical complexity.',
    logo: './assets/medimate-logo.png',
    logoTheme: 'light',
    status: 'Coming Soon',
    accentColor: '#046E86',
    features: [
      {
        title: 'Smart Medication Reminders',
        description: 'Helps users stay on schedule with their medications through intuitive alerts and timely routine reminders.'
      },
      {
        title: 'Medication Passport',
        description: 'A personalized record of medication courses, completion status, and dose history in one clear overview.'
      },
      {
        title: 'Patient-Caregiver Linkage',
        description: 'Enables patients to connect directly with caregivers for transparent medication-related coordination.'
      },
      {
        title: 'Smart Insight System',
        description: 'Provides useful routine insights to help patients understand and maintain their adherence patterns.'
      }
    ],
    highlights: [
      'Personalized dose schedule logging',
      'Caregiver notification synchronization',
      'Course completion milestones',
      'Clean, accessible interface designed for all ages'
    ],
    disclaimer:
      'MediMate is a schedule management and organizational tool. It does not diagnose medical conditions, prescribe medications, replace healthcare professionals, or guarantee clinical outcomes.'
  },
  {
    id: 'roomvault',
    name: 'RoomVault',
    category: 'Digital File Management',
    tagline: 'Dedicated spaces for organized file sharing and collaboration',
    shortDescription:
      'RoomVault is a digital file-sharing concept designed to make organizing and sharing files within dedicated spaces simple and convenient.',
    fullDescription:
      'RoomVault introduces a room-centric paradigm for digital assets. Instead of cluttered folders and messy links, users can create purpose-built digital file rooms with tailored access controls, instant QR entry, and clean asset categorization.',
    logo: './assets/roomvault-logo.jpg',
    logoTheme: 'dark',
    status: 'Prototype Concept',
    accentColor: '#0593A9',
    features: [
      {
        title: 'Dedicated Digital File Rooms',
        description: 'Create isolated, contextual workspaces tailored for specific projects, teams, or events.'
      },
      {
        title: 'Convenient File Sharing & Organization',
        description: 'Upload, categorize, and distribute digital documents and media with minimal friction.'
      },
      {
        title: 'QR Code & Passcode-Based Access',
        description: 'Grant instant, frictionless room entry using quick-scan QR codes and PIN passcodes.'
      },
      {
        title: 'Configured Upload Capacity',
        description: 'Support for file uploads, with a planned or configured limit of up to 2 GB where applicable.'
      }
    ],
    highlights: [
      'Room-centric file isolation',
      'Scan-to-access QR integration',
      'Configured 2 GB file transfer tier',
      'Ephemeral or persistent room configurations'
    ],
    disclaimer:
      'RoomVault is currently a product concept. Capabilities reflect planned software architecture and prototype specifications.'
  },
  {
    id: 'zaiqa-ar',
    name: 'Zaiqa AR',
    category: 'Augmented Reality / Food & Dining',
    tagline: 'Transforming restaurant menus into interactive visual experiences',
    shortDescription:
      'Zaiqa AR explores a more interactive dining experience by bringing restaurant menus into augmented reality.',
    fullDescription:
      'Zaiqa AR brings food discovery into the visual era. Specially conceptualized with inspiration from Pakistan’s vibrant restaurant and dining scene, Zaiqa AR aims to let diners preview culinary creations in immersive AR before placing their orders.',
    logo: './assets/zaiqa-ar-logo.png',
    logoTheme: 'light',
    status: 'In Development',
    accentColor: '#00C6DB',
    features: [
      {
        title: 'Interactive Restaurant Menus',
        description: 'Experience dining menus with rich visual depth rather than traditional static text listings.'
      },
      {
        title: 'AR-Inspired Food Exploration',
        description: 'Explore realistic 3D and augmented presentations of signature dishes directly on your table.'
      },
      {
        title: 'Modern Menu Discovery',
        description: 'A contemporary approach for diners to discover portion sizes, presentation, and ingredients.'
      },
      {
        title: 'Engaging Dining Atmosphere',
        description: 'Elevates customer engagement and excitement in local dining environments and food venues.'
      }
    ],
    highlights: [
      'Rooted in regional culinary culture',
      'Interactive 3D dish previews',
      'Frictionless browser/mobile AR concepts',
      'Engaging dining guest experience'
    ],
    disclaimer:
      'Zaiqa AR is an active innovation project. Specific restaurant integrations and public availability are currently in development.'
  },
  {
    id: 'petroplan',
    name: 'PetroPlan',
    category: 'Navigation / Fuel Planning',
    tagline: 'Informed journey navigation and journey fuel estimation',
    shortDescription:
      'PetroPlan is a navigation and fuel-planning concept designed to help drivers make more informed decisions while planning their journeys.',
    fullDescription:
      'PetroPlan addresses common road travel friction by integrating thoughtful fuel management considerations into trip routing. Drivers can anticipate refueling stops, project travel consumption, and plan longer routes with peace of mind.',
    logo: './assets/petroplan-logo.png',
    logoTheme: 'dark',
    status: 'Prototype Concept',
    accentColor: '#046E86',
    features: [
      {
        title: 'Map-Based Route Planning',
        description: 'Visual map navigation tailored for clarity, waypoints, and seamless destination setting.'
      },
      {
        title: 'Fuel-Related Journey Planning',
        description: 'Calculates journey considerations to help drivers plan necessary refueling stops along their route.'
      },
      {
        title: 'Journey-Oriented Navigation',
        description: 'Structured route overviews prioritizing convenience, predictable driving times, and smooth transit.'
      },
      {
        title: 'Convenient Everyday Travel',
        description: 'A focus on reducing road travel anxiety and making long-distance commutes more predictable.'
      }
    ],
    highlights: [
      'Waypoint & route stop coordination',
      'Distance and journey consumption estimation',
      'Clean driver-focused interface',
      'Trip timeline and waypoint preview'
    ],
    disclaimer:
      'PetroPlan is a navigation and fuel-planning concept. It does not provide guaranteed fuel economy savings or live station inventory guarantees.'
  }
];
