const { writeFileSync } = require("fs-extra");
const { convert } = require("pdf-img-convert");



(async () => {
    const outputImages = await convert("./Erik Pruger Delivery.pdf", { scale: 5 });
    const imagePaths = outputImages.map((image, i) => {
        const path = "images/output" + i + ".png";
        writeFileSync(path, image);
        return path;
    });

    console.log({ imagePaths });
})()