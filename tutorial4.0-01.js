import { EatDOM } from "./eatdom.js";
function main() {
	const v = {};
	v.response = "（まだ何も入力されていません）";

	const c = EatDOM.rootNode(c => {
		c.a(`id`, c => {
			c.t(c => `root`);
		});

		c.e(`h1`, c => {
			c.t(c => `EatDOM`);
		});
		c.e(`section`, c => {
			c.e(`p`, c => {
				v.target = c; // この行の位置を変更しただけ
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
						v.response = document.getElementById("input-text").value;
						v.target.refresh();
					});
				});
			});
		});
	});
	c.mount(document.getElementById("root"));
	c.refresh();
}
main();
