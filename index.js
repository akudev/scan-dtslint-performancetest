const { spawnSync } = require("child_process");
const path = require("path");

const start = Date.now();
console.log(`Running... this can take a few minutes...`);

// run dtslint
spawnSync("npx", ["dtslint", ".", "2>", path.relative(process.cwd(), "output.txt")], { shell: true, maxBuffer: 1024 * 1024 * 20 }); // default max buffer size is 1 MB since 2019, was 200 kB at some earlier time; we need MORE!

const end = Date.now();
console.log(`Completed in ${((end - start) / 1000).toFixed(1)} seconds.`);

