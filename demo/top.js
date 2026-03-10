import { update } from "./update.js";
import { generateSourceLink } from "./utility-generate-source-link.js";

export function top(c, v) {
	generateSourceLink(c, import.meta.url);
	c.e(`h1`, c => {
		c.t(c => `EatDOM`);
	});
	c.e(`p`, c => {
		c.t(c => `Hello, EatDOM World! ようこそEatDOMの世界へ。`);
	});
	c.e(`p`, c => {
		c.t(c => `EatDOMは、`);
		c.e(`b`, c => {
			c.t(c => `JSだけでHTMLライクに記述できる超軽量DOMビルダー`);
		});
		c.t(c => `です。`);
	});
	c.e(`p`, c => {
		c.t(c => `しかしただのDOMビルダーではありません。`);
		c.t(c => `DOMを部品化して使い回したり、構築したDOMを部分的に更新することもできてしまう優れモノです。`);
	});
	c.e(`section`, c => {
		c.e(`h2`, c => {
			c.t(c => `ダウンロード`);
		});
		c.e(`p`, c => {
			c.t(c => `とりあえずダウンロードだけしたい方はこちらから。`);
		});
		c.e(`ul`, c => {
			c.e(`li`, c => {
				c.e(`a`, c => {
					c.a(`href`, c => {
						c.t(c => `eatdom.js`);
					});
					c.a(`download`, c => { });
					c.t(c => `eatdom.jsをダウンロードする`);
				});
			});
		});
	});
	c.e(`section`, c => {
		c.e(`h2`, c => {
			c.t(c => `更新履歴`);
		});
		update(c, v);
	});
}
