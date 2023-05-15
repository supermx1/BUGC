module.exports = function (eleventyConfig) {
  
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });

  eleventyConfig.addPassthroughCopy('src/assets/js');
  eleventyConfig.addPassthroughCopy('src/assets/img');

  return {
    dir: {
      input: 'src',
      output: '_site'
    },
  };
};
