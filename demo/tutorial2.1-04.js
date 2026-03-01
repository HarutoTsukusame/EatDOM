function createElement(tagName, attr, ...children) {
	const element = document.createElement(tagName);
	for (const key in attr) {
		element.setAttribute(key, attr[key]);
	}
	element.append(...children);
	return element
}
function main() {
	const root = document.getElementById("root");
	root.append(
		createElement("h1", { id: "eatdom" },
			"EatDOM"
		),
		createElement("section", null,
			createElement("p", null,
				"Hello, World!"
			)
		)
	)
}
main();
