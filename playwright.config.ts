import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './tests',
    timeout: 30 * 10000,
    expect: {
        timeout: 5000
    },
    reporter: 'html',
    use: {
        headless: false,
        actionTimeout: 0,
        trace: 'on-first-retry',
        extraHTTPHeaders: {
            'Content-Type': 'application/json',
        },
    },
    // below configuration will run parallel test
    projects: [
        {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
        },
        {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] },
        },
        {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] },
        },
        {
        name: 'mobile-safari',
        use: {
            ...devices['iPad Pro'],
        },
        },
    ],
};

export default config;