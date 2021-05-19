const fs = require('fs-extra');
const concat = require('concat');

build = async () => {
    const files = [
        './dist/components/runtime.js',
        './dist/components/polyfills.js',
        './dist/components/main.js'
    ];

    await fs.ensureDir('./dist/components/output');
    await concat(files, './dist/components/output/main.js');
    await fs.copyFile('./dist/components/styles.css', './dist/components/output/styles.css');
}
build();