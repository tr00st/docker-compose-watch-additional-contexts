import("../module/index.mjs").then(module => {
    // Figure the length and log it
    console.log("[app-1] Welcome to app-1");
    console.log(`[app-1] module.default is ${module.default.length} characters long`);
});

// Wait for a very long time
setTimeout(() => {}, 99999999);
