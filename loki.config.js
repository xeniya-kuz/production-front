module.exports = {
    configurations: {
        'chrome.laptop': {
            target: 'chrome.app',
            width: 1366,
            height: 768,
            deviceScaleFactor: 1,
            mobile: false,
        },
        'chrome.iphone7': {
            target: 'chrome.app',
            preset: 'iPhone 7',
        },
    },
    staticDir: './storybook-static', // путь к папке со статическим билдом
    chromeFlags:
        '--headless --disable-gpu --hide-scrollbars --no-sandbox --disable-setuid-sandbox --disable-dev-shm-usage',
    // Ignore failed requests (e.g. i18next translation 404s, WebSocket upgrade rejections)
    // so loki never throws FetchingURLsError for background requests.
    fetchFailIgnore: '.*',
}
