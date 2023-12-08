class Question {
	constructor(type, question) {
		this.type = type;
		this.question = question;
		this.answer = undefined;
	}

	yesOrNot = () => {
		let res = String(prompt(this.question));
		while (res.toLowerCase() !== 'yes' && res.toLowerCase() !== 'not') {
			alert(`Please, use a valid response [yes or not]!`);
			res = String(prompt(this.question));
		}
		if (res.toLowerCase() === 'yes') {
			return (this.answer = 'yes');
		} else {
			return (this.answer = 'not');
		}
	};

	isText = () => {
		let res = String(prompt(this.question));
		while (isNaN(res) == false && !isNaN(Number(res)) == true) {
			alert(`Please, use a valid text response!`);
			res = String(prompt(this.question));
		}
		return (this.answer = res);
	};

	isNumber = () => {
		let res = Number.parseInt(prompt(this.question));
		while (isNaN(res) && isFinite(res)) {
			alert(`Please, use a valid number response!`);
			res = Number.parseInt(prompt(this.question));
		}
		return (this.answer = res);
	};

	verifyAnswer = () => {
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
	quest.verifyAnswer();
	console.log(`Question: ${quest.question} \nAnswer: ${quest.answer}`);
}

let question_1 = new Question(1, `Have you ever got stuck in the puzzle? `);
let question_2 = new Question(2, `What is your name? `);
let question_3 = new Question(3, `How many children do you have? `);

ask(question_1);
ask(question_2);
ask(question_3);
