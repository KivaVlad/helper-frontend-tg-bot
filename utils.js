const questions = require('./questions.json');

const {Random} = require('random-js');

const getRandomQuestions = (topic) => {
    const random = new Random();
    let questionsTopic = topic.toLowerCase();

    if (questionsTopic === 'случайный вопрос') {
        questionsTopic = Object.keys(questions) [random.integer(0, Object.keys(questions).length - 1)]
    }

    const randomQuestionIndex = random.integer(0, questions[questionsTopic].length - 1);

    return {
        question: questions[questionsTopic] [randomQuestionIndex],
        questionsTopic,
    }
}

const getCorrectAnswer = (topic, id) => {
    const question = questions[topic].find((question) => question.id === id);

    if (!question.hasOptions) {
        return question.answer;
    }

    return question.options.find((option) => option.isCorrect).text;
}

module.exports = {getRandomQuestions, getCorrectAnswer}