import { generateSourceLink } from "./utility-generate-source-link.js";

export function toolUrlEncode(c, v) {
	generateSourceLink(c, import.meta.url);
	if (!v.toolUrlEncode) {
		v.toolUrlEncode = {
			target: {},
			decodedText: "",
		};
	}
	if (!v.urlEncodedText) {
		v.urlEncodedText = "";
	}
	c.e(`h2`, c => {
		c.t(c => `URLエンコードしたりデコードしたりするツール`);
	});
	c.e(`form`, c => {
		c.e(`label`, c => {
			c.a(`for`, c => {
				c.t(c => `decoded`);
			});
			c.t(c => `URLエンコードされていない文字列：`);
		});
		c.e(`textarea`, c => {
			v.toolUrlEncode.target.decoded = c;
			c.a(`id`, c => {
				c.t(c => `decoded`);
			});
			c.a(`class`, c => {
				c.t(c => `multi-line-stretch `);
			});
			c.t(c => v.toolUrlEncode.decodedText);
			c.setPostRenderHook(node => {
				node.addEventListener("input", event => {
					try {
						v.toolUrlEncode.decodedText = event.target.value;
						v.urlEncodedText = encodeURIComponent(v.toolUrlEncode.decodedText);
					} catch (e) {
						v.urlEncodedText = "";
					}
					v.toolUrlEncode.target.encoded.refresh();
				});
			});
		});
		c.e(`label`, c => {
			c.a(`for`, c => {
				c.t(c => `encoded`);
			});
			c.t(c => `URLエンコードされた文字列：`);
		});
		c.e(`textarea`, c => {
			v.toolUrlEncode.target.encoded = c;
			c.a(`id`, c => {
				c.t(c => `encoded`);
			});
			c.a(`class`, c => {
				c.t(c => `multi-line-stretch `);
			});
			c.t(c => v.urlEncodedText);
			c.setPostRenderHook(node => {
				node.addEventListener("input", event => {
					try {
						v.urlEncodedText = event.target.value;
						v.toolUrlEncode.decodedText = decodeURIComponent(v.urlEncodedText);
					} catch (e) {
						v.toolUrlEncode.decodedText = "";
					}
					v.toolUrlEncode.target.decoded.refresh();
				});
			});
		});
	});
}