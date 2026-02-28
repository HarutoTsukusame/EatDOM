export function error404(c, v) {
	c.e(`a`, c => {
		c.a(`href`, c => {
			c.t(c => import.meta.url);
		});
		c.t(c => `[${import.meta.url.split("/").splice(-1)}]`);
	});
	c.e(`h1`, c => {
		c.t(c => `このページは存在しません`);
	});
	c.e(`p`, c => {
		c.t(c => `このページは存在しません。`);
		c.t(c => `メニューから存在するページを選んでリトライしてください。`);
	});
}