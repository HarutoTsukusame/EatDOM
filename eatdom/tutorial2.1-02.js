function main() {
	const root = document.getElementById("root");
	const h1 = document.createElement("h1");
	h1.id = "eatdom";
	h1.append("EatDOM");
	const p = document.createElement("p");
	p.append("Hello, World!");
	const section = document.createElement("section");
	section.append(p);
	
	root.append(h1, section);
}
main();
