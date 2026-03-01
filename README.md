# EatDOM

Hello, EatDOM World! ようこそEatDOMの世界へ。

EatDOMは、JSだけでHTMLライクに記述できる超軽量DOMビルダーです。

しかしただのDOMビルダーではありません。
DOMを部品化して使い回したり、構築したDOMを部分的に更新することもできてしまう優れモノです。

## 取り急ぎ簡単な使い方

1. [EatDOM本体をダウンロード](https://harutotsukusame.github.io/EatDOM/eatdom.js)します。
2. JavaScriptファイルに`import { EatDOM } from "./eatdom.js";`と書いてインポートします。
3. `c.e(``h1``, c => { ... });`、`c.a(``class``, c => { ... });`、`c.t(c => string);`などとして使います。
4. 以上。

## 詳しく

もっと詳しく知りたい方は[こちら](https://harutotsukusame.github.io/EatDOM/)。
