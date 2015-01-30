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
```

Optional Tool Chain
-------------------

```console
browser-sync start --port 4040 --no-notify --proxy localhost:4000 --files _site/css/main.css
ngrok 4040
```

Dependency
----------

[The GitHub Pages Gem](https://pages.github.com/versions/)

Warning
-------

- `_sass/bourbon` and `_sass/neat` should not be modified. They are external Sass libraries: [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/).

Notice
------

- `_sass/base` is a [Bitters](http://bitters.bourbon.io/) directory. `_sass/base/_variables.scss` and `_sass/base/_grid-settings.scss` may be modified.
