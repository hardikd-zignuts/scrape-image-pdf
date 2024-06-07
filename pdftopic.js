const pdftopic = require("pdftopic");
const fs = require("fs");

(async () => {
    const curriculum_vitae = fs.readFileSync('./Erik Pruger Delivery.pdf');

    const converted_result = await pdftopic.pdftobuffer(curriculum_vitae, "all");

    converted_result.forEach((file, index) => {
        fs.writeFileSync(`./images/curriculum_vitae-${index}.png`, file);
    });
})();