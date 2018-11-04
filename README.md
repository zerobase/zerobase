ja.ishibashihideto.net
======================

<http://ja.ishibashihideto.net/>, a Jekyll-based website.

Installation
------------

```console
$ bundle install
```

Usage
-----

```console
$ bundle exec jekyll serve
```

注意: 書き出されたファイル中のURLがlocalhostになっているので、そのままデプロイしてはいけない。

Deployment (Firebase)
---------------------

Use [firebase-tools](https://github.com/firebase/firebase-tools).

```console
$ bundle exec jekyll build
$ firebase login
$ firebase deploy
```

Dependency
----------

[The GitHub Pages Gem](https://pages.github.com/versions/)

Notice
------

- You should not modify `_sass/bourbon` ([Bourbon](http://bourbon.io/)) and `_sass/neat` ([Neat](http://neat.bourbon.io/)).
- You may modify `_sass/base`, a [Bitters](http://bitters.bourbon.io/) directory.

License
-------

- Contents: [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- Software: [The MIT License (MIT)](http://opensource.org/licenses/MIT)
