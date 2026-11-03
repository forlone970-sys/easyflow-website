import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'promptflow',
    name: 'PromptFlow',
    category: 'AI Tools / Desktop Prompt IDE',
    tagline: 'Think Beyond Words. Engineer Beyond Limits.',
    shortDescription:
      'Not just another prompt editor. PromptFlow is where ideas evolve into precision. Create, refine, test, and master your prompts with an intelligent workspace built for the next generation of AI creators. Featuring handcrafted autocomplete intelligence, intelligent spelling correction, and a powerful developer-inspired environment, PromptFlow transforms the way you interact with AI. Your ideas. Your intelligence. Your flow.',
    fullDescription:
      'Not just another prompt editor. PromptFlow is where ideas evolve into precision. Create, refine, test, and master your prompts with an intelligent workspace built for the next generation of AI creators. Featuring handcrafted autocomplete intelligence, intelligent spelling correction, and a powerful developer-inspired environment, PromptFlow transforms the way you interact with AI. Your ideas. Your intelligence. Your flow.',
    logo: './assets/promptflow-logo.png',
    logoTheme: 'dark',
    status: 'Available Now',
    accentColor: '#008B8B',
    order: 1,
    isVisible: true,
    features: [
      {
        title: 'Handcrafted Autocomplete Intelligence',
        description: 'Zero-latency ghost text completions for prompt parameters, variable mustache tags, and reasoning structures.'
      },
      {
        title: 'Intelligent Spelling Correction',
        description: 'Embedded local dictionary engine with Alt+Enter quick fixes that protects code syntax, camelCase terms, and prompt variables.'
      },
      {
        title: 'Deterministic Test Lab Scoring',
        description: '100-point 6-dimension heuristic rubric evaluating task clarity, role framing, negative guardrails, and schema guarantees.'
      },
      {
        title: 'Visual Workflow Diagram Designer',
        description: 'Interactive node graph powered by React Flow for mapping prompt pipelines and agent topologies stored in .diagram files.'
      }
    ],
    highlights: [
      '100% offline & local data sovereignty (zero telemetry)',
      'Monaco-powered prompt editor with token & variable inspector',
      'Local SQLite metadata engine with plain-text file storage',
      'Windows 10 / 11 desktop application packaged with NSIS'
    ],
    disclaimer:
      'PromptFlow is a local desktop authoring environment and heuristic evaluation IDE. It operates independently from external AI vendors and does not execute remote LLM API inference calls.'
  },
  {
    id: 'spendora',
    name: 'Spendora',
    category: 'Personal Finance / Smart Budgeting',
    tagline: 'Spend with intention. Live with freedom.',
    shortDescription:
      'Your money tells a story. Spendora helps you take control of it. From exposing unnecessary spending to revealing where your money disappears, Spendora turns everyday purchases into smarter financial decisions.',
    fullDescription:
      'Your money tells a story. Spendora helps you take control of it. From exposing unnecessary spending to revealing where your money disappears, Spendora turns everyday purchases into smarter financial decisions. Stop wondering where your money went. Start deciding where it goes. Spend with intention. Live with freedom.',
    logo: './assets/spendora-logo.png',
    logoTheme: 'dark',
    status: 'In Development',
    accentColor: '#FF6A00',
    order: 2,
    isVisible: true,
    features: [
      {
        title: 'Smart Shopping Sprees & Budgets',
        description: 'Plan, budget, and organize shopping trips in real-time with instant spending feedback.'
      },
      {
        title: 'Barcode Item Scanner',
        description: 'Quickly scan product barcodes with your device camera to look up details and log purchases.'
      },
      {
        title: 'Immutable Digital Receipts',
        description: 'Automatically generate detailed, permanent digital receipts and expense history for every completed spree.'
      },
      {
        title: 'Local-First Offline Sync',
        description: 'Full offline functionality powered by local SQLite, synchronizing seamlessly to Cloud Firestore when online.'
      }
    ],
    highlights: [
      'Offline SQLite embedded database architecture',
      'Google Sign-In & Firebase email authentication',
      'Cloud Firestore multi-device synchronization',
      'Camera-based real-time barcode scanner'
    ],
    disclaimer:
      'Spendora is a personal budgeting and shopping organization application. It does not provide professional financial advice, execute banking transactions, or manage investment portfolios.'
  }
];

export const visibleProducts: Product[] = products.filter((p) => p.isVisible !== false);
