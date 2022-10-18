class Question {
	constructor(type, question) {
		this.type = type;
		this.question = question;
		this.answare = undefined;
	}

	yesOrNot = () => {
		let res = String(prompt(this.question));
		while (res.toLowerCase() !== 'yes' && res.toLowerCase() !== 'not') {
			alert(`Please, use a valid response [yes or not]!`);
			res = String(prompt(this.question));
		}
		if (res.toLowerCase() === 'yes') {
			return (this.answare = 'yes');
		} else {
			return (this.answare = 'not');
		}
	};

	isText = () => {
		let res = String(prompt(this.question));
		while (isNaN(res) == false && !isNaN(Number(res)) == true) {
			alert(`Please, use a valid text response!`);
			res = String(prompt(this.question));
		}
		return (this.answare = res);
	};

	isNumber = () => {
		let res = Number.parseInt(prompt(this.question));
		while (isNaN(res)) {
			alert(`Please, use a valid number response!`);
			res = Number.parseInt(prompt(this.question));
		}
		return (this.answare = res);
	};

	verifyAnsware = () => {
		switch (this.type) {
			case 1:
				this.yesOrNot();
				break;
			case 2:
				this.isText();
				break;
			case 3:
				this.isNumber();
				break;
			default:
				break;
		}
	};
}

function ask(quest) {
	quest.verifyAnsware();
	console.log(`Question: ${quest.question} \nAnsware: ${quest.answare}`);
}

let question_001 = new Question(1, `Have you ever got stuck in the puzzle? `);
let question_002 = new Question(2, `What is your name? `);
let question_003 = new Question(3, `How many children do you have? `);

ask(question_001);
ask(question_002);
ask(question_003);
