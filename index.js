const fs = require("fs")

const file = process.env.INPUT_FILE
const space = Number(process.env.INPUT_SPACE)
const removeKeys = process.env.INPUT_REMOVEKEYS
const original = fs.readFileSync(file, { encoding: "utf8" })
const data = JSON.parse(original)

removeKeys
  .split(",")
  .map((key) => key.trim())
  .filter((key) => key)
  .forEach((key) => {
    delete data[key]
  })

const formatted = JSON.stringify(data, null, space)

fs.writeFileSync(file, formatted)
