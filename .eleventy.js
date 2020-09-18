module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/site/static")

  eleventyConfig.addLayoutAlias("base", "layouts/base.njk")

  eleventyConfig.setDataDeepMerge(true);
  
  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src/site",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  }
}