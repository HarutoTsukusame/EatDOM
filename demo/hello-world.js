import { EatDOM } from "./eatdom.js";
function main() {
	const c = EatDOM.rootNode(c => {
		c.a(`id`, c => { c.t(c => `root`); });
		
		c.e(`h1`, c => { c.t(c => `EatDOM`); });
		c.e(`section`, c => {
			c.e(`p`, c => { c.t(c => `Hello, World!`); });
		});
	});
	c.mount(document.getElementById("root"));
	c.refresh();
}
main();