ja.ishibashihideto.net
======================

<http://ja.ishibashihideto.net/>, a Jekyll-based website.

Installation
------------

`bundle install`

Usage
-----

```console
bundle exec jekyll serve
browser-sync start --port 4040 --proxy localhost:4000 --files _site/css/*
ngrok 4040
```

Dependency
----------

[The GitHub Pages Gem](https://pages.github.com/versions/)

Warning
-------

Sass directories named `base`, `bourbon` and `neat` should not be modified but the only one exception is `base/_variables.scss`.
