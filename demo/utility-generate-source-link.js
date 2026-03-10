export function generateSourceLink(c, url) {
	const url = url;
	c.e(`a`, c => {
		c.a(`href`, c => {
			c.t(c => url);
		});
		c.t(c => `[${url.split("/").splice(-1)}]`);
	});
}