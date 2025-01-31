const { git } = require('./exec')
const { HEAD } = require('./refs')

// Return information on each commit since the `base` commit, such as SHA,
// parent commits, author, committer and commit message
const getCommits = async function(base, cwd) {
  const stdout = await git(['log', `--pretty=format:${JSON.stringify(FORMAT_JSON)}`, `${base}...${HEAD}`], cwd)
  const commits = JSON.parse(`[${stdout.split('\n').join(',')}]`)
  return commits
}

const FORMAT_JSON = {
  sha: '%H',
  parents: '%p',
  author: { name: '%an', email: '%ae', date: '%ai' },
  committer: { name: '%cn', email: '%ce', date: '%ci' },
  message: '%f',
}

module.exports = { getCommits }
