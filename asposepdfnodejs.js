const AsposePdf = require('asposepdfnodejs');
const pdf_file = './Erik Pruger Delivery.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Convert a PDF-file to JPG with template "ResultPdfToJpg{0:D2}.jpg" ({0}, {0:D2}, {0:D3}, ... format page number), resolution 150 DPI and save*/
    const json = AsposePdfModule.AsposePdfPagesToJpg(pdf_file, "./img/ResultPdfToJpg{0:D2}.jpg", 150);
    console.log("AsposePdfPagesToJpg => %O", json.errorCode == 0 ? json.filesNameResult : json.errorText);
});