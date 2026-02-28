import { EatDOM } from "./eatdom.js";
import { menu } from "./menu.js";
import { top } from "./top.js";
import { tutorial } from "./tutorial.js";
import { reference } from "./reference.js";
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
