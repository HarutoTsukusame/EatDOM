import { EatDOM } from "./eatdom.js";
function main() {
	const root = EatDOM.rootNode(root => {
		root.a(`id`, id => {
			id.t(text => `root`);
		});

		root.e(`div`, div => {
			div.a(`class`, classAttr => {
				classAttr.t(text => `style`);
			});
			div.e(`h1`, h1 => {
				h1.a(`class`, classAttr => {
					classAttr.t(text => `sample`);
				});
				h1.t(text => `EatDOM`);
			});
			div.e(`section`, section => {
				section.e(`p`, p => {
					p.t(text => `Hello, World!`);
				});
			});
		});
	});
	root.mount(document.getElementById("root"));
	root.refresh();
}
main();
