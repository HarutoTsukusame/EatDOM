// reference.js（改稿案）
import { generateToc } from "./utility-generate-toc.js";
export function reference(c, v) {
	// ----------------------------
	// イントロ
	// ----------------------------
	c.e(`h1`, c => {
		c.t(c => `EatDOMリファレンス`);
	});

	c.e(`p`, c => {
		c.t(c => `EatDOMに実装されているメソッドのリファレンスです。`);
	});

	c.e(`p`, c => {
		c.t(c => `EatDOMは「仮想ツリー（EatDOMツリー）を構築し、必要に応じて実DOMへ展開する」ための軽量DOMビルダーです。`);
	});

	c.e(`div`, c => {
		v.target.toc = c;
	});

	c.e(`section`, c => {
		c.e(`h2`, c => {
			c.a(`id`, c => {
				c.t(c => `basicIdea`);
			});
			c.t(c => `基本概念`);
		});

		c.e(`p`, c => {
			c.t(c => `このページでは、メソッド呼び出し中の this（= c）が指している EatDOM インスタンスのことを、便宜的に「カレントノード」と呼びます。`);
		});

		c.e(`p`, c => {
			c.t(c => `c.e(...) で要素ノード、c.a(...) で属性ノード、c.t(...) でテキスト（文字列）を「カレントノード」に追加していきます。`);
		});
	});

	// ----------------------------
	// クイックスタート（最小例）
	// ----------------------------
	c.e(`section`, c => {
		c.e(`h2`, c => {
			c.a(`id`, c => {
				c.t(c => `minimalExample`);
			});
			c.t(c => `最小例`);
		});

		c.e(`p`, c => {
			c.t(c => `まずは全体像です。rootNodeでツリーを作り、mountした後にrefreshすると実DOMに反映されます。`);
		});

		codeBlock(c, [
			`const root = EatDOM.rootNode(c => {`,
			`	c.e('div', c => {`,
			`		c.a('class', c => c.t(c => 'hello'));`,
			`		c.t(c => 'Hello EatDOM');`,
			`	});`,
			`});`,
			`root.mount(document.getElementById('app'));`,
			`root.refresh();`,
		]);
	});

	// ----------------------------
	// 基本メソッド（ビルド系）
	// ----------------------------
	c.e(`section`, c => {
		c.e(`h2`, c => {
			c.a(`id`, c => {
				c.t(c => `basicMethods`);
			});
			c.t(c => `基本メソッド（ビルド）`);
		});

		// e
		c.e(`section`, c => {
			c.e(`h3`, c => {
				c.a(`id`, c => {
					c.t(c => `e`);
				});
				c.t(c => `e(name, builder)`);
			});

			c.e(`p`, c => {
				c.t(c => `要素（Element）ノードを作成し、カレントノードの子要素リストに追加します。`);
			});

			c.e(`p`, c => {
				c.t(c => `builder は「この要素の中身をどう作るか」を表す関数で、refresh時の再生成にも使われます。`);
			});

			c.e(`dl`, c => {
				c.e(`dt`, c => {
					c.t(c => `引数`);
				});
				c.e(`dd`, c => {
					c.t(c => `name（タグ名）`);
				});
				c.e(`dd`, c => {
					c.t(c => `builder（子要素/属性を追加する関数）`);
				});
				c.e(`dt`, c => {
					c.t(c => `戻り値`);
				});
				c.e(`dd`, c => {
					c.t(c => `なし`);
				});
			});

			codeBlock(c, [
				`c.e(name, c => {`,
				`	// ここで c.a / c.t / c.e を呼んで子を組み立てる`,
				`});`,
			]);

			c.e(`p`, c => {
				c.t(c => `※ eで作られた子要素ノードには再生成用のコールバックが登録されます（refreshVirtualNodeで利用）。`);
			});
		});

		// a
		c.e(`section`, c => {
			c.e(`h3`, c => {
				c.a(`id`, c => {
					c.t(c => `a`);
				});
				c.t(c => `a(name, builder)`)
			});

			c.e(`p`, c => {
				c.t(c => `属性（Attribute）ノードを作成し、カレントノードの属性リストに追加します。`);
			});

			c.e(`p`, c => {
				c.t(c => `属性値は builder 内で c.t(c => '...') のように文字列を追加して作ります（複数回 t を呼べば結合されます）。`);
			});

			c.e(`dl`, c => {
				c.e(`dt`, c => {
					c.t(c => `引数`);
				});
				c.e(`dd`, c => {
					c.t(c => `name（属性名）`);
				});
				c.e(`dd`, c => {
					c.t(c => `builder（属性値を作る関数）`);
				});
				c.e(`dt`, c => {
					c.t(c => `戻り値`);
				});
				c.e(`dd`, c => {
					c.t(c => `なし`);
				});
			});

			codeBlock(c, [
				`c.a(name, c => {`,
				`	c.t(c => 'value');`,
				`});`,
			]);
		});

		// t
		c.e(`section`, c => {
			c.e(`h3`, c => {
				c.a(`id`, c => {
					c.t(c => `t`);
				});
				c.t(c => `t(textFn)`);
			});

			c.e(`p`, c => {
				c.t(c => `テキスト（文字列）を「関数」として登録し、カレントノードの子要素リストに追加します。`);
			});

			c.e(`p`, c => {
				c.t(c => `refresh時はこの textFn が再実行され、最新の文字列が反映されます。`);
			});

			c.e(`dl`, c => {
				c.e(`dt`, c => {
					c.t(c => `引数`);
				});
				c.e(`dd`, c => {
					c.t(c => `textFn（文字列を返す関数）`);
				});
				c.e(`dt`, c => {
					c.t(c => `戻り値`);
				});
				c.e(`dd`, c => {
					c.t(c => `なし`);
				});
			});

			codeBlock(c, [
				`c.t(c => 'text');`,
			]);
		});
	});

	// ----------------------------
	// 表示・更新（ライフサイクル）
	// ----------------------------
	c.e(`section`, c => {
		c.e(`h2`, c => {
			c.a(`id`, c => {
				c.t(c => `lifeCycle`);
			});
			c.t(c => `表示・更新（ライフサイクル）`);
		});

		// rootNode
		c.e(`section`, c => {
			c.e(`h3`, c => {
				c.a(`id`, c => {
					c.t(c => `rootNode`);
				});
				c.t(c => `EatDOM.rootNode(builder)`);
			});

			c.e(`p`, c => {
				c.t(c => `EatDOMツリーのルートノードを作成する静的メソッドです。`);
			});

			c.e(`dl`, c => {
				c.e(`dt`, c => {
					c.t(c => `引数`);
				});
				c.e(`dd`, c => {
					c.t(c => `builder（ルートの中身を組み立てる関数）`);
				});
				c.e(`dt`, c => {
					c.t(c => `戻り値`);
				});
				c.e(`dd`, c => {
					c.t(c => `EatDOM`);
				});
			});

			codeBlock(c, [
				`const root = EatDOM.rootNode(c => {`,
				`	c.e('div', c => {`,
				`		c.t(c => 'Hello');`,
				`	});`,
				`});`,
			]);
		});

		// mount
		c.e(`section`, c => {
			c.e(`h3`, c => {
				c.a(`id`, c => {
					c.t(c => `mount`);
				});
				c.t(c => `mount(node)`);
			});

			c.e(`p`, c => {
				c.t(c => `EatDOMツリーを展開する「実DOMの起点（Element）」をこのノードに関連付けます。`);
			});

			c.e(`dl`, c => {
				c.e(`dt`, c => {
					c.t(c => `引数`);
				});
				c.e(`dd`, c => {
					c.t(c => `node（実DOMのElement。通常は document.getElementById(...) の戻りなど）`);
				});
				c.e(`dt`, c => {
					c.t(c => `戻り値`);
				});
				c.e(`dd`, c => {
					c.t(c => `なし`);
				});
			});

			codeBlock(c, [
				`c.mount(document.getElementById('app'));`,
			]);
		});

		// refresh
		c.e(`section`, c => {
			c.e(`h3`, c => {
				c.a(`id`, c => {
					c.t(c => `refresh`);
				});
				c.t(c => `refresh()`);
			});

			c.e(`p`, c => {
				c.t(c => `仮想ツリーを再生成し、mount済みであれば実DOMへ反映します。`);
			});

			c.e(`dl`, c => {
				c.e(`dt`, c => {
					c.t(c => `引数`);
				});
				c.e(`dd`, c => {
					c.t(c => `なし`);
				});
				c.e(`dt`, c => {
					c.t(c => `戻り値`);
				});
				c.e(`dd`, c => {
					c.t(c => `なし`);
				});
			});

			codeBlock(c, [
				`c.refresh();`,
			]);

			c.e(`p`, c => {
				c.t(c => `内部的には refreshVirtualNode() → refreshRealNode() の順で呼び出されます。`);
			});
		});
	});

	// ----------------------------
	// フック（レンダリング前後）
	// ----------------------------
	c.e(`section`, c => {
		c.e(`h2`, c => {
			c.a(`id`, c => {
				c.t(c => `hooks`);
			});
			c.t(c => `フック（レンダリング前後）`);
		});

		// setPreRenderHook
		c.e(`section`, c => {
			c.e(`h3`, c => {
				c.a(`id`, c => {
					c.t(c => `setPreRenderHook`);
				});
				c.t(c => `setPreRenderHook(fn)`);
			});

			c.e(`p`, c => {
				c.t(c => `実DOMへ子要素を生成する前（属性適用後）に呼ばれるフックを設定します。`);
			});

			c.e(`dl`, c => {
				c.e(`dt`, c => {
					c.t(c => `引数`);
				});
				c.e(`dd`, c => {
					c.t(c => `fn(node)（実DOM要素を受け取る関数）`);
				});
				c.e(`dt`, c => {
					c.t(c => `戻り値`);
				});
				c.e(`dd`, c => {
					c.t(c => `なし`);
				});
			});

			codeBlock(c, [
				`c.setPreRenderHook(node => {`,
				`	// node は実DOMのElement`,
				`});`,
			]);
		});

		// setPostRenderHook
		c.e(`section`, c => {
			c.e(`h3`, c => {
				c.a(`id`, c => {
					c.t(c => `setPostRenderHook`);
				});
				c.t(c => `setPostRenderHook(fn)`);
			});

			c.e(`p`, c => {
				c.t(c => `実DOMへ子要素を生成した後に呼ばれるフックを設定します。`);
			});

			c.e(`dl`, c => {
				c.e(`dt`, c => {
					c.t(c => `引数`);
				});
				c.e(`dd`, c => {
					c.t(c => `fn(node)（実DOM要素を受け取る関数）`);
				});
				c.e(`dt`, c => {
					c.t(c => `戻り値`);
				});
				c.e(`dd`, c => {
					c.t(c => `なし`);
				});
			});

			codeBlock(c, [
				`c.setPostRenderHook(node => {`,
				`	// node は実DOMのElement`,
				`});`,
			]);
		});

		c.e(`p`, c => {
			c.t(c => `※ refreshVirtualNode() を呼ぶとフックは初期化され、builder の中で再設定されます。`);
		});
	});

	// ----------------------------
	// 文字列化 / 抽出
	// ----------------------------
	c.e(`section`, c => {
		c.e(`h2`, c => {
			c.a(`id`, c => {
				c.t(c => `stringify`);
			});
			c.t(c => `文字列化 / 抽出`);
		});

		// innerXml
		c.e(`section`, c => {
			c.e(`h3`, c => {
				c.a(`id`, c => {
					c.t(c => `innerXml`);
				});
				c.t(c => `innerXml()`);
			});

			c.e(`p`, c => {
				c.t(c => `EatDOMツリーをもとにXML文字列（innerXML相当）を生成して返します。`);
			});

			c.e(`dl`, c => {
				c.e(`dt`, c => {
					c.t(c => `引数`);
				});
				c.e(`dd`, c => {
					c.t(c => `なし`);
				});
				c.e(`dt`, c => {
					c.t(c => `戻り値`);
				});
				c.e(`dd`, c => {
					c.t(c => `string`);
				});
				c.e(`dt`, c => {
					c.t(c => `備考`);
				});
				c.e(`dd`, c => {
					c.t(c => `mountしていなくても実行できます。`);
				});
			});

			codeBlock(c, [
				`const xml = c.innerXml();`,
			]);
		});

		// innerHtml
		c.e(`section`, c => {
			c.e(`h3`, c => {
				c.a(`id`, c => {
					c.t(c => `innerHtml`);
				});
				c.t(c => `innerHtml()`);
			});

			c.e(`p`, c => {
				c.t(c => `EatDOMツリーをもとにHTML文字列（innerHTML相当）を生成して返します。`);
			});

			c.e(`dl`, c => {
				c.e(`dt`, c => {
					c.t(c => `引数`);
				});
				c.e(`dd`, c => {
					c.t(c => `なし`);
				});
				c.e(`dt`, c => {
					c.t(c => `戻り値`);
				});
				c.e(`dd`, c => {
					c.t(c => `string`);
				});
				c.e(`dt`, c => {
					c.t(c => `備考`);
				});
				c.e(`dd`, c => {
					c.t(c => `mountしていなくても実行できます。`);
				});
			});

			codeBlock(c, [
				`const html = c.innerHtml();`,
			]);
		});

		// extractTextNodes
		c.e(`section`, c => {
			c.e(`h3`, c => {
				c.a(`id`, c => {
					c.t(c => `extractTextNodes`);
				});
				c.t(c => `extractTextNodes()`);
			});

			c.e(`p`, c => {
				c.t(c => `EatDOMツリー内のテキスト（tで登録された文字列）だけを配列として抽出して返します。`);
			});

			c.e(`dl`, c => {
				c.e(`dt`, c => {
					c.t(c => `引数`);
				});
				c.e(`dd`, c => {
					c.t(c => `なし`);
				});
				c.e(`dt`, c => {
					c.t(c => `戻り値`);
				});
				c.e(`dd`, c => {
					c.t(c => `string[]`);
				});
				c.e(`dt`, c => {
					c.t(c => `備考`);
				});
				c.e(`dd`, c => {
					c.t(c => `mountしていなくても実行できます。`);
				});
			});

			codeBlock(c, [
				`const texts = c.extractTextNodes();`,
			]);
		});

		// extractTextContents
		c.e(`section`, c => {
			c.e(`h3`, c => {
				c.a(`id`, c => {
					c.t(c => `extractTextContents`);
				});
				c.t(c => `extractTextContents()`);
			});

			c.e(`p`, c => {
				c.t(c => `extractTextNodes() の結果を結合し、1つの文字列として返します。`);
			});

			c.e(`dl`, c => {
				c.e(`dt`, c => {
					c.t(c => `引数`);
				});
				c.e(`dd`, c => {
					c.t(c => `なし`);
				});
				c.e(`dt`, c => {
					c.t(c => `戻り値`);
				});
				c.e(`dd`, c => {
					c.t(c => `string`);
				});
				c.e(`dt`, c => {
					c.t(c => `備考`);
				});
				c.e(`dd`, c => {
					c.t(c => `mountしていなくても実行できます。`);
				});
			});

			codeBlock(c, [
				`const text = c.extractTextContents();`,
			]);
		});
	});

	// ----------------------------
	// 内部メソッド（通常は呼ばない）
	// ----------------------------
	c.e(`section`, c => {
		c.e(`h2`, c => {
			c.a(`id`, c => {
				c.t(c => `innerMethods`);
			});
			c.t(c => `内部メソッド（通常は呼びません）`);
		});

		c.e(`p`, c => {
			c.t(c => `以下は主に refresh() の内部で使われるメソッドです。`);
			c.t(c => `挙動理解・デバッグ用途として掲載します。通常の利用では refresh() を呼べば十分です。`);
		});

		// refreshVirtualNode
		c.e(`section`, c => {
			c.e(`h3`, c => {
				c.a(`id`, c => {
					c.t(c => `refreshVirtualNode`);
				});
				c.t(c => `refreshVirtualNode()`);
			});

			c.e(`p`, c => {
				c.t(c => `このノードを起点に、子要素リスト・属性リスト・フックを初期化し、登録済みのbuilder（コールバック）で再構築します。`);
			});

			c.e(`dl`, c => {
				c.e(`dt`, c => {
					c.t(c => `引数`);
				});
				c.e(`dd`, c => {
					c.t(c => `なし`);
				});
				c.e(`dt`, c => {
					c.t(c => `戻り値`);
				});
				c.e(`dd`, c => {
					c.t(c => `なし`);
				});
			});

			codeBlock(c, [
				`c.refreshVirtualNode();`,
			]);
		});

		// refreshRealNode
		c.e(`section`, c => {
			c.e(`h3`, c => {
				c.a(`id`, c => {
					c.t(c => `refreshRealNode`);
				});
				c.t(c => `refreshRealNode()`);
			});

			c.e(`p`, c => {
				c.t(c => `mount済みの実DOMノードを起点に、EatDOMツリーを実DOMへ展開（レンダリング）し、差し替えます。`);
			});

			c.e(`dl`, c => {
				c.e(`dt`, c => {
					c.t(c => `引数`);
				});
				c.e(`dd`, c => {
					c.t(c => `なし`);
				});
				c.e(`dt`, c => {
					c.t(c => `戻り値`);
				});
				c.e(`dd`, c => {
					c.t(c => `なし`);
				});
				c.e(`dt`, c => {
					c.t(c => `備考`);
				});
				c.e(`dd`, c => {
					c.t(c => `一度もmountしていない場合は何も起こりません。`);
				});
			});

			codeBlock(c, [
				`c.refreshRealNode();`,
			]);
		});

		// renderNode
		c.e(`section`, c => {
			c.e(`h3`, c => {
				c.a(`id`, c => {
					c.t(c => `renderNode`);
				});
				c.t(c => `renderNode(node)`);
			});

			c.e(`p`, c => {
				c.t(c => `nodeに対し、属性を設定し、子要素を再帰的に生成します。`);
			});

			c.e(`dl`, c => {
				c.e(`dt`, c => {
					c.t(c => `引数`);
				});
				c.e(`dd`, c => {
					c.t(c => `node（実DOMのElement）`);
				});
				c.e(`dt`, c => {
					c.t(c => `戻り値`);
				});
				c.e(`dd`, c => {
					c.t(c => `なし`);
				});
			});

			codeBlock(c, [
				`c.renderNode(node);`,
			]);

			c.e(`p`, c => {
				c.t(c => `原則として refreshRealNode() の内部で呼び出されます。`);
			});
		});
	});
	generateToc(c, v.target.toc);
}

// --------------------------------------------------
// small helpers
// --------------------------------------------------
function codeBlock(c, lines) {
	c.e(`ol`, c => {
		c.a(`class`, c => c.t(c => `code`));
		lines.forEach(line => {
			c.e(`li`, c => c.t(c => line));
		});
	});
}
