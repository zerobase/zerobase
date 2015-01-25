---
layout: default
title: 執筆
permalink: /writing/
category: writing
---

<main class="{{ page.category }} posts list">

  {% assign posts = site.categories[page.category] %}
  {% include custom/posts.html %}

</main>
