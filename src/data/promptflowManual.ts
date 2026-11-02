export interface RubricCriterion {
  title: string;
  points: number;
  description: string;
}

export interface KeyboardShortcut {
  key: string;
  action: string;
  scope: string;
}

export interface ManualSection {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights?: string[];
  subsections?: {
    subtitle: string;
    text: string;
  }[];
}

export const promptflowWorkspaces: ManualSection[] = [
  {
    id: 'editor',
    title: 'Workspace 1: Monaco Prompt Editor',
    tagline: 'Precision text editor with keystroke intelligence (Ctrl+1)',
    description:
      'The primary authoring environment is powered by Monaco Editor (the engine powering Visual Studio Code), customized specifically for prompt engineering with syntax highlighting, parameter detection, and zero-latency local intelligence.',
    subsections: [
      {
        subtitle: 'Token & Character Estimator',
        text: 'Continuously calculates estimated token count (~4 characters per token heuristic) and character count in real time, displayed in the bottom Status Bar and the right-hand Prompt Inspector.'
      },
      {
        subtitle: 'Variable Extraction',
        text: 'Automatically detects dynamic parameters using {{variable}} mustache syntax, displaying them in the inspector with usage locations and required input slots.'
      },
      {
        subtitle: 'Handcrafted Autocomplete Intelligence',
        text: 'Provides inline ghost-text completions for variables, structural Markdown sections (# ROLE, # OBJECTIVE, # CONSTRAINTS), and reasoning templates with zero network latency.'
      },
      {
        subtitle: 'Conservative Spellcheck & Quick Fixes',
        text: 'Flags genuine spelling mistakes while protecting code blocks, variables, CamelCase identifiers, and technical AI terms. Press Alt+Enter to review and accept Quick Fix suggestions.'
      }
    ]
  },
  {
    id: 'testlab',
    title: 'Workspace 2: Deterministic Test Lab',
    tagline: '100-point rubric heuristic evaluation without API costs (Ctrl+2)',
    description:
      'The Test Lab evaluates prompt quality using a deterministic 100-point rubric without requiring an active internet connection or consuming external API tokens. It assesses structural completeness, negative constraints, and output guarantees.',
    highlights: [
      'Task Clarity & Intent (20 pts / 20%): Evaluates imperative action verbs, directive clarity, and concrete scope.',
      'Role & Context (15 pts / 15%): Evaluates explicit persona framing, domain expertise, and situational framing.',
      'Constraints & Guardrails (20 pts / 20%): Checks for negative boundaries, hallucination defenses, and failure conditions.',
      'Output Schema (15 pts / 15%): Verifies strict formatting instructions (JSON schema, Markdown tables, structured sections).',
      'Inputs & Parameterization (15 pts / 15%): Checks dynamic mustache variables ({{variable}}) and slot parameterization.',
      'Ambiguity & Terminology (15 pts / 15%): Penalizes subjective qualifiers, colloquialisms, and non-deterministic filler words.',
      'Plain-Language Diagnosis: Generates actionable feedback identifying exact weaknesses and steps to reach an "A" grade.',
      'Draft Persistence: Drafts typed in Test Lab are preserved automatically across workspace transitions.'
    ]
  },
  {
    id: 'templates',
    title: 'Workspace 3: Templates & Samples',
    tagline: 'Curated offline repository of production-ready prompt templates (Ctrl+3)',
    description:
      'Explore 20 battle-tested prompts across 5 core disciplines: Video Generation, Paragraph Writing, Report Generation, Image Generation, and Software Building. Every template can be previewed, edited, and instantiated directly into your project.',
    subsections: [
      {
        subtitle: '1. Video Generation',
        text: 'Cinematic scene choreography, camera motion dynamics, lighting moods, and photorealistic diffusion prompts for video models.'
      },
      {
        subtitle: '2. Paragraph Writing',
        text: 'Persuasive executive arguments, academic synthesis, and structured prose with explicit tone calibration.'
      },
      {
        subtitle: '3. Report Generation',
        text: 'Executive summaries, technical architecture specifications, and multi-section analytical business reports.'
      },
      {
        subtitle: '4. Image Generation',
        text: 'Atmospheric portraits, isometric 3D renders, architectural concepts, and camera/lens parameters.'
      },
      {
        subtitle: '5. Software Building',
        text: 'Type-safe REST/GraphQL APIs, reusable design system UI components, scoped feature plans, and bug diagnosis rubrics.'
      }
    ]
  },
  {
    id: 'diagrams',
    title: 'Workspace 4: Diagram Designer',
    tagline: 'Visual node canvas for multi-prompt pipelines and agent workflows (Ctrl+4)',
    description:
      'An interactive node graph powered by React Flow for designing execution pipelines, agent decision trees, and chaining architectures. Workflows save natively as canonical human-readable .diagram JSON files on your disk.',
    subsections: [
      {
        subtitle: 'Node Types',
        text: 'Prompt Nodes, Model Nodes, Context Nodes, Guardrail Nodes, Parser Nodes, and Router/Decision Nodes.'
      },
      {
        subtitle: 'Interactive Wiring',
        text: 'Drag connection handles between outputs and inputs to construct complex multi-stage agent workflows.'
      },
      {
        subtitle: 'Property Inspector',
        text: 'Select any node to customize its label, execution role, parameters, and linked prompt document.'
      }
    ]
  }
];

export const promptflowFileGuides = [
  {
    title: 'Creating and Working with Prompt Files',
    steps: [
      'Creating a new project folder: On the Welcome Screen, click "Create New Project". Specify your Project Name and select a parent directory on your local drive. PromptFlow initializes a project folder containing two dedicated subfolders: prompts and diagrams.',
      'Automatic starter prompt: PromptFlow automatically creates starter.prompt inside the prompts folder, pre-populated with standard # ROLE and # OBJECTIVE framing sections.',
      'Automatic editor tab mounting: The starter.prompt file opens immediately in the Monaco-powered Prompt Editor tab ready for editing.',
      'Authoring prompts: Write prompt instructions with token estimation, variable extraction ({{variable}}), tab autocomplete, and Alt+Enter spellcheck fixes. Click the + button in File Explorer to create additional prompt files.',
      'Saving work: Press Ctrl+S to save immediately, or rely on PromptFlow’s background auto-save mechanism that writes changes to disk after brief typing pauses.',
      'Reopening projects: Click "Open Project Folder" to browse any existing workspace. Expand the prompts folder to open any .prompt or .md file.'
    ]
  },
  {
    title: 'Creating and Working with Diagram Files',
    steps: [
      'Finding your diagrams: Diagram files reside inside the diagrams subfolder alongside prompts. A valid editable starter.diagram is initialized automatically in every new project.',
      'Accessing diagrams in File Explorer: In the Prompt Editor sidebar, expand the diagrams directory to view all workflow files.',
      'Opening the diagram canvas: Click starter.diagram in File Explorer to switch automatically into the Diagram Designer (Ctrl+4).',
      'Editing workflow topologies: Use the top toolbar to add Prompt, Model, Context, Guardrail, Parser, or Router nodes. Drag connections between handles to build pipelines. Pan and zoom freely or click "Fit View".',
      'Saving diagrams: Press Ctrl+S or click "Save Diagram" in the toolbar. Files are persisted to local storage as clean .diagram JSON.',
      'Reopening saved diagrams: Click any .diagram file in File Explorer or navigate with Ctrl+4 while a project is active.'
    ]
  }
];

export const promptflowShortcuts: KeyboardShortcut[] = [
  { key: 'Ctrl+1', action: 'Switch to Prompt Editor', scope: 'Global (with active project)' },
  { key: 'Ctrl+2', action: 'Switch to Test Lab', scope: 'Global (with active project)' },
  { key: 'Ctrl+3', action: 'Switch to Templates & Samples', scope: 'Global' },
  { key: 'Ctrl+4', action: 'Switch to Diagram Designer', scope: 'Global (with active project)' },
  { key: 'Ctrl+,', action: 'Open Application Settings', scope: 'Global' },
  { key: 'Ctrl+S', action: 'Save Active Document or Diagram', scope: 'Editor & Diagram' },
  { key: 'Alt+Left', action: 'Navigate to Previous Workspace', scope: 'Global' },
  { key: 'Alt+Right', action: 'Navigate Forward', scope: 'Global' },
  { key: 'Alt+Enter', action: 'Open Monaco Spelling Quick Fixes', scope: 'Monaco Editor' }
];
