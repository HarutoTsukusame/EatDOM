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
						v.urlEncodedText = encodeURIComponent(binary);
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
			c.t(c => `Base64形式の文字列：`);
		});
		c.e(`textarea`, c => {
			v.toolUrlEncode.target.encoded = c;
			c.a(`id`, c => {
				c.t(c => `encoded`);
			});
			c.a(`class`, c => {
				c.t(c => `multi-line-stretch `);
			});
			c.t(c => v.base64Text);
			c.setPostRenderHook(node => {
				node.addEventListener("input", event => {
					try {
						v.base64Text = event.target.value;
						const binary = atob(event.target.value);
						const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
						v.toolUrlEncode.decodedText = new TextDecoder().decode(bytes);
					} catch (e) {
						v.toolUrlEncode.decodedText = "";
					}
					v.toolUrlEncode.target.decoded.refresh();
				});
			});
		});
	});
}