export function reference(c, v) {
	c.e(`h1`, c => {
		c.t(c => `リファレンス`);
	});
	c.e(`section`, c => {
		c.e(`p`, c => {
			c.t(c => `ここはリファレンスです。`);
		});
	});
}
