"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const dogPicArticle = document.getElementById("dogpictures-zoom");
    const dogPicButton = document.getElementById("dogpictures-big");

    if (dogPicButton) {

        if (dogPicArticle.classList.contains("hidden")) {

            dogPicButton.addEventListener("click", () => {

            const dogPicArticle = document.getElementById("dogpictures-zoom")
            dogPicArticle.classList.remove("hidden");
        });

        };
    };

        const backButton = document.getElementById("close-pictures");

        if (backButton) {
        backButton.addEventListener("click", () => {

            window.location.href = "leash.html";
        });
    }
});

