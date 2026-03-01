import { EatDOM } from "./eatdom.js";
function main() {
	const v = {};
	v.response = Date.now();

	const c = EatDOM.rootNode(c => {
		c.a(`id`, c => {
			c.t(c => `root`);
		});

		c.e(`h1`, c => {
			c.t(c => `EatDOM`);
		});
		c.e(`section`, c => {
			c.e(`p`, c => {
				if (v.response % 2 == 0) {
					c.e(`b`, c => {
						c.t(c => v.response);
					});
				} else {
					c.e(`i`, c => {
						c.t(c => v.response);
					});
				}
			});
		});
	});
	c.mount(document.getElementById("root"));
	c.refresh();
}
main();
