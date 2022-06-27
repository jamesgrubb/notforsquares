module.exports = (eleventyConfig) => {
	eleventyConfig.addPassthroughCopy('src/scripts.js');
	eleventyConfig.addPassthroughCopy({
		'node_modules/@svgdotjs': '@svgdotjs',
	});
	return {
		htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist',
			includes: 'template',
		},
	};
};
