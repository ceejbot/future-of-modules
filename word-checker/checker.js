'use strict';

// This dependency uses the esm module internally.
import Filter from 'farmfilter';
// This is a node built-in.
import fs from 'fs';

let filter;

function initialize()
{
	if (filter) return;

	console.log('Loading words…');
	// Load all the words.
	// Well, not all the words. Do you have all day? You do not.
	const words = fs.readFileSync('/usr/share/dict/words', 'utf8').split('\n').slice(200000);
	filter = Filter.createOptimal(words.length);
	console.log(`Ridonkulous filter created. Now adding ${words.length} words…`);
	words.forEach(word => filter.add(word));
	console.log('Done.\n');
}

function check(word)
{
	if (!filter) initialize();
	return filter.has(word);
}

// ESM-style exports.
export {
	check,
	initialize
};
