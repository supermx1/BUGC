const path = require('path');
const prettier = require('prettier');


const prod = process.env.ELEVENTY_ENV === "production"

module.exports = function (eleventyConfig) {
  
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });

  eleventyConfig.addPassthroughCopy('src/assets/js');
  eleventyConfig.addPassthroughCopy('src/assets/img');
  eleventyConfig.addPassthroughCopy('src/assets/media');

  // If Final Build
  if(prod){
    eleventyConfig.addTransform("prettier", prettierTransform);
  }

  return {
    dir: {
      input: 'src',
      output: '_site'
    },
  };
};


// Prettier Transformer
function prettierTransform(content, outputPath) {
    const ext = path.extname(outputPath);
    switch (ext) {
        case ".html":
            return prettier.format(content, {parser: "html"});
        case ".css":
            return prettier.format(content, {parser: "css"});
        case ".js":
            return prettier.format(content, {parser: "js"});
        default:
            return content;
    }
}