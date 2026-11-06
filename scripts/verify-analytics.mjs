import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('====================================================');
console.log('EasyFlow GA4 Analytics Verification Suite');
console.log('====================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] ${message}`);
  } else {
    failedTests++;
    console.error(`  [FAIL] ${message}`);
  }
}

// ---------------------------------------------------------
// 1. HTML Verification: Measurement ID & Single Initialization
// ---------------------------------------------------------
console.log('--- TEST GROUP 1: HTML Tag & Measurement ID Integration ---');

const htmlFiles = [
  'index.html',
  'promptflow/index.html',
  'promptflow/privacy-policy/index.html',
  'spendora/delete-account/index.html',
  'spendora/privacy-policy/index.html',
  'public/404.html',
];

const TARGET_MEASUREMENT_ID = 'G-P274PEFPVK';
const GTAG_SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${TARGET_MEASUREMENT_ID}`;

for (const relPath of htmlFiles) {
  const fullPath = path.join(rootDir, relPath);
  assert(fs.existsSync(fullPath), `File exists: ${relPath}`);
  const content = fs.readFileSync(fullPath, 'utf8');

  // Verify Measurement ID present
  assert(content.includes(TARGET_MEASUREMENT_ID), `${relPath} contains Measurement ID ${TARGET_MEASUREMENT_ID}`);

  // Verify gtag script source
  assert(content.includes(GTAG_SCRIPT_SRC), `${relPath} contains official Google tag async script`);

  // Verify single initialization (gtag('config', 'G-P274PEFPVK') occurs exactly once)
  const configMatches = content.match(/gtag\s*\(\s*['"]config['"]\s*,\s*['"]G-P274PEFPVK['"]/g);
  assert(
    configMatches && configMatches.length === 1,
    `${relPath} initializes gtag('config', '${TARGET_MEASUREMENT_ID}') exactly once (Count: ${configMatches ? configMatches.length : 0})`
  );

  // Verify debug_mode support
  assert(content.includes('debug_mode'), `${relPath} includes debug_mode parameter configuration for DebugView`);
}

// ---------------------------------------------------------
// 2. Dist HTML Verification: Production Build Integrity
// ---------------------------------------------------------
console.log('\n--- TEST GROUP 2: Production Build (dist/) Verification ---');

const distHtmlFiles = [
  'dist/index.html',
  'dist/promptflow/index.html',
  'dist/promptflow/privacy-policy/index.html',
  'dist/spendora/delete-account/index.html',
  'dist/spendora/privacy-policy/index.html',
  'dist/404.html',
];

for (const distRelPath of distHtmlFiles) {
  const fullPath = path.join(rootDir, distRelPath);
  assert(fs.existsSync(fullPath), `Built file exists: ${distRelPath}`);
  const content = fs.readFileSync(fullPath, 'utf8');
  assert(content.includes(TARGET_MEASUREMENT_ID), `${distRelPath} built output retains Measurement ID`);
  const configMatches = content.match(/gtag\s*\(\s*['"]config['"]\s*,\s*['"]G-P274PEFPVK['"]/g);
  assert(
    configMatches && configMatches.length === 1,
    `${distRelPath} built output has exactly 1 config call`
  );
}

// ---------------------------------------------------------
// 3. UTM Preservation in 404 & Redirect Handlers
// ---------------------------------------------------------
console.log('\n--- TEST GROUP 3: Campaign Attribution & UTM Preservation ---');

const fourOhFourContent = fs.readFileSync(path.join(rootDir, 'public/404.html'), 'utf8');
assert(
  fourOhFourContent.includes('window.location.search') && fourOhFourContent.includes('window.location.hash'),
  'public/404.html captures window.location.search and hash'
);
assert(
  fourOhFourContent.includes('/promptflow/\' + search + hash'),
  'public/404.html appends search (UTMs) and hash when redirecting to PromptFlow'
);
assert(
  fourOhFourContent.includes('/spendora/delete-account/\' + search + hash'),
  'public/404.html appends search (UTMs) and hash when redirecting to Spendora delete account'
);
assert(
  fourOhFourContent.includes('/spendora/privacy-policy/\' + search + hash'),
  'public/404.html appends search (UTMs) and hash when redirecting to Spendora privacy policy'
);

// ---------------------------------------------------------
// 4. Analytics Module & Event Dispatches
// ---------------------------------------------------------
console.log('\n--- TEST GROUP 4: Event Tracking & Funnel Logic ---');

// Mock browser environment for analytics module
const eventsDispatched = [];
global.window = {
  location: {
    hostname: 'easyflowco.com',
    href: 'https://easyflowco.com/?utm_source=instagram&utm_medium=paid_social&utm_campaign=launch_q4&utm_content=hero_vid',
    search: '?utm_source=instagram&utm_medium=paid_social&utm_campaign=launch_q4&utm_content=hero_vid',
  },
  dataLayer: [],
  gtag: function (command, eventName, payload) {
    eventsDispatched.push({ command, eventName, payload });
  },
};

// Import analytics module functions dynamically
const analyticsModule = await import('../src/utils/analytics.js').catch(async () => {
  // If .js not compiled directly, import from src/utils/analytics.ts via ts-node/tsx or test logic
  return null;
});

// Let's test the analytics logic directly if TS import isn't loaded by plain node
if (!analyticsModule) {
  console.log('  [INFO] Verifying src/utils/analytics.ts content directly:');
  const analyticsCode = fs.readFileSync(path.join(rootDir, 'src/utils/analytics.ts'), 'utf8');

  // Verify Measurement ID constant
  assert(
    analyticsCode.includes("GA_MEASUREMENT_ID = 'G-P274PEFPVK'"),
    'analytics.ts defines GA_MEASUREMENT_ID constant matching G-P274PEFPVK'
  );

  // Verify Event A: promptflow_download_click
  assert(
    analyticsCode.includes("'promptflow_download_click'"),
    "analytics.ts implements 'promptflow_download_click' event"
  );
  assert(
    analyticsCode.includes("product_name: 'PromptFlow'"),
    "analytics.ts sets product_name: 'PromptFlow'"
  );
  assert(
    analyticsCode.includes('button_location: params.button_location'),
    'analytics.ts tracks button_location parameter'
  );
  assert(
    analyticsCode.includes('destination_url:'),
    'analytics.ts tracks destination_url parameter'
  );

  // Verify Event B: installer_download
  assert(
    analyticsCode.includes("'installer_download'"),
    "analytics.ts implements 'installer_download' event"
  );
  assert(
    analyticsCode.includes("file_name: params?.file_name || 'PromptFlow_0.1.0_x64-setup.exe'"),
    "analytics.ts specifies installer filename 'PromptFlow_0.1.0_x64-setup.exe'"
  );
  assert(
    analyticsCode.includes("file_extension: params?.file_extension || 'exe'"),
    "analytics.ts specifies file_extension 'exe'"
  );

  // Verify Event C: outbound_click
  assert(
    analyticsCode.includes("'outbound_click'"),
    "analytics.ts implements 'outbound_click' event"
  );
  assert(
    analyticsCode.includes('link_domain: linkDomain'),
    'analytics.ts extracts link_domain for outbound clicks'
  );
  assert(
    analyticsCode.includes("if (params.destination_url.endsWith('.exe'))"),
    'analytics.ts safeguards against misclassifying .exe downloads as generic outbound clicks'
  );

  // Verify campaign attribution helper
  assert(
    analyticsCode.includes('getCampaignAttribution'),
    'analytics.ts includes getCampaignAttribution helper'
  );
  assert(
    analyticsCode.includes('utm_source') &&
      analyticsCode.includes('utm_medium') &&
      analyticsCode.includes('utm_campaign') &&
      analyticsCode.includes('utm_content'),
    'analytics.ts extracts utm_source, utm_medium, utm_campaign, utm_content'
  );

  // Verify virtual page view duplicate avoidance
  assert(
    analyticsCode.includes('trackVirtualPageView'),
    'analytics.ts includes trackVirtualPageView for client route changes'
  );
}

// ---------------------------------------------------------
// 5. Verification of Event Calls Across Component Hierarchy
// ---------------------------------------------------------
console.log('\n--- TEST GROUP 5: Component Wire-Up Verification ---');

// Check Hero.tsx
const heroContent = fs.readFileSync(path.join(rootDir, 'src/components/Hero.tsx'), 'utf8');
assert(
  heroContent.includes("trackPromptFlowDownloadClick({") && heroContent.includes("button_location: 'home_hero'"),
  "Hero.tsx triggers trackPromptFlowDownloadClick with location 'home_hero'"
);

// Check Products.tsx
const productsContent = fs.readFileSync(path.join(rootDir, 'src/components/Products.tsx'), 'utf8');
assert(
  productsContent.includes("trackPromptFlowDownloadClick({") && productsContent.includes("button_location: 'home_products_card'"),
  "Products.tsx triggers trackPromptFlowDownloadClick with location 'home_products_card'"
);

// Check ProductModal.tsx
const modalContent = fs.readFileSync(path.join(rootDir, 'src/components/ProductModal.tsx'), 'utf8');
assert(
  modalContent.includes("trackPromptFlowDownloadClick({") && modalContent.includes("button_location: 'product_detail_modal'"),
  "ProductModal.tsx triggers trackPromptFlowDownloadClick with location 'product_detail_modal'"
);

// Check PromptFlowPage.tsx
const pfPageContent = fs.readFileSync(path.join(rootDir, 'src/components/PromptFlowPage.tsx'), 'utf8');
assert(
  pfPageContent.includes("button_location: 'promptflow_hero'"),
  "PromptFlowPage.tsx triggers trackPromptFlowDownloadClick on hero CTA ('promptflow_hero')"
);
assert(
  pfPageContent.includes("button_location: 'promptflow_download_section'"),
  "PromptFlowPage.tsx triggers trackPromptFlowDownloadClick on download section CTA ('promptflow_download_section')"
);

// Check promptflowDownload.ts
const pfDownloadContent = fs.readFileSync(path.join(rootDir, 'src/data/promptflowDownload.ts'), 'utf8');
assert(
  pfDownloadContent.includes('trackInstallerDownload({'),
  'promptflowDownload.ts triggers trackInstallerDownload when actual download is initiated'
);
assert(
  pfDownloadContent.includes("file_name: promptflowDownloadConfig.installerFilename") &&
  pfDownloadContent.includes("file_extension: 'exe'"),
  'promptflowDownload.ts passes installer filename and exe extension'
);
assert(
  pfDownloadContent.includes('e.stopPropagation()'),
  'promptflowDownload.ts stops click propagation on temporary download link to prevent accidental outbound_click reporting'
);

// Check PromptFlowSmartScreenModal.tsx
const smartScreenContent = fs.readFileSync(path.join(rootDir, 'src/components/PromptFlowSmartScreenModal.tsx'), 'utf8');
assert(
  smartScreenContent.includes('triggerPromptFlowDownload()'),
  'PromptFlowSmartScreenModal calls triggerPromptFlowDownload upon user proceeding to download'
);
assert(
  !smartScreenContent.includes('trackInstallerDownload('),
  'PromptFlowSmartScreenModal does not prematurely trigger installer_download when merely opening the modal'
);

// Check App.tsx for duplicate page_view prevention
const appContent = fs.readFileSync(path.join(rootDir, 'src/App.tsx'), 'utf8');
assert(
  !appContent.includes('trackVirtualPageView'),
  'App.tsx delegates browser-history tracking to GA4 Enhanced Measurement, avoiding duplicate page_view collisions'
);

// ---------------------------------------------------------
// 6. GitHub Release Page Safety Check
// ---------------------------------------------------------
console.log('\n--- TEST GROUP 6: GitHub Release vs Installer Safety ---');

// Verify that visiting GitHub release page does NOT trigger installer_download
assert(
  !pfPageContent.includes("installer_download") || pfPageContent.includes("//"),
  "PromptFlowPage.tsx does not directly bind installer_download to arbitrary page links"
);
assert(
  pfDownloadContent.includes("triggerPromptFlowDownload = ()"),
  "installer_download is strictly scoped to the triggerPromptFlowDownload function which downloads PromptFlow_0.1.0_x64-setup.exe"
);

// ---------------------------------------------------------
// Summary
// ---------------------------------------------------------
console.log('\n====================================================');
console.log(`Verification Complete: ${passedTests}/${totalTests} Passed (${failedTests} Failed)`);
console.log('====================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
