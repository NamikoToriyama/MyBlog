# MyBlog
## About
- ブログを作成した。作成期間3日くらい
- 標準機能として,認証、記事の閲覧、作成、削除ができる
-  DBと認証機能はFirebaseを利用。基本的なコーディングはReact, デザインはMaterialUIを使って行った。

## 大変だったところ
- Reactでのコーディング。特にルーティング周りがうまくいかないことが多かった
- 認証部分がとても難しかった。参考のリンクをほぼ利用したが、利用した上でも組み合わせるのが大変だった。
- ローカルの環境とサーバをアップした時の環境で差異が

### 実行
ローカル環境での実行
```
$ yarn start
```

### ビルド
buildファイル作成
```
$ yarn build
```
ローカルでネットワークにあげた環境をみたいとき
```
$ yarn global add serve
$ serve -s build
```

### デプロイ
```
$ firebase deploy
```

## 参考リンク
なんだかんだ公式ドキュメントが最高だった。

### FirebaseとReactの接続
https://qiita.com/mikan3rd/items/0a1be8fa9f349735cf4a#pencil2-formjs-1

https://t-kojima.github.io/2018/08/13/0040-firebase-react-database/

https://qiita.com/gonta616/items/278a7e81a8b624d9621e

https://qiita.com/isamua/items/c50d3a09615285bceea0#2-firebase-project%E3%81%AE%E4%BD%9C%E6%88%90%E3%81%A8%E8%A8%AD%E5%AE%9A

## バグ関連
https://www.yoheim.net/blog.php?q=20180412

https://qiita.com/stakezaki/items/2beceb3cc8b5dd696a8f

[めちゃくちゃ役に立ったページ](https://qiita.com/stakezaki/items/2beceb3cc8b5dd696a8f)

[componentsの使い方がわかりやすかった](https://qiita.com/sekikawa_a/items/8ab70f457ef73871419f)

[フォームでバグらせた関係](https://qiita.com/koba04/items/40cc217ab925ef651113)

## サインイン機能
https://qiita.com/k-penguin-sato/items/6e892231922b360a8659#srcauthsignupjsx

https://qiita.com/zaburo/items/801bd288cec47bd28764

結局下のやつをほぼほぼ使った

https://maksimivanov.com/posts/firebase-react-tutorial/

## Redux使いたい

https://qiita.com/erukiti/items/e16aa13ad81d5938374e

Redux使っても値渡せるらしい

https://qiita.com/oda3104/items/de5489cd97ba674cbee5

## CSSデザイン・materialUIについて
https://sounansa.net/archives/647

http://www.ccalvert.net/books/CloudNotes/Assignments/React/ReactAddressMaterial.html

https://material-ui.com/ja/components/box/

https://v0.material-ui.com/#/components/card


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scriptsd

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
