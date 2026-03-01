import { EatDOM } from "./eatdom.js";
function main() {
	const c = EatDOM.rootNode(c => {
		c.t(`Hello, World!`);
	});
	c.mount(document.getElementById("root"));
	c.refresh();
}
main();
