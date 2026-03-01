// EatDOMライブラリファイルの読み込み
import { EatDOM } from "./eatdom.js";
// main関数の宣言
function main() {
	console.log("tutorial1.0-01.js");
	// ルートノードの生成
	const c = EatDOM.rootNode(c => {
		// ここにEatDOMツリーを構築
	});
	// ルートノードを#rootにマウント
	c.mount(document.getElementById("root"));
	// EatDOMツリーをブラウザに反映
	c.refresh();
}
// main関数の実行
main();
