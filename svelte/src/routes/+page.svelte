<script>
    import "../app.css";
    import { quiz } from "$lib/questions.js";

    let currentQuestion = 0;
    let correctCount = 0;

    function answer(a) {
        if (a == quiz[currentQuestion].a) {
            correctCount++;
        }
        currentQuestion++;
    }

    function reset() {
        correctCount = 0;
        currentQuestion = 0;
    }
</script>

<svelte:head>
    <title>Quiz App Sample</title>
</svelte:head>

{#if currentQuestion < quiz.length}
    <div class="qcard">
        <h2>{quiz[currentQuestion].q}</h2>

        <div class="choices">
            {#each quiz[currentQuestion].c as a}
                <button on:click={answer(a)}>{a}</button>
            {/each}
        </div>
    </div>
{:else}
    <div class="result">
        <div>You got</div>
        <h2>{correctCount} out of {quiz.length}</h2>
        <div>correct answers!</div>
        <div class="buttons">
            <button on:click={reset}>Try Again</button>
        </div>
    </div>
{/if}

<style>
    .qcard {
        text-align: center;
        max-width: 350px;
        border: solid 1px white;
    }

    .qcard h2 {
        font-size: 24px;
        color: #ffff00;
        margin: 0;
        padding: 32px 8px;
    }

    .choices button {
        display: block;
        appearance: none;
        background: black;
        color: white;
        font-weight: bold;
        border-radius: 0;
        border: none;
        border-top: solid 1px #888;
        width: 100%;
        padding: 16px 0;
        font-size: 16px;
        cursor: pointer;
    }
    .choices button:hover {
        background: #222;
    }

    .result {
        text-align: center;
        font-size: 20px;
    }
    .result h2 {
        color: yellow;
        margin: 8px 0;
    }
    .result button {
        appearance: none;
        background: black;
        border: solid 1px white;
        padding: 16px 32px;
        color: white;
        font-size: 20px;
        cursor: pointer;
        font-weight: bold;
    }
    .result button:hover {
        background: #222;
    }
    .buttons {
        margin: 32px 0;
    }
</style>