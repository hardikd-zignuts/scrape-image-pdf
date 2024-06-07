const { recognize } = require("node-native-ocr");
const fs = require("fs").promises; // Using promises for async/await syntax
const path = require("path");

const filepath = path.join(
    __dirname,
    "page1.png"
);

(async () => {
    try {
        const imageBuffer = await fs.readFile(filepath);
        const text = await recognize(imageBuffer);
        console.log(text);
    } catch (error) {
        console.error(error);
    }
})();