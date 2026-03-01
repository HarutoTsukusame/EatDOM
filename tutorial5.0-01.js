import { EatDOM } from "./eatdom.js";
function main() {
	const v = {};
	const url = new URL(location.href);
	v.pageName = url.searchParams.get("page-name");

	const pageNames = ["トップページ", "チュートリアル", "リファレンス"];

	const c = EatDOM.rootNode(c => {
		c.a(`id`, c => {
			c.t(c => `root`);
		});

		c.e(`menu`, c => {
			pageNames.forEach(pageName => {
				c.e(`li`, c => {
					c.e(`button`, c => {
						c.t(c => pageName);
						c.setPostRenderHook(node => {
							node.addEventListener("click", event => {
								window.history.pushState(null, '', `?page-name=${pageName}`);
								const url = new URL(location.href);
								v.pageName = url.searchParams.get("page-name");
								v.target.refresh();
							});
						});
					});
				});
			});
		});

		c.e(`div`, c => {
			v.target = c;
			if (!v.pageName || v.pageName == "トップページ") {
				c.e(`h1`, c => {
					c.t(c => `トップページ`);
				});
				c.e(`section`, c => {
					c.e(`p`, c => {
						c.t(c => `これはトップページです。`);
					});
				});
			} else if (v.pageName == "チュートリアル") {
				c.e(`h1`, c => {
					c.t(c => `チュートリアル`);
				});
				c.e(`section`, c => {
					c.e(`p`, c => {
						c.t(c => `ここはチュートリアルです。`);
					});
				});
			} else if (v.pageName == "リファレンス") {
				c.e(`h1`, c => {
					c.t(c => `リファレンス`);
				});
				c.e(`section`, c => {
					c.e(`p`, c => {
						c.t(c => `ここはリファレンスです。`);
					});
				});
			}
		});
	});
	c.mount(document.getElementById("root"));
	c.refresh();
}
main();
