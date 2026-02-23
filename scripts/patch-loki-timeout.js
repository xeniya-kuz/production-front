/**
 * Patches @loki/browser's awaitSelectorPresent timeout from 10s to 60s.
 *
 * Why: the default 10 s is hardcoded and not exposed via loki.config.js.
 * On a GitHub Actions runner with chromeConcurrency > 1, CPU contention
 * can push story render time past 10 s, producing false "Timeout" failures.
 */
const fs = require('fs')
const path = require('path')

const target = path.join(
    __dirname,
    '..',
    'node_modules',
    '@loki',
    'browser',
    'src',
    'await-selector-present.js',
)

if (!fs.existsSync(target)) {
    console.log('[patch-loki] file not found, skipping')
    process.exit(0)
}

const original = fs.readFileSync(target, 'utf8')
const patched = original.replace('timeout = 10000', 'timeout = 60000')

if (patched === original) {
    console.log('[patch-loki] already patched or pattern not found, skipping')
} else {
    fs.writeFileSync(target, patched)
    console.log('[patch-loki] awaitSelectorPresent timeout → 60 000 ms')
}
