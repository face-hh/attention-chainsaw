const numbers = [
	[
		' ____ ',
		'/_   |',
		' |   |',
		' |   |',
		' |___|',
		'	  ',
	],
	[
		'________  ',
		'\\_____  \\ ',
		' /  ____/ ',
		'/       \\ ',
		'\\_______ \\ ',
		'	\\/',
	],
	[
		'________  ',
		'\\_____  \\ ',
		'  _(__  < ',
		' /       \\ ',
		'/______  /',
		'	\\/ ',
	],
];

(async () => {
	const readline = require('readline');

	async function askQuestion(query) {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		return new Promise((resolve) => rl.question(query, async (ans) => {
			rl.close();
			if(!ans) ans = await askQuestion(query);

			resolve(ans);
		}));
	}

	const name = await askQuestion('My name is: ');
	const pass = await askQuestion('My pass is: ');

	console.log(
		`\n\nHello \x1b[32m${name}\x1b[0m, welcome to \x1b[31mAttention, chainsaw!\x1b[0m\n` +
        '  \x1b[33m1)\x1b[0m Boss fight',
	);

	const response = await askQuestion('> ');

	if(response === '1') {
		console.clear();
		console.log('\x1b[31mBoss fight is starting');

		let i = 0;

		const interval = setInterval(async () => {
			if(i === 3) {
				clearInterval(interval);

				const gameData = [
					{ hp: 15, dmg: 4, turn: false },
					{ hp: 10, dmg: 2, turn: true },
				];

				const gameIsRunning = true;

				console.clear();

				console.log(
					`Rachmolotov - \x1b[31m❤️ ${gameData[0].hp}\x1b[0m | \x1b[34m🔪 ${gameData[0].dmg}\x1b[0m` +
					'                   //\\\\                   ' +
					`${name} - \x1b[31m❤️ ${gameData[1].hp}\x1b[0m | \x1b[34m🔪 ${gameData[1].dmg}\x1b[0m`,
				);

				let decission = await askQuestion('(A)ttack | (I)nsult | (D)efend: ');

				// if(!['a', 'i', 'd', 'attack', 'insult', 'defend'].includes(decission.toLowerCase())) decission = await askQuestion('(A)ttack | (I)nsult | (D)efend: ');

				return;
			}

			console.clear();
			console.log('\x1b[31mBoss fight is starting');
			console.log(numbers[i]?.join('\n') + '\x1b[0m');

			i++;
		}, 1000);
		return;
	}

	return console.log('Invalid option!');
})();
