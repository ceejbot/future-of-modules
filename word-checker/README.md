# word checker

An extremely silly way to check if a string is probably an English word. Assuming all English words are in `/usr/share/dict/words`, that is. And assuming you want this check to be very lossy because we're using a *bloom filter* to store them in, ooh.

But really it's a way to demonstrate some small bits of ESM syntax in use alongside CommonJS.

Run with `node index.js` or `npm start`.

## LICENSE

ISC
