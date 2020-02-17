const { hasRequiredDeps, hasRequiredFiles, getPackageManagerCommand, scanScripts } = require('../utils/jsdetect')

module.exports = function(projectDir) {
  // REQUIRED FILES
  if (!hasRequiredFiles(['package.json'], projectDir)) return false
  // REQUIRED DEPS
  if (!hasRequiredDeps(['sapper'], projectDir)) return false

  /** everything below now assumes that we are within Sapper */

  const possibleArgsArrs = scanScripts({
    preferredScriptsArr: ['dev', 'start'],
    preferredCommand: 'sapper dev',
  })

  if (possibleArgsArrs.length === 0) {
    // ofer to run it when the user doesnt have any scripts setup! 🤯
    possibleArgsArrs.push(['sapper', 'dev'])
  }

  return {
    framework: 'sapper',
    language: 'js',
    command: getPackageManagerCommand(projectDir),
    port: 8888,
    proxyPort: 3000,
    env: { ...process.env },
    possibleArgsArrs,
    urlRegexp: new RegExp(`(http://)([^:]+:)${3000}(/)?`, 'g'),
    dist: 'static',
  }
}
