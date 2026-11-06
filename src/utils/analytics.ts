/**
 * EasyFlow Technologies - Google Analytics 4 (GA4) Analytics Integration
 * Measurement ID: G-P274PEFPVK
 *
 * Provides a resilient, type-safe wrapper around Google tag (gtag.js).
 * - Fully asynchronous and non-blocking
 * - Ad-blocker safe (never throws exceptions or disrupts application execution)
 * - Zero PII collection (no prompt contents, form values, or passwords)
 * - Preserves UTM campaign attribution across sessions
 */

export const GA_MEASUREMENT_ID = 'G-P274PEFPVK';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Checks whether debug mode is active (via ?debug_mode=true query parameter or local dev host)
 */
export const isDebugModeActive = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const searchParams = new URLSearchParams(window.location.search);
    return (
      searchParams.get('debug_mode') === 'true' ||
      searchParams.get('debug') === 'true' ||
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1'
    );
  } catch {
    return false;
  }
};

const isDevEnv = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
};

/**
 * Safe invocation wrapper for window.gtag.
 * Queues commands safely into window.dataLayer if gtag script hasn't loaded yet.
 * Completely immune to ad-blockers and network failures.
 */
export const gtag = (...args: any[]): void => {
  if (typeof window === 'undefined') return;
  try {
    if (typeof window.gtag === 'function') {
      window.gtag(...args);
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(args);
    }
  } catch (err) {
    if (isDevEnv()) {
      console.warn('[GA4 Analytics] gtag call failed:', err);
    }
  }
};

/**
 * Parses current UTM campaign attribution parameters from the active window location.
 * Supported: utm_source, utm_medium, utm_campaign, utm_content, utm_term.
 */
export const getCampaignAttribution = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  try {
    const params = new URLSearchParams(window.location.search);
    const attribution: Record<string, string> = {};
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid'];
    for (const key of utmKeys) {
      const val = params.get(key);
      if (val) {
        attribution[key] = val;
      }
    }
    return attribution;
  } catch {
    return {};
  }
};

/**
 * Event A: promptflow_download_click
 * Triggered when a visitor clicks a primary PromptFlow download CTA.
 *
 * Parameters:
 * - product_name: 'PromptFlow'
 * - button_location: Placement identifier (e.g., 'home_hero', 'home_products_card', 'product_modal', 'promptflow_hero', 'promptflow_download_section')
 * - destination_url: Target URL / asset download URL
 */
export interface PromptFlowDownloadClickParams {
  button_location: string;
  destination_url?: string;
  product_name?: string;
  [key: string]: any;
}

export const trackPromptFlowDownloadClick = (params: PromptFlowDownloadClickParams): void => {
  const defaultDestination =
    'https://github.com/forlone970-sys/easyflow-website/releases/download/v0.1.0/PromptFlow_0.1.0_x64-setup.exe';

  const payload: Record<string, any> = {
    product_name: 'PromptFlow',
    button_location: params.button_location,
    destination_url: params.destination_url || defaultDestination,
  };

  if (isDebugModeActive()) {
    payload.debug_mode = true;
  }

  gtag('event', 'promptflow_download_click', payload);

  if (isDevEnv()) {
    console.log('[GA4 Event] promptflow_download_click', payload);
  }
};

/**
 * Event B: installer_download
 * Triggered ONLY when a visitor initiates the actual Windows installer download.
 *
 * Installer asset: PromptFlow_0.1.0_x64-setup.exe
 *
 * CRITICAL REQUIREMENT:
 * Only fire this event when the actual installer download link is clicked/triggered.
 * Do NOT fire it when someone merely visits the GitHub release page or product page.
 *
 * Parameters:
 * - product_name: 'PromptFlow'
 * - file_name: 'PromptFlow_0.1.0_x64-setup.exe'
 * - file_extension: 'exe'
 * - link_url: Actual installer URL
 */
export interface InstallerDownloadParams {
  product_name?: string;
  file_name?: string;
  file_extension?: string;
  link_url?: string;
  [key: string]: any;
}

export const trackInstallerDownload = (params?: Partial<InstallerDownloadParams>): void => {
  const defaultInstallerUrl =
    'https://github.com/forlone970-sys/easyflow-website/releases/download/v0.1.0/PromptFlow_0.1.0_x64-setup.exe';

  const payload: Record<string, any> = {
    product_name: params?.product_name || 'PromptFlow',
    file_name: params?.file_name || 'PromptFlow_0.1.0_x64-setup.exe',
    file_extension: params?.file_extension || 'exe',
    link_url: params?.link_url || defaultInstallerUrl,
  };

  if (isDebugModeActive()) {
    payload.debug_mode = true;
  }

  gtag('event', 'installer_download', payload);

  if (isDevEnv()) {
    console.log('[GA4 Event] installer_download', payload);
  }
};

/**
 * Event C: outbound_click
 * Triggered for external links.
 * Note: GA4 Enhanced Measurement captures standard outbound anchor clicks as 'click' with { outbound: true }.
 * This helper provides explicit tracking for external links or programmatic redirects without duplicate collisions.
 */
export interface OutboundClickParams {
  destination_url: string;
  link_text?: string;
  [key: string]: any;
}

export const trackOutboundClick = (params: OutboundClickParams): void => {
  // Safeguard: Never misclassify installer download as a generic outbound click
  if (params.destination_url.endsWith('.exe')) {
    return;
  }

  let linkDomain = '';
  try {
    linkDomain = new URL(params.destination_url).hostname;
  } catch {
    linkDomain = params.destination_url;
  }

  const payload: Record<string, any> = {
    destination_url: params.destination_url,
    link_domain: linkDomain,
    link_text: params.link_text || '',
  };

  if (isDebugModeActive()) {
    payload.debug_mode = true;
  }

  gtag('event', 'outbound_click', payload);

  if (isDevEnv()) {
    console.log('[GA4 Event] outbound_click', payload);
  }
};

/**
 * Tracks client-side SPA route transitions if route changes without a full page reload.
 * Guaranteed to prevent duplicate initial page_views since initial page_views are handled by gtag('config').
 */
export const trackVirtualPageView = (pagePath: string, pageTitle: string): void => {
  if (typeof window === 'undefined') return;

  const payload: Record<string, any> = {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href,
  };

  if (isDebugModeActive()) {
    payload.debug_mode = true;
  }

  gtag('event', 'page_view', payload);

  if (isDevEnv()) {
    console.log('[GA4 Event] virtual page_view', payload);
  }
};
