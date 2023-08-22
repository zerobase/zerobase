---
layout: top
permalink: /
title: 石橋秀仁
description: "情報アーキテクト。ゼロベース創業者。モットーは「思想を実装する」。"
---

# <ruby><rb>石橋</rb><rt>いしばし</rt></ruby> <ruby><rb>秀仁</rb><rt>ひでと</rt></ruby>

[情報アーキテクト](/blog/2014/04/25/future-of-information-architect.html)。[ゼロベース](https://www.zerobase.jp/)創業者。モットーは「[思想を実装する](/about/philosophy.html)」。

[詳しいプロフィール](/about/me.html)

## プロジェクト

- [セルフマネジメントテクノロジー「Za」](https://www.zerobase.jp/za/): 管理しない経営（2008年）
- [起業家メンタルヘルス調査](https://www.zerobase.jp/works/2017/08/09/startup-mental-research-result.html): 社会調査（2017年）
- [ウィキペディア日本語版「ユーザーエクスペリエンス」](https://www.zerobase.jp/2017/09/20/wikipedia-user-experience.html): 記事執筆（2017年）
- [World IA Day]({% link tags/world-ia-day.md %}): 年次国際イベントの福岡開催オーガナイザー（2020年）
-  [『DESIGNING CONNECTED CONTENT』](https://www.zerobase.jp/2022/02/08/designing-connected-content.html): 専門書の翻訳（2022年）

{% comment %}また、「福岡×情報アーキテクチャ」をテーマとするイベント・シリーズ[FUK](https://fukfuk.peatix.com/)も主催しています。{% endcomment %}

[すべての活動](/activity/)


## ブログ

{% assign posts = site.posts | where: "featured", true %}

<ul class="featured posts">
  {% for _post in posts %}
    <li class="post item">{% include article_meta.html %}</li>
  {% endfor %}
</ul>

[すべてのブログ記事](/blog/)


## コンタクト

<ul class="contacts">
  {% for contact in site.data.contacts %}
    <li><a href="{{ contact.link }}"><img alt="{{ contact.name }}" src="{{ contact.thumbnail }}"><br>{{ contact.name }}</a></li>
  {% endfor %}
</ul>

