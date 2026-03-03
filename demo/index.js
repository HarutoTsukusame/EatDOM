import { EatDOM } from "./eatdom.js";
import { top } from "./top.js";
import { menu } from "./menu.js";
import { tutorial } from "./tutorial.js";
import { lifeGame } from "./demo-lifegame.js";
import { reference } from "./reference.js";
import { toolMd2Html } from "./tool-md2html.js";
import { toolHtml2Eatdom } from "./tool-html2eatdom.js";
import { toolBase64 } from "./tool-base64.js";
import { update } from "./update.js";
import { error404 } from "./404.js";

function main() {

	const v = {};

	v.count = 1;
	const href = location.search;
	if (href) {
		v.pageName = href.match(/^\?+(.*)$/)[1];
	} else {
		v.pageName = "";
	}
	v.target = {};
	v.resources = {};

	setupSpaHandler(v);

	const c = EatDOM.rootNode(c => {
		c.e(`a`, c => {
			c.a(`href`, c => {
				c.t(c => import.meta.url);
			});
			c.t(c => `[${import.meta.url.split("/").splice(-1)}]`);
		});
		c.a(`id`, c => {
			c.t(c => `root`);
		});

		menu(c, v);

		c.e(`section`, c => {
			v.target.mainContents = c;
			if (v.pageName == "") {
				top(c, v);
			} else if (v.pageName == "update") {
				update(c, v);
			} else if (v.pageName == "tutorial") {
				tutorial(c, v);
			} else if (v.pageName == "demo-lifegame") {
				lifeGame(c, v);
			} else if (v.pageName == "reference") {
				reference(c, v);
			} else if (v.pageName == "tool-md2html") {
				toolMd2Html(c, v);
			} else if (v.pageName == "tool-html2eatdom") {
				toolHtml2Eatdom(c, v);
			} else if (v.pageName == "tool-base64") {
				toolBase64(c, v);
			} else {
				error404(c, v);
			}
		});

		menu(c, v);
	});
	c.mount(document.getElementById("root"));
	c.refresh();
}
function setupSpaHandler(v) {
	window.addEventListener("popstate", event => {
		const href = location.search;
		if (href) {
			v.pageName = href.match(/^\?+(.*)$/)[1];
		} else {
			v.pageName = "";
		}
		v.target.mainContents.refresh();
	});
	document.addEventListener("click", event => {
		if (event.button !== 0 || event.ctrlKey || event.shiftKey || event.metaKey || event.altKey) {
			return;
		} else {
			let target = event.target;
			if (!(target instanceof Element)) {
				target = target.parentElement;
			}
			const a = target.closest('A');
			if (a) {
				const href = a.getAttribute('href');
				if (href && href.startsWith("?")) {
					event.preventDefault(); // デフォルトのリンク動作を防ぐ
					const pageName = href.replace(/^\?+/, '');
					v.pageName = pageName;
					v.target.mainContents.refresh();
					window.history.pushState(null, '', href);
					window.scrollTo(0, 0);
				}
			}
		}
	});
}
main();