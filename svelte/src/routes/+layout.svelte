<h1>Quiz Time!</h1>

<main>
    <slot></slot>
</main>

<div class="small">
    Questions courtesy of ChatGPT.<br>
    Sample application for BSCS I Intermediate Programming class.<br>
    &copy; 2024 FCAT CCS / K. Buan
</div>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        color: white;
    }

    h1 {
        background: yellow;
        color: black;
        margin: 0;
        padding: 8px 4px;
        text-align: center;
    }

    .small {
        color: #888;
        font-size: 12px;
        padding: 4px 8px;
    }
</style>