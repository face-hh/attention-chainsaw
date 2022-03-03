(async () => {
	const readline = require('readline');

	function askQuestion(query) {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		return new Promise(resolve => rl.question(query, ans => {
			rl.close();
			resolve(ans);
		}));
	}

	const name = await askQuestion('My name is: ');
	const pass = await askQuestion('My pass is: ');

	if(!name || !pass) return console.log('No name or password was provided.');
	console.log(
		`\n\nHello \x1b[32m${name}\x1b[0m, welcome to \x1b[31mAttention, chainsaw!\x1b[0m\n` +
        '  \x1b[33m1)\x1b[0m Shut the fuck up',
	);

	const response = await askQuestion('> ');

	if(response === '1') return console.log('ok i go');

	return console.log('Invalid option!');
})();