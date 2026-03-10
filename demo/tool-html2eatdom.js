import { generateSourceLink } from "./utility-generate-source-link.js";

const VOID_ELEMENTS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

export function toolHtml2Eatdom(c, v) {
	generateSourceLink(c, import.meta.url);
	function html2Eatdom(htmlText) {
		let temp = htmlText;
		temp = temp.replace(/>(.*?)</gs, (match, textNode) => {
			if (textNode.trim() == "") {
				return "><";
			} else {
				const resText = textNode.split("\n").map(t => `c.t(c => \`${t.replace(/`/g, "\\`")}\`);\n`).join("");
				return `>${resText}<`;
			}
		});
		temp = temp.replace(/<\/[\w_-]+>/g, "});\n");
		temp = temp.replace(/<([\w_-]+)(.*?)\s*(\/?)>/g, (match, tagName, attributes, selfClose) => {
			let elementString = `c.e(\`${tagName}\`, c => {\n`;

			let attributeString;
			if (attributes) {
				attributeString = attributes.replace(/\s*([\w_-]+)\s*=\s*"([^"]*)"/g, (match, key, value) => {
					return `c.a(\`${key}\`, c => {\nc.t(c => \`${value}\`);\n});\n`;
				});
			} else {
				attributeString = "";
			}

			let closureString;
			if (VOID_ELEMENTS.has(tagName.toLowerCase()) || selfClose != "") {
				closureString = "});\n";
			} else {
				closureString = "";
			};
			return `${elementString}${attributeString}${closureString}`;
		});
		return temp;
	}
	v.toolHtml2Eatdom = {
		target: {},
		htmlText: `<html>\n\t<head id="head">aaaa</head>\n\t<body id="body">aaaa<br><div /></body>\n</html> `,
		eatdomText: "",
	};
	v.toolHtml2Eatdom.eatdomText = html2Eatdom(v.toolHtml2Eatdom.htmlText);
	c.e(`h2`, c => {
		c.t(c => `HTML形式の文字列をEatDOMのプログラムに変換するツール`);
	});
	c.e(`form`, c => {
		c.e(`label`, c => {
			c.a(`for`, c => {
				c.t(c => `html`);
			});
			c.t(c => `HTML形式の文字列：`);
		});
		c.e(`textarea`, c => {
			c.a(`id`, c => {
				c.t(c => `html`);
			});
			c.a(`class`, c => {
				c.t(c => `tool-html2eatdom`);
			});
			c.t(c => v.toolHtml2Eatdom.htmlText);
			c.setPostRenderHook(node => {
				node.addEventListener("input", event => {
					v.toolHtml2Eatdom.htmlText = event.target.value;
					v.toolHtml2Eatdom.eatdomText = html2Eatdom(v.toolHtml2Eatdom.htmlText);
					v.toolHtml2Eatdom.target.eatdom.refresh();
				});
			});
		});
		c.e(`label`, c => {
			c.a(`for`, c => {
				c.t(c => `html`);
			});
			c.t(c => `EatDOMのプログラム：`);
		});
		c.e(`textarea`, c => {
			v.toolHtml2Eatdom.target.eatdom = c;
			c.a(`id`, c => {
				c.t(c => `eatdom`);
			});
			c.a(`class`, c => {
				c.t(c => `tool-html2eatdom`);
			});
			c.t(c => v.toolHtml2Eatdom.eatdomText);
		});
	});
}
