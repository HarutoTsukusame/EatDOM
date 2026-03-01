import { EatDOM } from "./eatdom.js";
function main() {
	const c = EatDOM.rootNode(c => {
		c.a(`id`, c => {
			c.t(c => `root`);
		});

		c.e(`h1`, c => {
			c.t(c => `EatDOM`);
		});
		c.e(`section`, c => {
			c.e(`table`, c => {
				c.e(`thead`, c => {
					c.e(`tr`, c => {
						for (let j = 0; j < 5; j++) {
							c.e(`th`, c => {
								c.t(c => `th${j}`);
							});
						}
					});
				});
				c.e(`tbody`, c => {
					for (let i = 0; i < 5; i++) {
						c.e(`tr`, c => {
							for (let j = 0; j < 5; j++) {
								c.e(`td`, c => {
									if ((i + j) % 2 == 0) {
										c.e(`b`, c => {
											c.t(c => `td${i}, ${j}`);
										});
									} else {
										c.e(`i`, c => {
											c.t(c => `td${i}, ${j}`);
										});
									}
								});
							}
						});
					}
				});
			});
		});
	});
	c.mount(document.getElementById("root"));
	c.refresh();
}
main();
