"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const dogPicButton = document.getElementById("dogpictures-big");
    const backButton = document.getElementById("close-pictures");
    const dogPicArticle = document.getElementById("dogpictures-zoom");

    if (dogPicButton && backButton) {

        if (dogPicArticle.classList.contains("hidden")) {

            dogPicButton.addEventListener("click", () => {

            const dogPicArticle = document.getElementById("dogpictures-zoom")
            dogPicArticle.classList.remove("hidden");
        });

        };
        
    };

});

