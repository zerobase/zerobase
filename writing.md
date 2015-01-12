---
layout: default
title: 執筆
permalink: /writing/
---

<h1>執筆</h1>

<ul class="writing list">
  {% for writing in site.data.writings %}
    <li>
      <span class="writing meta time"><time>{{ writing.date }}</time></span>
      <span class="writing meta place">{{ writing.place }}</span>
      <h2>
        <a class="writing link" href="{{ writing.url | prepend: site.baseurl }}">{{ writing.name }}</a>
      </h2>
    </li>
  {% endfor %}
</ul>

<style>
.writing.meta.time {
  margin-right: 0.8em;
}
</style>
