export function top(c, v) {
	c.e(`h1`, c => {
		c.t(c => `トップページ`);
	});
	c.e(`section`, c => {
		c.e(`p`, c => {
			c.t(c => `これはトップページです。`);
		});
	});
}
