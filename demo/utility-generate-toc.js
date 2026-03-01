import { EatDOM } from "./eatdom.js"
export function generateToc(c, target) {
	const heading = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);
	function pickupHeading(c) {
		if (c instanceof EatDOM) {
			if (heading.has(c.name)) {
				return [c, ...c.elements.flatMap(pickupHeading)];
			} else {
				return c.elements.flatMap(pickupHeading);
			}
		} else {
			return [];
		}
	}
	function tree(c, headingNodes, lastLevel = -1) {
		function headingLevel(node) {
			return Number(node.name.match(/h(\d+)/)[1]);
		}

		if (headingNodes.length > 0 && headingLevel(headingNodes[0]) > lastLevel) {
			const currentLevel = headingLevel(headingNodes[0]);
			c.e(`ul`, c => {
				while (headingNodes.length > 0 && headingLevel(headingNodes[0]) == currentLevel) {
					c.e(`li`, c => {
						c.e(`a`, c => {
							headingNodes[0].attributes.filter(attribute => attribute.name === `id`).forEach(attribute => {
								c.a(`href`, c => {
									c.t(c => `#${attribute.extractTextContents()}`);
								});
							});
							// headingNodes[0].extractTextContents()を変数に格納していったんprimitiveな値にすることで、refresh時にこの値を取り出すことができる。
							const text = headingNodes[0].extractTextContents();
							c.t(c => `${text}`);
							headingNodes.shift();
						});
						tree(c, headingNodes, currentLevel);
					});
				}
			});
		}
	}

	const headingNodes = pickupHeading(c);
	tree(target, headingNodes);
}
