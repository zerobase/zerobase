---
layout: top
permalink: /
title: 石橋秀仁
description: ソフトウェア開発者／情報アーキテクト(IA)石橋秀仁のウェブサイト
---

# <ruby><rb>石橋</rb><rt>いしばし</rt></ruby> <ruby><rb>秀仁</rb><rt>ひでと</rt></ruby>

{% include profile_lead.md %}→[もっと詳しく](/about/me.html)

{% include contacts.html %}

## ブログ

{% assign posts = site.posts | where: "featured", true %}

<ul class="featured posts">
  {% for _post in posts %}
    <li class="post item">{% include article_meta.html %}</li>
  {% endfor %}
</ul>

[すべてのブログ記事](/blog/)

## 活動

セルフマネジメントテクノロジー Za
: 私が経営するゼロベース株式会社は、2008年から[セルフマネジメントテクノロジーZa][za]によって運営されています。社員をほとんどまったく管理せず、自営（自己経営）によって会社が回る仕組みです。徹底的に自由な働き方が実現しています。この知見を社会に広めます。

ゼロベースサロン
: 「ITについて深く考えたい人たちのコミュニティ」を作りたいと思い、[ゼロベースサロン][salon]を作りました（オンライン・サロンではありません）。ふだんの仕事で関わっている目の前の課題から、少し距離をとって物事を考えてみたい（つまり、大きな視野、抽象的なレベルで。いわゆる知的な思考）、という方に参加して頂ければと思っています。とはいえ、決して堅苦しくない、ふまじめな会です。

World IA Day Fukuoka
: [World IA Day]({% link tags/world-ia-day.md %})は情報アーキテクチャ(IA)のコミュニティを盛り上げるためのグローバル・イベントです。その福岡支部を立ち上げて、ローカル・オーガナイザーを務めています。World IA Day Fukuoka 2020は、美術館の新たなサービスを発想するイベントでした。そこで設計したワークショップは、別の機会にも利用されています。

ウィキペディア日本語版「ユーザーエクスペリエンス」記事執筆
: 「ユーザーエクスペリエンス」という言葉は広まりつつありますが、それについての人々の理解が深まっているとは言えません。手軽にアクセスできるウィキペディア日本語版に良質な記事があれば良いのですが、残念ながらそうではありませんでした。そこで新たにテキストを[書き下ろしました][wikipedia-ux]。

起業家メンタルヘルス調査
: 経済成長を担うとして期待される起業家たちが、一方では過剰なストレスにより心身の健康を損ね、ときに深刻な状態に陥ることもあるということは、あまり知られていません。その実態を明らかにし、広く知らしめるために、[起業家のメンタルヘルス調査レポート][startup-mental-health]を2017年8月に発表しました（名古屋市立大学大学院医学研究科と共同で）。その後、この問題に関する[特集記事](https://journal.ridilover.jp/topics/31)や[起業家向けサービス](https://www.value-press.com/pressrelease/209090)が登場しました。

[すべての活動](/activity/)

[wikipedia-ux]: https://www.zerobase.jp/2017/09/20/wikipedia-user-experience.html
[startup-mental-health]: https://medium.com/@zerobase/%E8%B5%B7%E6%A5%AD%E5%AE%B6%E3%81%AE%E3%83%A1%E3%83%B3%E3%82%BF%E3%83%AB%E3%83%98%E3%83%AB%E3%82%B9%E8%AA%BF%E6%9F%BB%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%88-%E3%81%AE%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%81%AB%E9%9A%9B%E3%81%97%E3%81%A6-fff14c69408b
[za]: https://www.zerobase.jp/za/
[salon]: https://www.zerobase.jp/salon/
