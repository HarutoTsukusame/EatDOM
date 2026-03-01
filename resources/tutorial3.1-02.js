import { EatDOM } from "./eatdom.js";
function main() {
	const v = {};
	v.response = "（まだ何も入力されていません）";

	const c = EatDOM.rootNode(c => {
		v.target = c;
		c.a(`id`, c => {
			c.t(c => `root`);
		});

		c.e(`h1`, c => {
			c.t(c => `EatDOM`);
		});
		c.e(`section`, c => {
			c.e(`p`, c => {
				c.t(c => v.response);
			});
			c.e(`input`, c => {
				c.a(`id`, c => {
					c.t(c => `input-text`);
				});
			});
			c.e(`button`, c => {
				c.t(c => `更新`);
				c.setPostRenderHook(node => {
					node.addEventListener("click", event => {
						// ここの順番を逆転させます
						v.target.refresh();
						v.response = document.getElementById("input-text").value;
					});
				});
			});
		});
	});
	c.mount(document.getElementById("root"));
	c.refresh();
}
main();
