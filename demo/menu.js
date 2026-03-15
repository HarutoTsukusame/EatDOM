import { generateSourceLink } from "./utility-generate-source-link.js";

export function menu(c, v) {
	generateSourceLink(c, import.meta.url);
	c.e(`menu`, c => {
		c.e(`li`, c => {
			c.e(`a`, c => {
				c.a(`href`, c => {
					c.t(c => `.`);
				});
				c.t(c => `トップ`);
			});
		});
		c.e(`li`, c => {
			c.e(`a`, c => {
				c.a(`href`, c => {
					c.t(c => `?tutorial`);
				});
				c.t(c => `チュートリアル`);
			});
		});
		c.e(`li`, c => {
			c.e(`a`, c => {
				c.a(`href`, c => {
					c.t(c => `?reference`);
				});
				c.t(c => `リファレンス`);
			});
		});
		c.e(`li`, c => {
			c.e(`a`, c => {
				c.t(c => `サンプルコード集`);
			});
		});
		c.e(`li`, c => {
			c.e(`a`, c => {
				c.a(`href`, c => {
					c.t(c => `?demo-lifegame`);
				});
				c.t(c => `デモ：大量ノード`);
			});
		});
		c.e(`li`, c => {
			c.e(`a`, c => {
				c.a(`href`, c => {
					c.t(c => `?tool-md2html`);
				});
				c.t(c => `ツール：MD to HTML`);
			});
		});
		c.e(`li`, c => {
			c.e(`a`, c => {
				c.a(`href`, c => {
					c.t(c => `?tool-html2eatdom`);
				});
				c.t(c => `ツール：HTML to EatDOM`);
			});
		});
		c.e(`li`, c => {
			c.e(`a`, c => {
				c.a(`href`, c => {
					c.t(c => `?tool-base64`);
				});
				c.t(c => `ツール：Base64エンコーダ/デコーダ`);
			});
		});
		c.e(`li`, c => {
			c.e(`a`, c => {
				c.a(`href`, c => {
					c.t(c => `?tool-url-encode`);
				});
				c.t(c => `ツール：URLエンコーダ/デコーダ`);
			});
		});
		c.e(`li`, c => {
			c.e(`a`, c => {
				c.a(`href`, c => {
					c.t(c => `?tool-html-escape`);
				});
				c.t(c => `ツール：HTMLエスケープ/アンエスケープ`);
			});
		});
	});
}
