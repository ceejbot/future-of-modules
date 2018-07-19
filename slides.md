# [fit] The future of modules

---

# [fit] The future of __javascript__
# [fit] modules & __node__

---

# [fit] this presentation has a few animated gifs
# [fit] with a mostly-predictable subject

---

![left, fit](images/npm.png)
# [fit] C J Silverio
# [fit] CTO, __@ceejbot__

^ hi, I'm Ceej. you may know me from such companies as npm, which is super-obscure.

---

# [fit] you use a __lot__ of modular javascript
# [fit] billions & billions of packages

^ and I'm in a position to know

---

# [fit] if you use code from __npm__
# [fit] the future of modules
# [fit] matters to __you__

^ if you use packages from npm -- and you do -- this matters to you

---

# [fit] what's a __module__ anyway?

^ let's start with some jargon, node world

---

# [fit] a __module__ is a __scope__ plus
# [fit] an __API__ that lets you reuse it

---

# [fit] module syntax allows you to express
# [fit] what you're __sharing__
# [fit] what you're __re-using__

---

# [fit] __files__ are modules
# [fit] groups of files can be

---

# [fit] give that group of files a
# [fit] package.json and it's a __package__

^ a clump of files with a package.json is a package

---

# [fit] a package is a __node.js__ concept
# [fit] as is the `package.json`

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
function red(word) = { ... }; // etc

module.exports = { red, green, blue, bold, ...}; // cjs
export { red, green, blue, bold, ...}; // esm
```

---

# [fit] why is this worth a talk?
# [fit] it isn't because of __syntax__

---

# [fit] it's because the __transition__
# [fit] has not been smooth

---

![fit](images/jump-out-window.gif)

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

# [fit] in __2009__ JS had no official module spec
# [fit] but was beginning to figure out it needed one

^ remember AMD & require.js?

---

# [fit] there was a lot of __server-side js__ going on
# [fit] and people needed a way to share code

^ RingoJS, narwhal, and node.js. Only one survives, really.

---

# [fit] __CommonJS__ pulled together some
# [fit] common server-side patterns

---

# [fit] __node__ adopted the CommonJS syntax
# [fit] and wrote a __loader__

^ The loader has some mis-features and things its authors regretted, but it was good enough.

---

# [fit] loaders, it turns out, are important

^ require.js was the *loader* for the AMD spec

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

# [fit] browser-side js was __concatenating files__

^ also minifying them, to be fair

---

![fit](images/nodding.gif)

^ tbh I think the node side had it a lot better during these years

---

# [fit] __TC39__ started working on the problem in 2009

^ TC39 is the technical committee inside ECMA that defines the Ecmascript spec

---

# [fit] `import` & `export` arrived in __ES2015__

^ You'll note that this is 3 years ago, and 6 after node got underway.

---

# [fit] esm design choices __differ__ from cjs!
# [fit] its intended __uses__ are different!

^ This is normal & expected and perfectly fine.

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

# [fit] static analysis is important
# [fit] when your target is the __browser__

^ I do want to get into one point, though.

---

# [fit] node's nested deps are a great solution
# [fit] server-side, where __disk space is cheap__

^ That extra copy of lodash is only 1K on disk, who cares?

---

# [fit] static analysis & tree shaking help
# [fit] minimize __download burden__ in FE

^ That extra copy of that package is a whole extra kilobyte to download on mobile!

---

![fit](images/wincing.gif)

---

# [fit] so __front-end__ developers want ESM

---

# [fit] in between 2009 and now
# [fit] something __interesting__ happened

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
# [fit] and the __future__ looked like it was __here__

---

# [fit] the future is __not__ here

---

# [fit] babel is CJS __behind the scenes__
# [fit] node's loader is doing the work

---

# [fit] there are effectively 3 module specs in use
# [fit] commonjs, babel-esm, and esm

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
# [fit] there's no magic in spec-compliant ESM loading

^ but babel sure made it look good and behave nicely

---

# [fit] babel set some __expectations__
# [fit] for that magical resolution algorithm

^ Babel also gave us all the illusion that the syntax is working today.

---

# [fit] meanwhile, back in __Gotham City__...

---

# [fit] node's been using CJS for __9 years__
# [fit] npm has __725K__ public packages

^ most of these are CJS, or they're cjs via babel

---

# [fit] you will recall, __front-end dev__ is now what
# [fit] people are __using node__ to do

---

# [fit] node should use __JS standards__
# [fit] when those standards exist

^ This makes the experience of javascript closer to one javascript

---

# [fit] therefore node should __use ESM__.
# [fit] but what does this mean?

---

# [fit] the devil is in the __details__

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

# [fit] how do you know __which is which__
# [fit] without parsing everything?

---

# [fit] parse __goal detection__ is a problem

---

# [fit] parse goal detection is the __only__ problem
# [fit] with integrating esm into node, IMO

^ my opinion

---

# [fit] node has no `type="module"` marker
# [fit] for its __entry points__

^ How do you tell what flavor of module you're looking at?

---

# [fit] so it proposed `.mjs` as a __file suffix__ for
# [fit] javascript using the esm api

^ the infamous michael jackson script

---

# [fit] `.mjs` means __no parsing__:
# [fit] every module must advertise api in name

---

![fit](images/nononono.gif)

^ how I reacted to michael jackson script

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

# [fit] no mjs, __parse__ entry points;
# [fit] require module consumer know its api __in advance__

---

# [fit] our aim was to prove with a bit of __parsing__
# [fit] you could get a lot of __usability__

^ A little bit of parsing entry points is a little bit of perf investment at process launch.

---

# [fit] reception was __mixed__

---

![fit](images/eich.png)

^ Brendan Eich liked it, in a bit of a nice moment for me.

---

![fit](images/broom.gif)

^ the node project was less happy. I am Clara in this gif and the node project is the Doctor

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

# [fit] the node modules problem
# [fit] needed more __talking__

---

# [fit] I didn't want our solution adopted.
# [fit] I wanted the talking phase __restarted__.

---

![fit](images/doctor_dad_dance.gif)

---

# [fit] node has an unchartered [modules team](https://github.com/nodejs/modules)
# [fit] doing the hard work of __talking__

---

# [fit] it started with __use cases__
# [fit] and it's continuing with some __deep questions__

^ Myles was right that parts of this are hard-- the people parts, not the technical parts IMO.

---

# [fit] see `github.com/nodejs/modules`
# [fit] to understand how complicated the __tradeoffs__ are

---

# [fit] all of the discussion is about a few
# [fit] hundred lines of javascript at the surface

^ Again tech problems are easy! The node team will absolutely solve the technical problems, once they arrive at the right set of tradeoffs.

---

# [fit] this brings us to the __present state__
# [fit] ESM is not quite __there__ yet, but soon!

---

# [fit] if you are using babel in your build
# [fit] you have no reason not to __use ESM now__

---

# [fit] those of us not using Babel had
# [fit] __few options__ until recently

---

# [fit] github.com/standard-things/esm

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

^ please keep your npm cli updated; we're hard at work making it better

---

# [fit] update! update! ok! ok!

---

# [fit] ESM in node without a __build__ step:
# [fit] `npm init esm -y`

---

# [fit] std/esm sets the tradeoff dial to
# [fit] max __parsing__ for a lot of __features__

---

# [fit] is std/esm the future? not exactly.
# [fit] unclear where the __tradeoff dial__ will point.

^ This is better than the npm solution was. don't depend on being able to mix & match.

---

# [fit] the node project is conflicted about whether
# [fit] to privilege the __transition__ or the __destination__

---

# [fit] so what is the __future of modules__?

---

# [fit] the future of node is __front-end__
# [fit] the future of node is using common __standards__

---

# [fit] learn the __syntax__ now if you haven't yet
# [fit] future-you will __assume__ ESM not CJS

---

# [fit] CommonJS modules won't __go away__
# [fit] you'll just use __fewer__ of them

^ You'll still install trillions of packages from npm, but they'll be esm.

---

# [fit] migrate when you have a __reason__
# [fit] don't migrate now if you don't need to

---

# [fit] __eventually__ browsers will have a loader spec
# [fit] __eventually__ node will support it all natively

---

# [fit] eventually you'll stop typing `require()`

---

# [fit] the future of js modules is __ESM__
# [fit] and it will be __just fine__

---

![fit](images/windmill.gif)

---

# [fit] ![](images/npm.png) ❤️ you

# [fit] github/ceejbot/future-of-modules

