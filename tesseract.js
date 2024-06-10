const { createWorker } = require('tesseract.js');

(async () => {
    const worker = await createWorker('eng');

    const page = await worker.recognize('./images/output10.png', {}, { blocks: true });

    // console.log(page.data.paragraphs[0].lines);
    page.data.paragraphs[0].lines.forEach(line => {
        console.log(line.text);
    })
    await worker.terminate();
})();

