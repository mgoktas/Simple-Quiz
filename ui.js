function UI() {
    this.btn_start = document.querySelector(".btn_start"),
    this.btn_next = document.querySelector(".next_btn"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.score_box = document.querySelector(".score_box"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
    this.time_text = document.querySelector(".time_text")
    this.time_second = document.querySelector(".time_second")
    this.time_line = document.querySelector(".time_line")
}

UI.prototype.showQuestion = function(question) {
    let questioN = `<span>${question.questionText}</span>`;
    let options = '';

    for(let answer in question.options) {
        options += 
            `
                <div class="option"> 
                    <span><b>${answer}</b>: ${question.options[answer]}</span>
                </div>
            `;
    }
    document.querySelector(".question_text").innerHTML = questioN;
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option");

    for(let opt of option) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

UI.prototype.showTotalQuestion = function(questionIndex, totalQuestion) {
    let tag = `<span class="badge bg-warning">${questionIndex} / ${totalQuestion}</span>`;
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}

UI.prototype.showScore = function (totalQuestion, correctAnswer) {
    let tag = `You have ${correctAnswer} correct answers in ${totalQuestion} questions. `
    document.querySelector(".score_box .score_text").innerHTML = tag
}