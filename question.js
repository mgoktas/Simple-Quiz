function Question(questionText, options, correctAnswer) {
    this.questionText = questionText;
    this.options = options;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function(answer) {
    return answer === this.correctAnswer
}

let questions = [
    new Question("1-Which language is the package manager for Javascript ", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Question("2-Which language is not considered as a frontend langugage? ", { a: "css", b: "html", c: "javascipt", d: "sql" }, "d"),
    new Question("3-Which language is considered as a backend language? ", { a: "node.js", b: "typescript", c: "angular", d: "react" }, "a"),
    new Question("4-Which language does not use javascript?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d")
];
