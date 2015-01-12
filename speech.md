---
layout: default
title: 講演
permalink: /speech/
---

<h1>講演</h1>

<ul class="speech list">
  {% for speech in site.data.speeches %}
    <li>
      <span class="speech meta time"><time>{{ speech.date }}</time></span>
      <span class="speech meta place">{{ speech.place }}</span>
      <h2>
        <a class="speech link" href="{{ speech.url | prepend: site.baseurl }}">{{ speech.name }}</a>
      </h2>
    </li>
  {% endfor %}
</ul>

<style>
.speech.meta.time {
  margin-right: 0.8em;
}
</style>