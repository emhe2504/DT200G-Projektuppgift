"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const dogPicArticle = document.getElementById("dogpictures-zoom");
    const dogPicButton = document.getElementById("dogpictures-big");

    if (dogPicButton) {

        if (dogPicArticle.classList.contains("hidden")) {

            dogPicButton.addEventListener("click", () => {

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

    const beigeBowlArticle = document.getElementById("beigebowl-zoom");
    const beigeBowlButton = document.getElementById("beigebowl-big");

    if (beigeBowlButton) {

        if (beigeBowlArticle.classList.contains("hidden")) {

            beigeBowlButton.addEventListener("click", () => {

            beigeBowlArticle.classList.remove("hidden");
        });

        };
    };

        const backButtonTwo = document.getElementById("close-pictures2");

        if (backButtonTwo) {
        backButtonTwo.addEventListener("click", () => {

            window.location.href = "beigebowl.html";
        });
    }

    const catBowlArticle = document.getElementById("catbowl-zoom");
    const catBowlButton = document.getElementById("catbowl-big");

    if (catBowlButton) {

        if (catBowlArticle.classList.contains("hidden")) {

            catBowlButton.addEventListener("click", () => {

            catBowlArticle.classList.remove("hidden");
        });

        };
    };

        const backButtonThree = document.getElementById("close-pictures3");

        if (backButtonThree) {
        backButtonThree.addEventListener("click", () => {

            window.location.href = "catbowl.html";
        });
    }
});

