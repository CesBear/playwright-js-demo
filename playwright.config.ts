import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
testDir: './tests',
timeout: 30 * 10000,
expect: {
    timeout: 5000
},
reporter: 'html',
use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
    extraHTTPHeaders: {
        'Content-Type': 'application/json',
      },
},
};

export default config;