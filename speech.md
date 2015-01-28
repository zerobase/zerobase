---
layout: default
title: 講演
permalink: /speech/
category: speech
---

<main class="{{ page.category }} posts list">

  {% assign posts = site.categories[page.category] %}
  {% include custom/posts.html %}

</main>
