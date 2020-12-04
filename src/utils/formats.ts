import { writeFileSync } from 'fs'

export const saveExtractResult = (fileName: string, data): void =>
  writeFileSync(
    `./extract/${cleanURL(fileName)}.json`,
    JSON.stringify(data, null, 2)
  )

export const cleanURL = (value: string): string =>
  value
    .split('//')
    .pop()
    .split('/')
    .join('-')
    .split('.')
    .join('_')
    .toLowerCase()

export const BrowserConfig = {
  // executablePath: '/usr/bin/chromium-browser',
  headless: true,
  args: [
    // Required for Docker version of Puppeteer

    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--disable-setuid-sandbox',
    '--no-first-run',
    '--no-sandbox',
    '--no-zygote',
    '--single-process',
    '--disable-notifications',
    '--disable-web-security',

    // '--no-sandbox',

    // '--disable-features=IsolateOrigins,site-per-process',
    // '--disable-setuid-sandbox',
    // '--disable-dev-shm-usage'

    // '--disable-gpu',
    // '--disable-dev-shm-usage',
    // '--disable-setuid-sandbox',
    // '--timeout=30000',
    // '--no-first-run',
    // '--no-sandbox',
    // '--no-zygote',
    // '--single-process',
    // "--proxy-server='direct://'",
    // '--proxy-bypass-list=*',
    // '--deterministic-fetch',
    // '--disable-notifications',
    // '--disable-web-security',
    // '--disable-features=IsolateOrigins,site-per-process',
  ],
}
