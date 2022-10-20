---
layout: default
permalink: /tags/world-ia-day/
title: "タグ #world-ia-day"
description: World IA Dayに関するコンテンツの一覧です。
tag: world-ia-day
---

<main class="list index">
  <header>
    <h1 class="page title">{{ page.title }}</h1>
  </header>
  <p><a href="https://www.worldiaday.org/">World IA Day</a>は、情報アーキテクチャ(IA)のコミュニティを盛り上げるために世界中の都市で同日開催されるグローバル・イベントです。なお、「情報アーキテクチャ」とは、ウェブサイトやアプリの全体的・総合的な設計に関する分野（文字通り「情報の建築」）です。</p>
  <section class="main content body">
    <h2>{{ page.title }} に関するコンテンツ</h2>
    {% for _tag in site.tags %}
      {% if _tag[0] == page.tag %}
        <ul class="post list">
          {% for _post in _tag[1] %}
            <li class="post item">{% include article_meta.html %}</li>
          {% endfor %}
        </ul>
      {% endif %}
    {% endfor %}
  </section>
</main>
