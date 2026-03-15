import { generateSourceLink } from "./utility-generate-source-link.js";

export function toolHtmlEscape(c, v) {
	const escapeChars = {
		"<": "&lt;",
		">": "&gt;",
		"&": "&amp;",
		"\"": "&quot;",
		"'": "&#39;",
	};
	const unescapeChars = {
		"&lt;": "<",
		"&gt;": ">",
		"&amp;": "&",
		"&quot;": "\"",
		"&#39;": "'",
	};
	generateSourceLink(c, import.meta.url);
	if (!v.toolHtmlEscape) {
		v.toolHtmlEscape = {
			target: {},
			unescapedText: "",
		};
	}
	if (!v.htmlEscapedText) {
		v.htmlEscapedText = "";
	}
	c.e(`h2`, c => {
		c.t(c => `HTMLの特殊文字をエスケープしたりアンエスケープしたりするツール`);
	});
	c.e(`form`, c => {
		c.e(`label`, c => {
			c.a(`for`, c => {
				c.t(c => `unescaped`);
			});
			c.t(c => `エスケープされていない文字列：`);
		});
		c.e(`textarea`, c => {
			v.toolHtmlEscape.target.unescaped = c;
			c.a(`id`, c => {
				c.t(c => `unescaped`);
			});
			c.a(`class`, c => {
				c.t(c => `multi-line-stretch `);
			});
			c.t(c => v.toolHtmlEscape.unescapedText);
			c.setPostRenderHook(node => {
				node.addEventListener("input", event => {
					try {
						v.toolHtmlEscape.unescapedText = event.target.value;
						const regex = new RegExp(`(${Object.keys(escapeChars).join("|")})`, "g");
						v.htmlEscapedText = v.toolHtmlEscape.unescapedText.replace(regex, char => escapeChars[char]);
					} catch (e) {
						v.htmlEscapedText = "";
					}
					v.toolHtmlEscape.target.escaped.refresh();
				});
			});
		});
		c.e(`label`, c => {
			c.a(`for`, c => {
				c.t(c => `escaped`);
			});
			c.t(c => `エスケープされている文字列：`);
		});
		c.e(`textarea`, c => {
			v.toolHtmlEscape.target.escaped = c;
			c.a(`id`, c => {
				c.t(c => `escaped`);
			});
			c.a(`class`, c => {
				c.t(c => `multi-line-stretch `);
			});
			c.t(c => v.htmlEscapedText);
			c.setPostRenderHook(node => {
				node.addEventListener("input", event => {
					try {
						v.htmlEscapedText = event.target.value;
						const regex = new RegExp(`(${Object.keys(unescapeChars).join("|")})`, "g");
						v.toolHtmlEscape.unescapedText = v.htmlEscapedText.replace(regex, char => unescapeChars[char]);
					} catch (e) {
						v.toolHtmlEscape.unescapedText = "";
					}
					v.toolHtmlEscape.target.unescaped.refresh();
				});
			});
		});
	});
}