---
title: プレインテキストは時代を超えてあなたの知的生産を支援する
description: 文書データ形式としてのプレインテキストと、Markdownというフォーマットのメリットについて。
thumbnail: /assets/blog/2013-12-24-markdown-is-plaintext/thumbnail.png
redirect_from: "/blog/markdown-is-plaintext/"
---

![nvALTの画面](/assets/blog/2013-12-24-markdown-is-plaintext/nvALT.jpg)

〔[ドキュメンテーション Advent Calendar 2013] のための文章です〕

## プレインテキストとは

「プレインテキスト」(plain text) をご存知でしょうか。

Windowsなら「メモ帳」(Notepad.exe) というアプリ。Macなら「テキストエディット」(TextEdit.app) というアプリで作るもの。ファイル名は「テキスト.txt」のように拡張子 `.txt` をとります。「あ、あれか」と思い当たる方も多いかもしれません。

「プレインテキスト」は「書式なしテキスト」(unformatted text ) とも呼ばれます。ここでいう「書式」は「スタイル」とも呼ばれます。比較のため「書式つきテキスト」(formatted text) をお見せしましょう：

- <span style="font-style: italic">イタリック（斜体）</span>
- <span style="color: red">色つき文字（※赤い色がついています）</span>
- <span style="font-size: larger">大きな文字</span>

こうした書式（スタイル）をもつのが「書式つきテキスト」です。それに対して、書式（スタイル）を持たない「プレイン」なテキストのことを「プレインテキスト」と呼びます。

味のついていないヨーグルトを「プレイン」と呼びますね。いわば「素材の味を活かしたテキスト」がプレインテキストです。


プレインテキストの歴史は古く、何十年も使われています。プレインテキストはアプリやOSに依存しない、**時代を超えるデータ形式**だと言えます。

<!--

To-do: ファイル・フォーマットと文字コードの話が混ざっているので修正が必要。

 ## プレインテキストの歴史

最も成功した最初の標準化は1960年の[ASCII (The American Standard Code for Information Interchange)] 規格にまで遡ります。

**50年前にできたASCIIと、今日世界中で使われているUTF-8には、互換性があります。**[^plainTextHistory]50年前に書かれたプレインテキストは、UTF-8とみなすことができます。ですから、今日のPCやスマートフォンでも利用可能です。

[^plainTextHistory]: 1960年に作られたASCII規格の延長に、現在世界中で使われている[UTF-8]規格があります。UTF-8は、ASCIIと互換性のある[Unicode]方式です。Unicodeは日本語の漢字・ひらがな・カタカナを含む世界中の文字を扱うために作られました。

-->

## プレインテキストは、どれほど遠い未来まで伝承できるか

では「プレインテキストは、どれほど遠い未来まで通用するか」も考えてみましょう。

50年後のデバイスは、PCやスマートフォンやタブレットとは異なる形でしょう。おそらくPCという形態も残るとは思いますが、異なる形態のデバイスも多様に使われているはずです。例えば腕時計型デバイス（スマートウォッチ）の画面にはたくさんのテキストを表示できませんから、表示する代わりに音声合成で読み上げることになるかもしれません。

そんな50年後のデバイスでも、間違いなく<!-- UTF-8 -->プレインテキストは利用できるはずです（直接利用できなくても、データ形式の変換手段は提供されるはずです）。HTMLもおそらく大丈夫。PDFは、HTMLには劣りますが、五分五分といったところ。マイクロソフトWord文書(.docx)は、微妙ですね。電子書籍の国際規格EPUBも、少し怪しい。アマゾンの電子書籍Kindleは、もっと怪しい。国産電子書籍リーダーの独自規格に至っては絶望的です。[^ebookWithdrawal]

[^ebookWithdrawal]: [楽天Raboo終了でユーザーの蔵書が失われる問題](http://allabout.co.jp/gm/gc/409493/)がありました。

デジタルデータは保全性（アーカイブ性）に難があると言われています[^digitalDilemma]が、プレインテキストは最も紙に近い保全性を持ちます。**おそらく50年後、100年後の未来の人にとっても、あなたが今日書いた<!-- UTF-8 -->プレインテキストは利用可能なのです。**

**プレインテキスト最強！！**だと言えるでしょう。

[^digitalDilemma]: 「情報をデジタルデータとして保存することが、長期的観点に立てばアナログな保存方法よりも非効率的でコストがかさむとする、ストレージに関するジレンマ」は[デジタルジレンマ]と名付けられています。

## 日々の仕事とプレインテキスト

ふだんの仕事についても考えてみましょう。文章（テキスト）はマイクロソフトWordやPDFなどの形式でも保存できます。では、プレインテキストで保存しておくことには、どういうメリットがあるのでしょうか：

- 10年前に作った文書が、PCのデスクトップ検索機能により一瞬で出てきます。
- すべてのアプリを横断して一括テキスト検索ができます。たくさんあるアプリ毎に検索操作をする必要はありません。
- 多くの場合、ファイルの変換処理が不要です。たいていのデバイスやアプリで、そのまま扱えます。

プレインテキストのこのような性質を**ポータビリティ**と呼びます。「携帯電話番号ポータビリティ」と同じで、「持ち運びやすさ」という意味です。データをあちこちに持ち運びやすいということです。アプリをまたいで、OSをまたいで、機器（デバイス）やネットワークをまたいで。時代を超えて。

**プレインテキスト最強！！**

## Markdownとは

プレインテキストの書き方（記法）として**Markdown**（マークダウン）があります。Markdownは、**文章の書き方**です。デジタル文書を活用する方法として考案されました。特徴は、

- 手軽に文章構造を明示できること
- 簡単で、覚えやすいこと
- 読み書きに特別なアプリを必要としないこと
- それでいて、対応アプリを使えば快適に読み書きできること

などです。詳しくは[Markdownとは]をご参照ください。

Markdownは簡単なので、覚えるというほどの苦労もありません：Markdownの代表的なルールには：

1. 段落は空行で、一行開ける
2. 引用は行頭に `> `
3. 箇条書きは行頭に `- `
4. 強調したい部分を `**` で囲む
5. リンクは `[]` でリンクしたい文字を囲って、その直後の `()` の中にURLを書く。例えば `[ヤフー](http://www.yahoo.co.jp/)` のように。

があります。最初の2つか3つについては、すでにメールの書き方としてふだんからお使いかもしれませんね。

例えば、次のように書くのがMarkdown記法です：

    Markdown（マークダウン）は、**文章の書き方**です。デジタル文書を活用する方法として考案されました。特徴は、

    - 手軽に文章構造を明示できること
    - 簡単で、覚えやすいこと
    - 読み書きに特別なアプリを必要としないこと
    - それでいて、対応アプリを使えば快適に読み書きできること

    などです。Markdownはジョン・グルーバー（John Gruber）によって2004年に開発され、最初は [Daring Fireball: Markdown](http://daringfireball.net/projects/markdown/) で公開されました。その後、多くの開発者の手を経ながら発展してきました。

これが次のように表示されます：

> Markdown（マークダウン）は、**文章の書き方**です。デジタル文書を活用する方法として考案されました。特徴は、
> 
> - 手軽に文章構造を明示できること
> - 簡単で、覚えやすいこと
> - 読み書きに特別なアプリを必要としないこと
> - それでいて、対応アプリを使えば快適に読み書きできること
> 
> などです。Markdownはジョン・グルーバー（John Gruber）によって2004年に開発され、最初は [Daring Fireball: Markdown](http://daringfireball.net/projects/markdown/) で公開されました。その後、多くの開発者の手を経ながら発展してきました。

HTMLのタグを覚えるのも書くのも大変ですが、これならラクですね。ウェブで公開する文章を書くときに、ぜひご活用ください。とくにブログを書くときに使う人が多いようです。あとはエンジニアの方ですね。

## 私のMarkdownライフ

私のMarkdownライフは、[EvernoteからNotational Velocityを経てnvALTへ]至りました。Evernoteに比べると爆速で快適です。キーをタイプする毎に絞り込む「インクリメンタル検索」で、数千のノートがあっても一瞬で検索できます。文字通り、瞬きする間に。**スピード命！**

nvALTの爆速っぷりをご覧あれ：

{% include vimeo_link.html video="82571826" %}

<small><a href="http://vimeo.com/82571826">ノートアプリnvALTは1753件のノートも一瞬で検索する</a> from <a href="http://vimeo.com/zerobase">Ishibashi Hideto</a> on <a href="https://vimeo.com">Vimeo</a>.</small>

データの保存方法（ストレージ）としては、当初Dropboxにテキストファイル(.md)を置いていたのですが、いまは[Simplenote]を使っています。Dropboxよりも同期が速くて素晴らしいです。ぜひいちど使ってみてください。

私は[EvernoteからMarkdownに移行するためのツールenml2mdを作りました（ただしNode.js/npmなので玄人向け）]。現状では敷居の高いツールですが、可能なら利用してみてください。Evernoteからノートをエクスポートして、nvALTに取り込んで、Simplenote同期を設定してみてください。

（要望がありそうなら、簡単に使えるウェブサービスにしますが、いまのところ不明です。使ってみたいという方は、ぜひ声を上げてください）

そんなわけで日々たくさんのノートをMarkdownで書いております。というよりも、「Markdown」と意識せずに自然にプレインテキストでノートを書いております。

## Markdownの未来

いずれは[Markdownという名前が消えて、名もなき正書法になる]という理想を夢見ております。また、[Markdown は、公文書のアクセシビリティを高め、オープン・ガバメントを促進する破壊的イノベーション]になりうるとも思っています。

ハクティビズム (Hacktivism) やオープン・ガバメントといったムーブメントが日本でも広まりつつあります。[Markdown をオープン・ガバメント推進の文脈で用いることが必然的に連想させる、ある若き天才プログラマーの活躍と、その死]についても知って頂ければと思う次第です。

[Markdownの知られざる重要性と可能性]というスピーチをさせて頂いたこともあります：

{% include slideshare_link.html slide=26457400 %}

<small><a href="https://www.slideshare.net/HidetoIshibashi/markdown-26457400" title="Markdownの知られざる重要性と可能性">Markdownの知られざる重要性と可能性</a> from <a href="http://www.slideshare.net/HidetoIshibashi">Hideto Ishibashi</a></small>

そんな次第で、Markdown好きが講じて[日本語Markdownユーザー会(Japanese Markdown User Group)] を作りました。ぜひ[Googleグループ](https://groups.google.com/d/forum/markdown-ja)にご参加ください。

今後ともプレインテキストとMarkdownをよろしくお願いいたします。

[ドキュメンテーション Advent Calendar 2013]: http://qiita.com/advent-calendar/2013/documentation/
[日本語Markdownユーザー会(Japanese Markdown User Group)]: http://ja.ishibashihideto.net/japanese-markdown-user-group/
[Markdown は、公文書のアクセシビリティを高め、オープン・ガバメントを促進する破壊的イノベーション]: http://zerobase.jp/blog/2013/03/_markdown.html
[EvernoteからNotational Velocityを経てnvALTへ]: http://zerobase.hateblo.jp/entry/2013/01/07/040220
[Simplenote]: http://simplenote.com/
[EvernoteからMarkdownに移行するためのツールenml2mdを作りました（ただしNode.js/npmなので玄人向け）]: http://zerobase.hateblo.jp/entry/2013/11/29/210353
[Markdownという名前が消えて、名もなき正書法になる]: http://zerobase.hateblo.jp/entry/2013/12/14/060701
[Markdown をオープン・ガバメント推進の文脈で用いることが必然的に連想させる、ある若き天才プログラマーの活躍と、その死]: http://zerobase.hateblo.jp/entry/2013/03/27/022543
[Markdownの知られざる重要性と可能性]: http://www.slideshare.net/HidetoIshibashi/markdown-26457400
[Markdownとは]: http://markdown.jp/what-is-markdown/
[ASCII (The American Standard Code for Information Interchange)]: http://en.wikipedia.org/wiki/ASCII
[Unicode]: http://ja.wikipedia.org/wiki/Unicode
[UTF-8]: http://ja.wikipedia.org/wiki/UTF-8
[デジタルジレンマ]: http://www.sophia-it.com/content/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E3%82%B8%E3%83%AC%E3%83%B3%E3%83%9E
