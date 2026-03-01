import { EatDOM } from "./eatdom.js";
function main() {
	const root = EatDOM.rootNode(root => {
		root.a(`id`, id => {
			id.t(text => `root`);
		});

		root.e(`h1`, h1 => {
			h1.t(text => `EatDOM`);
		});
		root.e(`section`, section => {
			section.a(`class`, classAttr => {
				classAttr.t(text => `sample`);
			});
			section.e(`p`, p => {
				p.t(text => `Hello, World!`);
			});
		});
	});
	root.mount(document.getElementById("root"));
	root.refresh();
}
main();
