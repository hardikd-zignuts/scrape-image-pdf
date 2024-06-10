const pdftopic = require("pdftopic");
const fs = require("fs");

(async () => {
    const curriculum_vitae = fs.readFileSync('./Erik Pruger Delivery.pdf');
    try {
        const converted_result = await pdftopic.pdftobuffer(curriculum_vitae, "all");
        converted_result.forEach((file, index) => {
            fs.writeFileSync(`./images/page-${index}.png`, file);
        });
    } catch (error) {
        console.log({ error });
    }
})();