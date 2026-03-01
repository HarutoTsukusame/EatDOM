export function menu(c, v) {
	c.e(`a`, c => {
		c.a(`href`, c => {
			c.t(c => import.meta.url);
		});
		c.t(c => `[${import.meta.url.split("/").splice(-1)}]`);
	});
	c.e(`menu`, c => {
		c.e(`a`, c => {
			c.a(`href`, c => {
				c.t(c => `.`);
			});
			c.e(`li`, c => {
				c.t(c => `トップ`);
			});
		});
		c.e(`a`, c => {
			c.a(`href`, c => {
				c.t(c => `?tutorial`);
			});
			c.e(`li`, c => {
				c.t(c => `チュートリアル`);
			});
		});
		c.e(`a`, c => {
			c.a(`href`, c => {
				c.t(c => `?reference`);
			});
			c.e(`li`, c => {
				c.t(c => `リファレンス`);
			});
		});
		c.e(`a`, c => {
			c.e(`li`, c => {
				c.t(c => `サンプルコード集`);
			});
		});
		c.e(`a`, c => {
			c.a(`href`, c => {
				c.t(c => `?demo-lifegame`);
			});
			c.e(`li`, c => {
				c.t(c => `デモ：大量ノード`);
			});
		});
		c.e(`a`, c => {
			c.a(`href`, c => {
				c.t(c => `?tool-md2html`);
			});
			c.e(`li`, c => {
				c.t(c => `ツール：MD to HTML`);
			});
		});
		c.e(`a`, c => {
			c.a(`href`, c => {
				c.t(c => `?tool-html2eatdom`);
			});
			c.e(`li`, c => {
				c.t(c => `ツール：HTML to EatDOM`);
			});
		});
	});
}
