export function eatdomPrimeElement(c, n, f) { f(c.appendChild(document.createElement(n))); }
export function eatdomPrimeAttribute(c, n, v) { c.setAttribute(n, v); }
export function eatdomPrimeText(c, t) { c.appendChild(document.createTextNode(t)); }

export class EatDOM {
	static VOID_ELEMENTS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

	constructor(name) {
		this.name = name;
		this.attributes = []; // EatDOMインスタンスの配列
		this.elements = [];   // EatDOMインスタンス と string の混在配列
		this.callback = null;  // 再生成用コールバック
		this.preRenderHook = () => { };
		this.postRenderHook = () => { };
		this.node = null;
	}
	static rootNode(f) {
		const c = new EatDOM("#Fragment");
		c.callback = () => f(c);
		f(c);
		return c;
	}
	e(name, f) {
		const c = new EatDOM(name);
		c.callback = () => f(c);
		this.elements.push(c);
		f(c);
	}
	a(name, f) {
		const c = new EatDOM(name);
		this.attributes.push(c);
		f(c);
	}
	t(f) {
		this.elements.push(f);
	}
	setPreRenderHook(f) {
		this.preRenderHook = f;
	}
	setPostRenderHook(f) {
		this.postRenderHook = f;
	}
	mount(node) {
		this.node = node;
	}
	refreshVirtualNode() {
		this.elements = [];
		this.attributes = [];
		this.preRenderHook = () => { };
		this.postRenderHook = () => { };
		this.callback();
	}
	refreshRealNode() {
		if (this.node) {
			// 物理的な入れ替え先を用意（名前を引き継ぐ）
			const node = document.createElement(this.node.nodeName);
			// renderNode時に古いノードへの参照が上書きされるためoldNodeに参照を保存
			const oldNode = this.node;

			// --- 新しい物理構造を renderNode ---
			this.renderNode(node);

			// --- 物理ノードの差し替え ---
			oldNode.replaceWith(node);
		}
	}
	renderNode(node) {
		this.mount(node);

		// 1. 属性の生成
		this.attributes.forEach(attr => {
			const key = attr.name;
			const value = attr.extractTextContents();
			eatdomPrimeAttribute(node, key, value);
		});

		this.preRenderHook(node);

		// 2. 子要素の生成
		this.elements.forEach(item => {
			if (item instanceof EatDOM) {
				// e を使い、生成された物理ノードを子の render に渡す
				eatdomPrimeElement(node, item.name, c => {
					item.renderNode(c);
				});
			} else {
				eatdomPrimeText(node, item());
			}
		});

		this.postRenderHook(node);
	}
	refresh() {
		this.refreshVirtualNode();
		this.refreshRealNode();
	}
	innerHtml() { return this.innerXml(true); }
	innerXml(htmlMode = false, inner = true) {
		const escapeAttrChars = {
			"<": "&lt;",
			">": "&gt;",
			"&": "&amp;",
			"\"": "&quot;",
			"'": "&#39;"
		};
		const escapeElementChars = {
			"<": "&lt;",
			">": "&gt;",
			"&": "&amp;"
		};
		// 内部的な再帰ヘルパー：文字列ならそのまま、EatDOMならtoXmlを呼ぶ
		function stringifyElement(item) {
			if (item instanceof EatDOM) {
				return item.innerXml(htmlMode, false);
			} else {
				return item().replace(/[<>&]/g, char => escapeElementChars[char]);
			}
		}

		// 1. 子要素の構築
		const elementsStr = this.elements.map(element => stringifyElement(element)).join("");

		// 2. 属性の構築（各属性ノードの elements を一括でシリアライズ）
		const attributesStr = this.attributes.map(attr => {
			const val = attr.extractTextContents().replace(/[<>&"']/g, char => escapeAttrChars[char]);
			return ` ${attr.name}="${val}"`;
		}).join("");

		// 3. タグの出力
		if (inner) {
			return elementsStr;
		} else if (elementsStr === "" && EatDOM.VOID_ELEMENTS.has(this.name.toLowerCase())) {
			return `<${this.name}${attributesStr}${htmlMode ? ">" : "/>"}`;
		} else {
			return `<${this.name}${attributesStr}>${elementsStr}</${this.name}>`;
		}
	}
	extractTextNodes() {
		return this.elements.flatMap(item => {
			if (item instanceof EatDOM) {
				return item.extractTextNodes();
			} else {
				return item();
			}
		});
	}
	extractTextContents() {
		return this.extractTextNodes().join("");
	}
}