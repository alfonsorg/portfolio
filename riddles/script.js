const questions = [
    { question: "¿Qué tiene patas pero no puede caminar?", answer: "silla" },
    { question: "¿Qué tiene ojos pero no puede ver?", answer: "agujas" },
    { question: "Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera.", answer: "pera" },
    { question: "Soy redonda como el sol, en el cielo me verás brillar. De noche no estoy, pero de día siempre estoy allí. ¿Qué soy?", answer: "luna" },
    { question: "Blanco por fuera, dulce por dentro, en la leche me sumerjo y en tu boca me derrito. ¿Qué soy?", answer: "chocolate" },
    { question: "Tengo agujas pero no coso, mido el tiempo sin hacer ruido. ¿Qué soy?", answer: "reloj" },
    { question: "Si me nombras, de agua hablamos, pero ni gota en mí encontrarás. ¿Quién soy?", answer: "mapa" },
    { question: "Vuelo sin alas, lloro sin ojos. Siempre estoy corriendo, pero nunca me canso. ¿Qué soy?", answer: "río" },
    { question: "Cuatro patas tengo, peluda soy, maúllo en la noche, ¿quién soy yo?", answer: "gato" },
    { question: "Verde por fuera, roja por dentro, muchas semillas en mi centro. ¿Quién soy?", answer: "sandía" }
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    displayQuestion();
}

function displayQuestion() {
    document.getElementById("question").innerText = questions[currentQuestionIndex].question;
    document.getElementById("answerInput").value = ""; 
}

function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value.toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerText = "¡Correcto! ¡Esa es la respuesta!";
        score++;
    } else {
        document.getElementById("result").innerText = "Incorrecto. Inténtalo de nuevo.";
    }

    document.getElementById("scoreValue").innerText = score;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById("question").innerText = "Fin del juego";
    document.getElementById("answerInput").style.display = "none";
    document.getElementById("result").innerText = "Tu puntuación final es: " + score;
    document.getElementById("score").style.display = "none";
    document.getElementById("comprobarBtn").style.display = "none";
    document.getElementById("restartBtn").style.display = "block";
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("restartBtn").style.display = "none";
    document.getElementById("result").innerText = "";
    document.getElementById("answerInput").style.display = "block";
    document.getElementById("score").style.display = "block";
    document.getElementById("comprobarBtn").style.display = "block";
    startGame();
}

startGame();
