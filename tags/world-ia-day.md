---
layout: default
permalink: /tags/world-ia-day/
title: "#world-ia-day"
description: World IA Dayに関するコンテンツの一覧です。
tag: world-ia-day
---

<main class="list index">
  <header>
    <h1 class="page title">{{ page.title }}</h1>
  </header>
  <p><a href="https://www.worldiaday.org/">World IA Day</a>は情報アーキテクチャ(IA)のコミュニティを盛り上げるためのグローバル・イベントです。その福岡版のオーガナイザーを務めています。</p>
  <section class="main content body">
    <h2>{{ page.title }}に関するコンテンツ</h2>
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
