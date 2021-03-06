<p align="center" style="text-align:center">
    <img src="./illustration.svg" alt="illustration" width="100"/>
</p>

# MYLIBNAME

> functions for working with date

[![npm version](https://badge.fury.io/js/MYLIBNAME.svg)](https://www.npmjs.com/package/MYLIBNAME)
[![](https://data.jsdelivr.com/v1/package/npm/MYLIBNAME/badge)](https://www.jsdelivr.com/package/npm/MYLIBNAME)


## Table of Contents

- [Quick start](#quick-start)
  - [Install](#install)
  - [Initialization](#initialization)
- [Methods](#methods)

## Quick start

### Install

We support all platforms.

#### npm

For module bundlers such as Webpack or Browserify.

```shell
npm i MYLIBNAME
```

#### Include with &lt;script&gt;

Download and install with `script`.

```html
<script src="MYLIBNAME.js"></script>
```

##### CDN

Recommended for learning purposes, you can use the latest version:

```html
<script src="https://cdn.jsdelivr.net/npm/MYLIBNAME/dist/lib/MYLIBNAME.js"></script>
```

Recommended for production for avoiding unexpected breakage from newer versions:

```html
<script src="https://cdn.jsdelivr.net/npm/MYLIBNAME@1.0.0/dist/lib/MYLIBNAME.js"></script>
```

### Initialization

#### ES6

MYLIBNAME as an ES6 module.

```js
import { getMonthNameByMonthIndex } from 'MYLIBNAME';

getMonthNameByMonthIndex(1)
```

#### Node

MYLIBNAME as a Node.js module

```js
const { getMonthNameByMonthIndex } = require('MYLIBNAME');

getMonthNameByMonthIndex(1)
```

#### Browser

Exports a global variable called `GLOBALMYLIBNAME`. Use it like this

```html
<script>
    GLOBALMYLIBNAME.getMonthNameByMonthIndex(1);
</script>
```

#### AMD

MYLIBNAME as an AMD module. Use with Require.js, System.js, and so on.

```js
requirejs(['MYLIBNAME'], function(MYLIBNAME) {
    MYLIBNAME.getMonthNameByMonthIndex(1)
});
```

## Methods


## Author

webster6667
