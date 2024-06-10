const PdfExtractor = require('pdf-extractor').PdfExtractor;

let outputDir = './img',

    pdfExtractor = new PdfExtractor(outputDir, {
        viewportScale: (width, height) => {
            //dynamic zoom based on rendering a page to a fixed page size 
            if (width > height) {
                //landscape: 1100px wide
                return 1100 / width;
            }
            //portrait: 800px wide
            return 800 / width;
        },
    });

pdfExtractor.parse('./Erik Pruger Delivery.pdf').then(function () {
    console.log('# End of Document');
}).catch(function (err) {
    console.error('Error: ' + err);
});