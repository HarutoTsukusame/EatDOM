import { EatDOM } from "./eatdom.js";
function main() {
	const c = EatDOM.rootNode(c => {
		c.t(c => `Good morning, World!`);
	});
	c.mount(document.getElementById("root"));
	c.refresh();
}
main();
