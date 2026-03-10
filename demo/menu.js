import { generateSourceLink } from "./utility-generate-source-link.js";

export function menu(c, v) {
	generateSourceLink(c, import.meta.url);
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
		c.e(`a`, c => {
			c.a(`href`, c => {
				c.t(c => `?tool-base64`);
			});
			c.e(`li`, c => {
				c.t(c => `ツール：Base64エンコーダ/デコーダ`);
			});
		});
		c.e(`a`, c => {
			c.a(`href`, c => {
				c.t(c => `?tool-url-encode`);
			});
			c.e(`li`, c => {
				c.t(c => `ツール：URLエンコーダ/デコーダ`);
			});
		});
	});
}
