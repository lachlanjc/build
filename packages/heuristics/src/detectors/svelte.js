const { hasRequiredDeps, hasRequiredFiles, getPackageManagerCommand, scanScripts } = require('../utils/jsdetect')

module.exports = function(projectDir) {
  // REQUIRED FILES
  if (!hasRequiredFiles(['package.json'], projectDir)) return false
  // REQUIRED DEPS
  if (!hasRequiredDeps(['svelte'], projectDir)) return false
  // HAS DETECTOR, IT WILL BE PICKED UP BY SAPPER DETECTOR, avoid duplication https://github.com/netlify/cli/issues/347
  if (hasRequiredDeps(['sapper'], projectDir)) return false

  /** everything below now assumes that we are within svelte */

  const possibleArgsArrs = scanScripts({
    preferredScriptsArr: ['dev', 'start', 'run'],
    preferredCommand: 'npm run dev',
  })

  if (possibleArgsArrs.length === 0) {
    // ofer to run it when the user doesnt have any scripts setup! 🤯
    possibleArgsArrs.push(['npm', 'dev'])
  }

  return {
    framework: 'svelte',
    language: 'js',
    command: getPackageManagerCommand(projectDir),
    port: 8888,
    proxyPort: 5000,
    env: { ...process.env },
    possibleArgsArrs,
    urlRegexp: new RegExp(`(http://)([^:]+:)${5000}(/)?`, 'g'),
    dist: 'public',
  }
}
