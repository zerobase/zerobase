ja.ishibashihideto.net
======================

<http://ja.ishibashihideto.net/>, a Jekyll-based website.

Required RubyGems
-----------------

- jekyll 2.4.0
- sass 3.4.9

Warning
-------

Sass directories named `base`, `bourbon` and `neat` should not be modified but the only one exception is `base/_variables.scss`.

Useful commands
---------------

```console
jekyll serve  # -> port 4000
browser-sync start --proxy localhost:4000 --files _site/css/*  # -> port 3002
ngrok 3002
```
