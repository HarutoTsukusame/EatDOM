import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { generateSourceLink } from "./utility-generate-source-link";

export function toolMd2Html(c, v) {
	generateSourceLink(c, import.meta.url);
	if (!v.toolMd2Html) {
		v.toolMd2Html = {
			target: {},
			mdText: "# Hello, World!",
			htmlText: "",
		};
		v.toolMd2Html.htmlText = marked.parse(v.toolMd2Html.mdText);
	}
	c.e(`h2`, c => {
		c.t(c => `Markdown形式の文字列をHTML形式に変換するツール`);
	});
	c.e(`form`, c => {
		c.e(`label`, c => {
			c.a(`for`, c => {
				c.t(c => `md`);
			});
			c.t(c => `Markdown形式の文字列：`);
		});
		c.e(`textarea`, c => {
			c.a(`id`, c => {
				c.t(c => `md`);
			});
			c.a(`class`, c => {
				c.t(c => `tool-md2html `);
			});
			c.t(c => v.toolMd2Html.mdText);
			c.setPostRenderHook(node => {
				node.addEventListener("input", event => {
					v.toolMd2Html.mdText = event.target.value;
					v.toolMd2Html.htmlText = marked.parse(v.toolMd2Html.mdText);
					v.toolMd2Html.target.html.refresh();
				});
			});
		});
		c.e(`label`, c => {
			c.a(`for`, c => {
				c.t(c => `html`);
			});
			c.t(c => `HTML形式の文字列：`);
		});
		c.e(`textarea`, c => {
			v.toolMd2Html.target.html = c;
			c.a(`id`, c => {
				c.t(c => `html`);
			});
			c.a(`class`, c => {
				c.t(c => `tool-md2html `);
			});
			c.t(c => v.toolMd2Html.htmlText);
		});
	});
}
