/**
 * Patches loki packages to fix several issues:
 *
 * 1. awaitSelectorPresent timeout 10s → 60s
 *    Why: the default is hardcoded and not configurable via loki.config.js.
 *    On a GitHub Actions runner CPU contention can push story render time
 *    past 10 s, producing false "Timeout" failures.
 *
 * 2. create-chrome-target: re-throw TimeoutError instead of swallowing it
 *    Why: when chromeLoadTimeout fires, the caught TimeoutError is silently
 *    swallowed and captureScreenshotForStory returns undefined.
 *    compareScreenshot then calls fs.outputFile(path, undefined) which crashes
 *    the entire loki process (exit code 7) instead of marking the test FAIL.
 *
 * 3. create-chrome-target: cap awaitRequestsFinished at 10 s
 *    Why: Storybook 8 keeps long-lived connections (WebSocket/SSE channel,
 *    i18next-http-backend) that never close, so awaitRequestsFinished never
 *    resolves and the 60 s chromeLoadTimeout fires for every single story.
 *    Capping at 10 s lets the screenshot proceed once the UI is painted.
 *    Errors (e.g. FetchingURLsError for 404 translation files) are swallowed
 *    here because loki.config.js already sets fetchFailIgnore: '.*'.
 *
 * 4. compare-screenshot: guard against undefined screenshot (defense in depth)
 *    Why: if screenshot is undefined for any reason, throw a proper Error so
 *    loki marks the test as FAIL rather than crashing the whole process.
 */
const fs = require('fs')
const path = require('path')

function patch(filePath, searchStr, replaceStr, label) {
    if (!fs.existsSync(filePath)) {
        console.log(`[patch-loki] file not found, skipping: ${label}`)
        return
    }
    const original = fs.readFileSync(filePath, 'utf8')
    const patched = original.replace(searchStr, replaceStr)
    if (patched === original) {
        console.log(`[patch-loki] already patched or pattern not found, skipping: ${label}`)
    } else {
        fs.writeFileSync(filePath, patched)
        console.log(`[patch-loki] ${label}`)
    }
}

const root = path.join(__dirname, '..', 'node_modules')

// Patch 1: awaitSelectorPresent timeout 10s → 60s
patch(
    path.join(root, '@loki', 'browser', 'src', 'await-selector-present.js'),
    'timeout = 10000',
    'timeout = 60000',
    'awaitSelectorPresent timeout → 60 000 ms',
)

// Patch 2: re-throw TimeoutError in create-chrome-target.js
patch(
    path.join(root, '@loki', 'target-chrome-core', 'src', 'create-chrome-target.js'),
    `      if (err instanceof TimeoutError) {
        debug(\`Timed out waiting for "\${url}" to load\`);
      } else {
        throw err;
      }`,
    `      throw err;`,
    'create-chrome-target: re-throw TimeoutError instead of swallowing',
)

// Patch 3: cap awaitRequestsFinished at 10 s
patch(
    path.join(root, '@loki', 'target-chrome-core', 'src', 'create-chrome-target.js'),
    `      debug('Waiting for awaitRequestsFinished...');
      await awaitRequestsFinished();`,
    `      debug('Waiting for awaitRequestsFinished...');
      await Promise.race([awaitRequestsFinished().catch(() => {}), new Promise(r => setTimeout(r, 10000))]);`,
    'create-chrome-target: cap awaitRequestsFinished at 10 000 ms',
)

// Patch 4: guard against undefined screenshot in compare-screenshot.js
patch(
    path.join(root, '@loki', 'runner', 'src', 'commands', 'test', 'compare-screenshot.js'),
    `  const shouldUpdateReference =
    options.updateReference || (!options.requireReference && !referenceExists);

  await fs.outputFile(`,
    `  const shouldUpdateReference =
    options.updateReference || (!options.requireReference && !referenceExists);

  if (!screenshot) {
    throw new Error(\`Screenshot capture failed for \${kind}/\${story}\`);
  }
  await fs.outputFile(`,
    'compare-screenshot: guard against undefined screenshot',
)
