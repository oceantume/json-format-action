const core = require('@actions/core')
const github = require('@actions/github')
const fs = require('fs')

try {
  const file = core.getInput('file')
  const space = Number(core.getInput('space'))

  const original = fs.readFileSync(file, { encoding: 'utf8' })
  const formatted = JSON.stringify(JSON.parse(original), null, space)

  fs.writeFileSync(file, formatted)
} catch (error) {
  core.setFailed(error)
}
