const path = require("path")
const pdf_extract = require('pdf-extract')

console.log("Usage: node thisfile.js the/path/tothe.pdf")
const absolute_path_to_pdf = './working.pdf'
// if (absolute_path_to_pdf.includes(" ")) throw new Error("will fail for paths w spaces like " + absolute_path_to_pdf)

const options = {
    type: 'ocr', // perform ocr to get the text within the scanned image
    ocr_flags: ['--psm 1'], // automatically detect page orientation
}
const processor = pdf_extract(absolute_path_to_pdf, options, () => console.log("Starting…"))
processor.on('complete', data => callback(null, data))
processor.on('error', callback)
function callback(error, data) { error ? console.error({ error }) : console.log({ data }) }