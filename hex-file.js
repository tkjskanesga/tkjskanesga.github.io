const fs = require("fs")
const path = require("path")

const publicDir = path.join(__dirname, "public")
const supportedExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".webp",
  ".avif",
  ".svg",
  ".mp4",
  ".webm",
  ".mov",
  ".avi",
  ".mkv",
  ".ogg",
  ".flv",
  ".pdf"
])

const hexSuffixPattern = /-[0-9a-fA-F]{8}$/

function generateHexCode(length = 8) {
  return Array.from({ length }, () => Math.floor(Math.random() * 16).toString(16)).join("")
}

function shouldRename(fileName) {
  const ext = path.extname(fileName).toLowerCase()
  if (!supportedExtensions.has(ext)) return false

  const base = path.basename(fileName, ext)
  return !hexSuffixPattern.test(base)
}

function findAndRenameFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  entries.forEach((entry) => {
    const entryPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      findAndRenameFiles(entryPath)
      return
    }

    if (!shouldRename(entry.name)) {
      return
    }

    const ext = path.extname(entry.name)
    const base = path.basename(entry.name, ext)
    let newName = `${base}-${generateHexCode(8)}${ext}`
    let newPath = path.join(dir, newName)

    while (fs.existsSync(newPath)) {
      newName = `${base}-${generateHexCode(8)}${ext}`
      newPath = path.join(dir, newName)
    }

    fs.renameSync(entryPath, newPath)
    console.log(`Renamed ${entryPath} -> ${newPath}`)
  })
}

if (!fs.existsSync(publicDir)) {
  console.error(`Public directory not found: ${publicDir}`)
  process.exit(1)
}

findAndRenameFiles(publicDir)

