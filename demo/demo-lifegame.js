// demo-lifegame.js
export function lifeGame(c, v) {
	c.e(`a`, c => {
		c.a(`href`, c => {
			c.t(c => import.meta.url);
		});
		c.t(c => `[${import.meta.url.split("/").splice(-1)}]`);
	});
	c.e(`h1`, c => {
		c.t(c => `EatDOMデモ：大量の子を持つノードのrefresh`);
	});

	if (!v.lifeGame) {
		v.lifeGame = {
			side: 100,
			buildMs: null,
			paintMs: null,
			history: [],
		};
	}
	const s = v.lifeGame;

	c.e(`p`, c => {
		c.t(c => `ここでは、EatDOMを用いたデモをご覧いただけます。`);
	});
	c.e(`p`, c => {
		c.t(c => `EatDOMは、指定したノード以下のサブツリーをまとめて再生成・最新化（refresh）する機能を持っています。`);
		c.t(c => `しかし、構造次第ではパフォーマンスが低下するという性質を持ちます。`);
	});
	c.e(`p`, c => {
		c.t(c => `このデモでは、EatDOMが苦手とする`);
		c.e(`b`, c => {
			c.t(c => `起点ノードの子に同質のノードを大量に持つ`);
		});
		c.t(c => `という条件下でのrefreshにどのくらいの時間がかかるのかを体験していただきます。`);
	});
	c.e(`p`, c => {
		c.t(c => `ページ下部のグリッド表示エリアに指定した数のノードを再生成するのにかかる時間を計測した結果が表示されます。`);
	});
	c.e(`section`, c => {
		c.e(`h2`, c => {
			c.t(c => `refreshデモ（n*nノード）`);
		});
		// ---- controls ----
		c.e(`form`, c => {
			c.a(`class`, c => c.t(() => `lifegame-controls`));

			c.e(`div`, c => {
				c.e(`label`, c => {
					v.target.lifeGameControls = c;
					c.t(() => `${s.side}×${s.side}＝${s.side * s.side}ノード`);
				});
			});
			c.e(`div`, c => {
				c.e(`input`, c => {
					c.a(`type`, c => c.t(() => `range`));
					c.a(`min`, c => c.t(() => `10`));
					c.a(`max`, c => c.t(() => `200`));
					c.a(`step`, c => c.t(() => `1`));
					c.a(`value`, c => c.t(() => String(s.side)));

					c.setPostRenderHook(node => {
						node.oninput = () => {
							s.side = Number(node.value);
							v.target.lifeGameControls.refresh();
						};
					});
				});
			});
			c.e(`div`, c => {
				c.a(`class`, c => c.t(() => `lifegame-buttons`));

				c.e(`button`, c => {
					c.a(`type`, c => c.t(() => `button`));
					c.t(() => `再生成`);

					c.setPostRenderHook(node => {
						node.onclick = () => {
							// 計測開始
							const start = performance.now();

							// ここで 10000ノード（または side^2）をフル再生成して差し替え
							v.target.lifeGameGrid.refresh();

							const afterRefresh = performance.now();
							s.buildMs = afterRefresh - start;

							// 次の描画フレームまで（体感に近い）
							requestAnimationFrame(() => {
								const afterPaint = performance.now();
								s.paintMs = afterPaint - start;

								// 履歴（直近10件）
								s.history.unshift({
									side: s.side,
									nodes: s.side * s.side,
									buildMs: s.buildMs,
									paintMs: s.paintMs,
									at: new Date().toLocaleTimeString(),
								});
								s.history = s.history.slice(0, 10);

								// 表示更新（grid はもう更新済みなので stats/history だけ）
								v.target.lifeGameHistory.refresh();
							});
						};
					});
				});

				c.e(`button`, c => {
					c.a(`type`, c => c.t(() => `button`));
					c.t(() => `履歴を消去する`);

					c.setPostRenderHook(node => {
						node.onclick = () => {
							s.history = [];
							v.target.lifeGameHistory.refresh();
						};
					});
				});
			});
		});

		// ---- history ----
		c.e(`section`, c => {
			c.a(`class`, c => c.t(() => `lifegame-history`));
			v.target.lifeGameHistory = c;

			c.e(`h3`, c => c.t(() => `履歴`));
			c.e(`section`, c => {
				c.e(`table`, c => {
					c.e(`thead`, c => {
						c.e(`tr`, c => {
							c.e(`th`, c => {
								c.t(c => `時刻`);
							});
							c.e(`th`, c => {
								c.t(c => `サイズ`);
							});
							c.e(`th`, c => {
								c.t(c => `DOM構築（ms）`);
							});
							c.e(`th`, c => {
								c.t(c => `描画準備完了（ms）`);
							});
						});
					});
					c.e(`tbody`, c => {
						s.history.forEach(h => {
							c.e(`tr`, c => {
								c.e(`td`, c => {
									c.t(c => h.at);
								});
								c.e(`td`, c => {
									c.t(c => `${h.side}×${h.side}＝${h.nodes}`);
								});
								c.e(`td`, c => {
									c.t(c => h.buildMs.toFixed(1));
								});
								c.e(`td`, c => {
									c.t(c => h.paintMs.toFixed(1));
								});
							});
						});
					});
				});
			});
		});

		// ---- grid (this is the heavy part) ----
		c.e(`section`, c => {
			c.e(`h3`, c => {
				c.t(c => `グリッド表示エリア`);
			});
			c.e(`div`, c => {
				c.a(`class`, c => c.t(() => `life-game`));
				c.setPreRenderHook(node => {
					node.style.gridTemplateRows = `repeat(${v.lifeGame.side}, 1fr)`;
					node.style.gridTemplateColumns = `repeat(${v.lifeGame.side}, 1fr)`;
				});
				v.target.lifeGameGrid = c;

				const side = s.side;
				for (let i = 0; i < side; i++) {
					for (let j = 0; j < side; j++) {
						c.e(`div`, c => {
							c.a(`class`, c => {
								c.t(() => (Math.random() < 0.5)
									? `life-game-cell-black`
									: `life-game-cell-white`
								);
							});
						});
					}
				}
			});
		});
	});
}
