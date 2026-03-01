export function update(c, v) {
	c.e(`a`, c => {
		c.a(`href`, c => {
			c.t(c => import.meta.url);
		});
		c.t(c => `[${import.meta.url.split("/").splice(-1)}]`);
	});
	c.e(`dl`, c => {
		c.e(`dt`, c => {
			c.t(c => `2026/01/28`);
		});
		c.e(`dd`, c => {
			c.t(c => `EatDOMを公開。`);
		});
		c.e(`dt`, c => {
			c.t(c => `2026/02/01`);
		});
		c.e(`dd`, c => {
			c.t(c => `デモ：大量の子を持つノードのrefreshを公開。`);
		});
		c.e(`dt`, c => {
			c.t(c => `2026/02/11`);
		});
		c.e(`dd`, c => {
			c.t(c => `リファレンスを公開。`);
		});
		c.e(`dt`, c => {
			c.t(c => `2026/02/15`);
		});
		c.e(`dd`, c => {
			c.t(c => `ツール：MarkdowonをHTMLに変換を公開。`);
		});
		c.e(`dt`, c => {
			c.t(c => `2026/02/18`);
		});
		c.e(`dd`, c => {
			c.t(c => `ツール：HTMLをEatDOMに変換を公開。`);
		});
		c.e(`dt`, c => {
			c.t(c => `2026/02/21`);
		});
		c.e(`dd`, c => {
			c.t(c => `チュートリアルを公開。`);
		});
	});
}
