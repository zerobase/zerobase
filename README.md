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

Optional Tools
--------------

BrowserSync:

```
browser-sync start --port 4040 --no-notify --proxy localhost:4000 --open external --files _site/css/main.css
```

Port forwarding:

```
ngrok 4040
```

Dependency
----------

[The GitHub Pages Gem](https://pages.github.com/versions/)

Warning
-------

- The author should not modify `_sass/bourbon` ([Bourbon](http://bourbon.io/)) and `_sass/neat` ([Neat](http://neat.bourbon.io/)).

Notice
------

- `_sass/base` is a [Bitters](http://bitters.bourbon.io/) directory.
- The author may modify `_sass/base/_variables.scss`.
