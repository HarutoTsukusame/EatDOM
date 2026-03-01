import { EatDOM } from "./eatdom.js";
function menu(c, v) {
	const pageNames = ["トップページ", "チュートリアル", "リファレンス"];

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
}
function top(c, v) {
	c.e(`h1`, c => {
		c.t(c => `トップページ`);
	});
	c.e(`section`, c => {
		c.e(`p`, c => {
			c.t(c => `これはトップページです。`);
		});
	});
}
function tutorial(c, v) {
	c.e(`h1`, c => {
		c.t(c => `チュートリアル`);
	});
	c.e(`section`, c => {
		c.e(`p`, c => {
			c.t(c => `ここはチュートリアルです。`);
		});
	});
}
function reference(c, v) {
	c.e(`h1`, c => {
		c.t(c => `リファレンス`);
	});
	c.e(`section`, c => {
		c.e(`p`, c => {
			c.t(c => `ここはリファレンスです。`);
		});
	});
}
function main() {
	const v = {};
	const url = new URL(location.href);
	v.pageName = url.searchParams.get("page-name");

	const c = EatDOM.rootNode(c => {
		c.a(`id`, c => {
			c.t(c => `root`);
		});

		menu(c, v);

		c.e(`div`, c => {
			v.target = c;
			if (!v.pageName || v.pageName == "トップページ") {
				top(c, v);
			} else if (v.pageName == "チュートリアル") {
				tutorial(c, v);
			} else if (v.pageName == "リファレンス") {
				reference(c, v);
			}
		});
	});
	c.mount(document.getElementById("root"));
	c.refresh();
}
main();
