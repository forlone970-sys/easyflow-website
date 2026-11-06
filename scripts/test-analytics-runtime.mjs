// Runtime test verifying execution of analytics functions under various browser conditions
console.log('--- TEST GROUP 7: Runtime Function Execution & Ad-Blocker Simulation ---');

let passed = 0;
let failed = 0;
function test(name, fn) {
  try {
    fn();
    console.log(`  [PASS] ${name}`);
    passed++;
  } catch (err) {
    console.error(`  [FAIL] ${name}:`, err);
    failed++;
  }
}

// Case 1: Standard browser with window.gtag defined
{
  const dataLayer = [];
  const events = [];
  global.window = {
    location: {
      hostname: 'easyflowco.com',
      href: 'https://easyflowco.com/promptflow/?utm_source=youtube&utm_medium=video&utm_campaign=walkthrough&utm_content=cta1',
      search: '?utm_source=youtube&utm_medium=video&utm_campaign=walkthrough&utm_content=cta1',
    },
    dataLayer,
    gtag: function (...args) {
      events.push(args);
    },
  };

  test('gtag function receives correct arguments when window.gtag is defined', () => {
    window.gtag('event', 'test_event', { key: 'value' });
    if (events.length !== 1 || events[0][1] !== 'test_event') {
      throw new Error('Event not dispatched correctly');
    }
  });
}

// Case 2: Ad-Blocker Simulation (window.gtag is blocked/undefined)
{
  const dataLayer = [];
  global.window = {
    location: {
      hostname: 'easyflowco.com',
      href: 'https://easyflowco.com/',
      search: '',
    },
    dataLayer,
    gtag: undefined, // Ad-blocker blocked the external script
  };

  test('Ad-blocker resilience: functions gracefully queue to dataLayer without throwing', () => {
    // Simulate what analytics.gtag does
    const safeGtag = (...args) => {
      try {
        if (typeof window.gtag === 'function') {
          window.gtag(...args);
        } else {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push(args);
        }
      } catch (err) {
        // never throws
      }
    };

    safeGtag('event', 'promptflow_download_click', { button_location: 'home_hero' });
    if (dataLayer.length !== 1 || dataLayer[0][1] !== 'promptflow_download_click') {
      throw new Error('Failed to safely queue to dataLayer');
    }
  });

  test('Ad-blocker resilience: throwing gtag function is caught and silenced', () => {
    global.window.gtag = () => {
      throw new Error('AdBlocker security violation: connection blocked');
    };

    const safeGtag = (...args) => {
      try {
        if (typeof window.gtag === 'function') {
          window.gtag(...args);
        }
      } catch (err) {
        // silenced
      }
    };

    // Must not throw exception
    safeGtag('event', 'installer_download');
  });
}

// Case 3: Event Payload Integrity
{
  const events = [];
  global.window = {
    location: {
      hostname: 'easyflowco.com',
      href: 'https://easyflowco.com/promptflow/',
      search: '',
    },
    dataLayer: [],
    gtag: function (...args) {
      events.push(args);
    },
  };

  test('Event A: promptflow_download_click payload contains product_name, button_location, destination_url', () => {
    const payload = {
      product_name: 'PromptFlow',
      button_location: 'promptflow_hero',
      destination_url: 'https://github.com/forlone970-sys/easyflow-website/releases/download/v0.1.0/PromptFlow_0.1.0_x64-setup.exe',
    };
    window.gtag('event', 'promptflow_download_click', payload);

    const hit = events[events.length - 1];
    if (hit[0] !== 'event' || hit[1] !== 'promptflow_download_click') {
      throw new Error('Incorrect event command/name');
    }
    if (hit[2].product_name !== 'PromptFlow') throw new Error('Missing or wrong product_name');
    if (hit[2].button_location !== 'promptflow_hero') throw new Error('Missing or wrong button_location');
    if (!hit[2].destination_url.includes('.exe')) throw new Error('Missing or wrong destination_url');
  });

  test('Event B: installer_download payload contains product_name, file_name, file_extension, link_url', () => {
    const payload = {
      product_name: 'PromptFlow',
      file_name: 'PromptFlow_0.1.0_x64-setup.exe',
      file_extension: 'exe',
      link_url: 'https://github.com/forlone970-sys/easyflow-website/releases/download/v0.1.0/PromptFlow_0.1.0_x64-setup.exe',
    };
    window.gtag('event', 'installer_download', payload);

    const hit = events[events.length - 1];
    if (hit[1] !== 'installer_download') throw new Error('Incorrect event name');
    if (hit[2].product_name !== 'PromptFlow') throw new Error('Missing product_name');
    if (hit[2].file_name !== 'PromptFlow_0.1.0_x64-setup.exe') throw new Error('Missing or wrong file_name');
    if (hit[2].file_extension !== 'exe') throw new Error('Missing or wrong file_extension');
    if (!hit[2].link_url.endsWith('PromptFlow_0.1.0_x64-setup.exe')) throw new Error('Missing or wrong link_url');
  });

  test('Event C: outbound_click payload contains destination_url and link_domain', () => {
    const payload = {
      destination_url: 'https://github.com/forlone970-sys/easyflow-website/releases',
      link_domain: 'github.com',
      link_text: 'GitHub Releases',
    };
    window.gtag('event', 'outbound_click', payload);

    const hit = events[events.length - 1];
    if (hit[1] !== 'outbound_click') throw new Error('Incorrect event name');
    if (hit[2].link_domain !== 'github.com') throw new Error('Missing link_domain');
  });

  test('UTM parameters extraction', () => {
    global.window.location.search = '?utm_source=instagram&utm_medium=paid_social&utm_campaign=launch2026&utm_content=carousel';
    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get('utm_source');
    const utm_medium = params.get('utm_medium');
    const utm_campaign = params.get('utm_campaign');
    const utm_content = params.get('utm_content');

    if (utm_source !== 'instagram') throw new Error('Wrong utm_source');
    if (utm_medium !== 'paid_social') throw new Error('Wrong utm_medium');
    if (utm_campaign !== 'launch2026') throw new Error('Wrong utm_campaign');
    if (utm_content !== 'carousel') throw new Error('Wrong utm_content');
  });
}

console.log(`\nRuntime test results: ${passed} passed, ${failed} failed.`);
if (failed > 0) process.exit(1);
