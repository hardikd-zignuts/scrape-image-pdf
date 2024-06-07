const inspect = require('eyes').inspector({ maxLength: 20000 });
const pdf_extract = require('pdf-extract');
const absolute_path_to_pdf = './Erik Pruger Delivery.pdf'
const options = {
    type: 'ocr' // perform ocr to get the text within the scanned image
}

const processor = pdf_extract(absolute_path_to_pdf, options, function (err) {
    if (err) {
        return callback(err);
    }
});
processor.on('complete', function (data) {
    inspect(data.text_pages, 'extracted text pages');
    callback(null, text_pages);
});
processor.on('error', function (err) {
    inspect(err, 'error while extracting pages');
    return callback(err);
});

function callback(error, data) { error ? console.error(error) : console.log(data) }
