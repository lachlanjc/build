const { git } = require('./exec')
const { HEAD } = require('./refs')

// Return the list of modified|created|deleted files according to git, between
// the `base` commit and the `HEAD`
const getDiffFiles = async function(base, cwd) {
  const stdout = await git(['diff', '--name-status', '--no-renames', `${base}...${HEAD}`], cwd)
  const files = stdout
    .split('\n')
    .map(getDiffFile)
    .filter(Boolean)

  const modifiedFiles = getFilesByType(files, 'M')
  const createdFiles = getFilesByType(files, 'A')
  const deletedFiles = getFilesByType(files, 'D')
  return { modifiedFiles, createdFiles, deletedFiles }
}

// Parse each `git diff` line
const getDiffFile = function(line) {
  const result = DIFF_FILE_REGEXP.exec(line)

  // Happens for example when `base` is invalid
  if (result === null) {
    return
  }

  const [, type, filepath] = result
  return { type, filepath }
}

const DIFF_FILE_REGEXP = /([ADM])\s+(.*)/

const getFilesByType = function(files, type) {
  return files.filter(file => file.type === type).map(getFilepath)
}

const getFilepath = function({ filepath }) {
  return filepath
}

module.exports = { getDiffFiles }
