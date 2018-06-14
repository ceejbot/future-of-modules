// A completely pointless intermediate layer to demonstrate importing & exporting.

'use strict';

// We use ESM syntax to import from a relative path.
import { check, initialize } from './checker.js';
// Look! A CommonJS module! With node's resolution algorithm!
import chalk from 'chalk';

// Let's try importing another common js file.
import cjs from './cjs.js';
console.log(cjs);

// Now we require a file that uses the esm API to export.
const esm = require('./esm.js').default;
console.log(esm);

function checkForWords(list)
{
	if (list.length === 0)
	{
		console.log('No words to check.');
		return;
	}

	initialize();
	list.forEach(word =>
	{
		console.log(`${chalk.bold(word)}: ${check(word) ? chalk.green('✔︎') : chalk.red('✘ not')} a word`);
	})
}

export default checkForWords;
