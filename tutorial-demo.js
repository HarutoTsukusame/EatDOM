import { EatDOM } from "./eatdom.js";

function main() {
	const v = {};

	const href = location.href.match(/\?+(.*)$/)[1];
	if (href) {
		v.pageName = href;
	} else {
		v.pageName = "";
	}
	v.target = {};
	v.resources = {};

	const c = EatDOM.rootNode(c => {
		c.e(`script`, c => {
			c.a(`src`, c => {
				c.t(c => v.pageName);
			});
			c.a(`type`, c => {
				c.t(c => `module`);
			});
		});
		c.e(`div`, c => {
			c.a(`id`, c => {
				c.t(c => `root`);
			});
		});
	});
	c.mount(document.body);
	c.refresh();
}
main();