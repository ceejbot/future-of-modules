# The future of modules

---

![left, fit](images/npm.png)
# [fit] C J Silverio
# [fit] CTO, __@ceejbot__

^ hi, I'm Ceej. you may know me from such companies as npm. How many of you use npm?

---

# [fit] you use a __lot__ of modular javascript
# [fit] billions & billions of packages

^ and I'm in a position to know

---

# [fit] if you use code from npm
# [fit] the future of the language
# [fit] matters to __you__

^ if you use packages from npm -- and you do -- this matters to you

---

# [fit] a __module__ is a __scope__ plus
# [fit] an __API__ that lets you reuse it

^ let's start with some jargon

---

# [fit] __files__ are modules
# [fit] groups of files can be

---

# [fit] give that group of files a
# [fit] package.json and it's a __package__

^ a clump of files with a package.json is a package

---

# [fit] module syntax:
# [fit] this is what I'm __sharing__
# [fit] this is what I'm __re-using__

---

# [fit] __C__ommon__JS__ is one module syntax
# [fit] __E__CMA__S__cript __Modules__ is another

---

# [fit] you've seen the syntax a million times
# [fit] but here's a __fast refresher__

---

```js
const chalk = require('chalk'); // cjs
import chalk from 'chalk'; // esm

console.log(chalk.bold('hello world!'));
```

---

```js
const { yellow, bold } = require('chalk'); // cjs
import { yellow, bold } from 'chalk'; // esm

console.log(`${bold('hello')} ${yellow('world!')}`);
```

---

```js
const chalk = { red, green, blue, bold, ...};

module.exports = chalk; // cjs
export default chalk; // esm
```

---

# [fit] why is this worth a talk?
# [fit] it isn't because of __syntax__

---

# [fit] it's because the __transition__
# [fit] has not been smooth

---

![fit](images/aaaaigh.gif)

---

# [fit] node needs __both__
# [fit] and it still doesn't do ESM natively

---

# [fit] __ESM__ is the future
# [fit] of modular JavaScript

---

# [fit] in order to understand the __future__
# [fit] we must first understand the __past__

^ Why was I resentful at first? Why am I okay now? What's going to happen to all those modules on npm?

---

# [fit] in __2009__ JS had no module spec
# [fit] but __CommonJS__ has one

---

# [fit] there was a lot of __server-side js__ going on
# [fit] and it needed a module spec

^ RingoJS, narwhal, and node.js

---

# [fit] __node__ adopted the CommonJS syntax
# [fit] and wrote a __loader__

^ The loader has some mis-features and things its authors regretted, but it was good enough.

---

# [fit] node's __resolution algorithm__
# [fit] turns a human-friendly __module name__
# [fit] into a __path__ to code that can be loaded

---

```js
const chalk = require('chalk');
// loads './node_modules/chalk/index.js'
const other = require('./chalk');
// loads './chalk.js' if it finds it
```

---

# [fit] node's take on modules is __useful__
# [fit] you're using the __heck__ out of it today

^ 725K public packages on npm

---

# [fit] browser-side js was still __concatenating files__

^ also minifying them, to be fair

---

![](images/chin-stroke.gif)

^ tbh I think the node side had it a lot better during these years

---

# [fit] __TC39__ started working on the problem in 2009

^ TC39 is the technical committee inside ECMA that defines the Ecmascript spec

---

# [fit] `import` & `export`
# [fit] arrived in __ES2015__

^ You'll note that this is 3 years ago, and 6 after node got underway.

---

# [fit] esm design choices __differ__ from cjs!
# [fit] its intended __uses__ are different!

^ This is normal & expected and perfectly fine.

----

# [fit] inherently __asynchronous__ not synchronous

^ This is unlike cjs, but in practice you don't care

---

# [fit] \(mostly) not dynamic:
# [fit] can't import from a __variable__ source

---

# [fit] designed to support __static analysis__
# [fit] the `import()` variation is, however, dynamic

---


# [fit] see __Lin Clark__'s [cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
# [fit] for an exploration of the details

^ You can google for that, or find the link in the talk repo.

---

# [fit] static analysis is far more useful for FE
# [fit] to minimize __download burden__

^ I do want to get into one point, though.

---

# [fit] node's nested deps are a great solution
# [fit] server-side, where __disk space is cheap__

^ That extra copy of the package is only a meg on disk, who cares?

---

# [fit] deep analysis & tree shaking are important
# [fit] when your target is the __browser__

^ That extra copy of that package is a whole extra megabyte to download on mobile!

---

![fit](images/speed.gif)

---

# [fit] so __front-end__ focused developers want ESM

---

# [fit] in between 2009 and now
# [fit] something very __interesting__ happened

---

# [fit] node's user base __changed__

---

# [fit] throwbacks like me still write server-side js
# [fit] most of you use node for __frontend tooling__

---

# [fit] you didn't want to __wait__ for new js features
# [fit] you wanted them __now__

---

# [fit] __transpilation__ took off
# [fit] __babel__ was the new hotness

---

# [fit] babel transpiled the ESM syntax into CJS
# [fit] and the __future__ looked like it was __now__

---

# [fit] but babel was CJS __behind the scenes__
# [fit] which meant node's loader was doing the work

---

# [fit] __problem:__ there is no esm loader

---

# [fit] no loader? __no loader__.
# [fit] well, __html's__ loader.

---

```html
<script type="module" src="entry.js"></script>
```

```js
import {chalk} from 'https://example.com/js/chalk/index.js';
import {foo} from '../js/foo.js';
```

---

# [fit] file paths are super-__predictable__
# [fit] and super-__annoying__ to write by hand

---

# [fit] node's loader is part of its __magic__
# [fit] and there's no magic in spec-compliant ESM loading

^ but babel sure made it look good and behave nicely

---

# [fit] babel set some __expectations__
# [fit] about how esm in node should behave

---

# [fit] there's no escape from __build steps__ in sight

---

# [fit] meanwhile, back in __Gotham City__...

---

# [fit] node's been using CJS for __9 years__

---

# [fit] npm has __725K__ public packages

^ most of these are CJS, or they're cjs via babel

---

# [fit] you will recall, __front-end dev__ is now what
# [fit] people are __using node__ to do

---

# [fit] node should use __JS standards__
# [fit] when those standards exist

---

# [fit] therefore node should __use ESM__.
# [fit] but what does this mean?

---

# [fit] ESM in node looked like
# [fit] it was __not going good places__

^ I had sorta been hoping the whole thing just went away.

---

# [fit] very depressing talk by __Myles Borins__
# [fit] about how hard the __integration__ was

^ Why is it hard?

---

# [fit] the systems have to __co-exist__
# [fit] but they have little in common

---

# [fit] how do CJS & ESM __interoperate__?

---

# [fit] can you __require()__ an esm file?
# [fit] can you __import__ a cjs file?

---

# [fit] how do you know __which is which__ without parsing?

---

# [fit] node has no `type="module"` marker
# [fit] for its __entry points__

^ How do you tell what flavor of module you're looking at?

---

# [fit] so it proposed `.mjs` as a file suffix for
# [fit] javascript with certain features

---

![fit](images/table-flip.gif)

^ Nobody particularly liked that.

---

# [fit] I'm the Stig __table-flipping__.

---

# [fit] "Well," I said. "What happens if
# [fit] we choose __different constraints__?"

---

![fit](images/how-hard-can-it-be.jpg)

---

# [fit] well, __not very hard__.
# [fit] Chris Dickinson & I implemented a
# [fit] usable take on ESM + CJS in node.

^ We made some very different choices than node's experimental modules mode did.

---

# [fit] no mjs, __parse__ entry point to figure out
# [fit] require module consumer know its api __in advance__

---

# [fit] reception was __mixed__

---

![fit](images/eich.png)

---

![fit](images/may_smoking_engine.gif)

^ the node project was less happy. one might say it was ambitious but rubbish

---

# [fit] __technical__ problems are easy

---

# [fit] __people__ problems are hard

---

# [fit] __what__ is node for?
# [fit] __how__ do we use node?
# [fit] __where__ is node going?

---

# [fit] fundamental differences in __answers__
# [fit] lead to fundamental differences in __designs__

^ fundamental differences in how people answer these questions lead to fundamental differences in how we'd each solve the modules problem

---

# [fit] __talking__
# [fit] thinking
# [fit] typing

^ All problems run through these stages, sometimes more than once. This is the order from hardest to easiest.

---

# [fit] the node modules problem needed more __talking__

---

![fit](images/great-news-what.gif)

---

# [fit] node has a __modules working group__
# [fit] doing the hard work of talking

---

# [fit] it started with __use cases__

---

TODO TODO some examples of use cases

---

# [fit] this brings us to the __present state__
# [fit] not quite __there__ yet, but soon!

---

# [fit] you can use ESM __now__ if you want

---

# [fit] if you are using babel in your build
# [fit] you have __no reason not to__

---

# [fit] those of us in server-side nodeland
# [fit] had __no other options__ until recently

---

https://github.com/standard-things/esm

^ from the author of lodash, somebody involved in the modules work in node & super-involved in js in browsers at MS

---

# [fit] `npm init esm -y`

---

# [fit] *record scratch noise*
# [fit] `npm install -g npm@latest`

---

# [fit] __npm@6__ has some goodies

---

# [fit] like __templated__ init
# [fit] even better than `npm init -y`

---

# [fit] `npm audit` & `npm audit fix`
# [fit] report and __automatically fix__
# [fit] known vulnerabilities in your dep tree

---

# [fit] __npm, Inc__, is a company that
# [fit] sells goods and services

---

# [fit] you can pay us to run a very nice
# [fit] __single-tenant registry__ for you

^ le gasp

---

# [fit] now back to __modules__...

---

# [fit] to use ESM in node __right now__
# [fit] `npm init esm -y`

---

![fit](images/run-hug.gif)

---

# [fit] no transpilation
# [fit] monkey-patch the `module` object

---

```js
require = require('esm')(module);
const Widget = require('./main.js').default;

// over in main.js
import fs from 'fs';
import cjs from './cjs.js';
const esm = require('./esm.js');
export default class Widget { ... }
```

^ Entry point is CJS. Everything from there on can mix the two.

---

# [fit] Q: Was that __transparent interop__?
# [fit] A: I believe it was, Bob.

---

# [fit] see __talk repo__ for code examples:
# [fit] [github.com/ceejbot/future-of-modules](https://github.com/ceejbot/future-of-modules)

---

# [fit] is node going to end up there?
# [fit] I hope so!

^ This is better than the npm solution was.

---

# [fit] so what is the __future of modules__?

---

# [fit] learn the __syntax__ now if you haven't yet

---

# [fit] this trend will continue:
# [fit] the future of node is __front-end__

---

# [fit] the future of node is __you__

---

# [fit] future-you will __assume__ ESM not CJS

---

# [fit] you'll install trillions of packages from __npm__
# [fit] but they'll all be __ESM__ not CJS

---

# [fit] CommonJS modules won't __go away__ or stop working
# [fit] you'll slowly use more & more ESM

---

# [fit] no need to migrate until you have a reason

---

# [fit] the future of js modules will be __just fine__

---

![fit](images/and-on-that-bombshell.jpg)

---

# [fit] ![](images/npm.png) ❤️ you

# [fit] github/ceejbot/future-of-modules

