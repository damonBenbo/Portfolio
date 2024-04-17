const Image = require("@11ty/eleventy-img");

// Asynchronous function to process images and return HTML
async function imageShortcode(src, alt, sizes = "100vw") {
    // Generate image metadata
    let metadata = await Image(`./src${src}`, {
        widths: [300, 600, 1200], // Adjust widths as needed
        formats: ["avif", "jpeg"], // Consider adding 'webp' for better performance
        urlPath: "/images/",
        outputDir: "./public/images/"
    });

    // Define attributes for the <img> element
    let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
    };

    // Generate and return the image HTML
    return Image.generateHTML(metadata, imageAttributes, {
        whitespaceMode: "inline" // Helps to minimize the HTML output
    });
}

module.exports = function (eleventyConfig) {
    // Pass through static files
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/favicons");

    // Utility shortcode to insert the current year
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // Register the image shortcode for use in Nunjucks templates
    eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};
