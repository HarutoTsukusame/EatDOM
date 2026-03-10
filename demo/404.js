import { generateSourceLink } from "./utility-generate-source-link.js";

export function error404(c, v) {
	generateSourceLink(c, import.meta.url);
	c.e(`h1`, c => {
		c.t(c => `このページは存在しません`);
	});
	c.e(`p`, c => {
		c.t(c => `このページは存在しません。`);
		c.t(c => `メニューから存在するページを選んでリトライしてください。`);
	});
}