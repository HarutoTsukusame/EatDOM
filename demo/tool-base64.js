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
					v.toolBase64.decodedText = event.target.value;
					v.toolBase64.encodedText = atob(v.toolBase64.decodedText);
					v.toolBase64.target.html.refresh();
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
			c.t(c => v.toolBase64.encodedText);
			c.setPostRenderHook(node => {
				node.addEventListener("input", event => {
					v.toolBase64.encodedText = event.target.value;
					v.toolBase64.decodedText = btoa(v.toolBase64.encodedText);
					v.toolBase64.target.decoded.refresh();
				});
			});
		});
	});
}