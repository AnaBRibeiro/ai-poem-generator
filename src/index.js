function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem-text", {
        strings: "SheCodes, a community strong and bright,",
        autoStart: true,
        delay: 10,
    });

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);