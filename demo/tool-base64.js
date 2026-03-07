export function toolBase64(c, v) {
	c.e(`a`, c => {
		c.a(`href`, c => {
			c.t(c => import.meta.url);
		});
		c.t(c => `[${import.meta.url.split("/").splice(-1)}]`);
	});
	if (!v.toolBase64) {
		v.toolBase64 = {
			target: {},
			decodedText: "",
			encodedText: "",
		};
	}
	if (!v.base64Text) {
		v.base64Text = "";
	}
	c.e(`h2`, c => {
		c.t(c => `Base64形式の文字列に変換（エンコード）したりBase64形式の文字列を元に戻（デコード）したりするツール`);
	});
	c.e(`form`, c => {
		c.e(`label`, c => {
			c.a(`for`, c => {
				c.t(c => `decoded`);
			});
			c.t(c => `Base64形式ではない文字列：`);
		});
		c.e(`textarea`, c => {
			v.toolBase64.target.decoded = c;
			c.a(`id`, c => {
				c.t(c => `decoded`);
			});
			c.a(`class`, c => {
				c.t(c => `tool-base64 `);
			});
			c.t(c => v.toolBase64.decodedText);
			c.setPostRenderHook(node => {
				node.addEventListener("input", event => {
					try {
						v.toolBase64.decodedText = event.target.value;
						const bytes = new TextEncoder().encode(v.toolBase64.decodedText);
						const binary = String.fromCharCode(...bytes);
						v.base64Text = btoa(binary);
					} catch (e) {
						v.base64Text = "";
					}
					v.toolBase64.target.encoded.refresh();
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
			v.toolBase64.target.encoded = c;
			c.a(`id`, c => {
				c.t(c => `encoded`);
			});
			c.a(`class`, c => {
				c.t(c => `tool-base64 `);
			});
			c.t(c => v.base64Text);
			c.setPostRenderHook(node => {
				node.addEventListener("input", event => {
					try {
						v.base64Text = event.target.value;
						const binary = atob(event.target.value);
						const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
						v.toolBase64.decodedText = new TextDecoder().decode(bytes);
					} catch (e) {
						v.toolBase64.decodedText = "";
					}
					v.toolBase64.target.decoded.refresh();
				});
			});
		});
	});
}