import("../module/index.mjs").then(module => {
    // Count the number of 'a' and log it
    const aCount = module.default.split("").filter(e => e === 'a').length;
    console.log("[app-2] Welcome to app-2");
    console.log(`[app-2] somethingImportantWeWantEverywhere contains the letter 'a' ${aCount} times`);
});

// Wait for a very long time
setTimeout(() => {}, 99999999);
