function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;

        for (var i = 0; i < choices.length; i++) {
            var element1 = document.getElementById("choice" + i);
            element1.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Your score: " + quiz.score + "</h2>";

    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions = [
    new Question("Who is Jon Snow mother?", ["Lyana Stark", "Catelyn Stark", "Elia Martell", "Cersei Lannister"], "Lyana Stark"),
    new Question("What does Tyrion murder his father with?", ["Poison", "Crossbow", "Sword", "Mace"], "Crossbow"),
    new Question(" Who is known as The Kingslayer?", ["Sandor Clegane", "Joffrey Baratheon", "Eddard Stark", "Jaime Lannister"], "Jaime Lannister"),
    new Question("Who said this memorable line: 'You know nothing, Jon Snow'.", ["Daenerys Targaryen", "Cersei Lannister", "Ygritte", "Podrick Payne"], "Ygritte")
];

var quiz = new Quiz(questions);

populate(); 