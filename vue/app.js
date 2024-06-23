const { createApp, ref } = Vue;

createApp({
    setup() {
        const quiz = ref([
            {
                q: "What is the capital of France?",
                c: ["Berlin", "Madrid", "Paris", "Rome"],
                a: "Paris"
            },
            {
                q: "Which planet is known as the Red Planet?",
                c: ["Earth", "Mars", "Jupiter", "Venus"],
                a: "Mars"
            },
            {
                q: "Who wrote \"To Kill a Mockingbird\"?",
                c: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
                a: "Harper Lee"
            },
            {
                q: "What is the smallest prime number?",
                c: ["0", "1", "2", "3"],
                a: "2"
            },
            {
                q: "In which year did the Titanic sink?",
                c: ["1902", "1912", "1922", "1932"],
                a: "1912",
            },
            {
                q: "What is the chemical symbol for gold?",
                c: ["Au", "Ag", "Pb", "Fe"],
                a: "Au",
            },
            {
                q: "Who painted the Mona Lisa?",
                c: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
                a: "Leonardo da Vinci"
            },
            {
                q: "What is the longest river in the world?",
                c: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                a: "Nile"
            },
            {
                q: "How many continents are there on Earth?",
                c: ["5", "6", "7", "8"],
                a: "7"
            },
            {
                q: "Which gas do plants absorb from the atmosphere?",
                c: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                a: "Carbon Dioxide"
            }
        ]);

        const currentQuestion = ref(0);

        const correctCount = ref(0);

        function answer(a) {
            if (a == quiz.value[currentQuestion.value].a) {
                correctCount.value++;
            }
            currentQuestion.value++;
        }
    
        function reset() {
            correctCount.value = 0;
            currentQuestion.value = 0;
        }

        return {
            quiz,
            currentQuestion,
            correctCount,
            answer,
            reset,
        };
    }
}).mount('#app')