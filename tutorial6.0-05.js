export function tutorial(c, v) {
	c.e(`h1`, c => {
		c.t(c => `チュートリアル`);
	});
	c.e(`section`, c => {
		c.e(`p`, c => {
			c.t(c => `ここはチュートリアルです。`);
		});
	});
}
