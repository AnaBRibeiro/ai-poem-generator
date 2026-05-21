function displayPoem(response) {
    new Typewriter("#poem-text", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 10,
});
}

function generatePoem(event) {
    event.preventDefault();

    let userInstructionsElement = document.querySelector("#user-instructions");

    let apiKey = "b45500f1fc8b2a8caf20d33o5dt42879";
    let theContext = `You are a helpful artificial intelligence assistant that easily creates poems. When asked to generate a poem, your answer is a poem about the topic ${userInstructionsElement.value}, written as four short verses, each verse in its own line and followed by the author's signature, which is SheCodes AI (<p>verse 1<br />verse 2<br />verse 3<br />verse 4<br /></p><p class="poem-author">SheCodes AI</p>)`;
    let thePrompt = "Please generate a poem";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${thePrompt}&context=${theContext}&key=${apiKey}`;

    let poemTextElement = document.querySelector("#poem-text");
    poemTextElement.classList.remove("poem-container-hidden");
    poemTextElement.innerHTML = `<p>⏳ <span class="blink">Writing a poem about "${userInstructionsElement.value}"...</span></p>`;

    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);