const { createWorker, recognize } = require('tesseract.js');

(async () => {
    const worker = await createWorker('eng');
    //  first page of the pdf
    // const page = await worker.recognize('https://github.com/hardikd-zignuts/social-scraper/assets/124128351/4f25c16a-1362-43ba-9d01-aa80203c2ac9');

    //  second page of the pdf
    const page = await worker.recognize('./images/curriculum_vitae-11.png');


    console.log(page.data.text);
    await worker.terminate();
})();

