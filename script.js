"use strict"

document.addEventListener("DOMContentLoaded", () => {

    initPage();
});


function initPage() {

    bigDogPic();
    goBack();
    bigBeigePic();
    goBackTwo();
    bigBowlPic();
    goBackThree();
    bigBedPic();
    goBackFour();
    bigToyPic();
    goBackFive();
    itemInBasket();
    basketOptions();
    functionMenu();
    getMenu();
    awayMenu();

    window.addEventListener("resize", functionMenu);
    
}

function bigDogPic() {

    const dogPicArticle = document.getElementById("dogpictures-zoom");
    const dogPicButton = document.getElementById("dogpictures-big");

    if (dogPicButton) {

        if (dogPicArticle.classList.contains("hidden")) {

            dogPicButton.addEventListener("click", () => {

                dogPicArticle.classList.remove("hidden");
            });

        };
    };
};

function goBack() {

    const backButton = document.getElementById("close-pictures");

    if (backButton) {
        backButton.addEventListener("click", () => {

            window.location.href = "leash.html";
        });
    }
};

function bigBeigePic() {

    const beigeBowlArticle = document.getElementById("beigebowl-zoom");
    const beigeBowlButton = document.getElementById("beigebowl-big");

    if (beigeBowlButton) {

        if (beigeBowlArticle.classList.contains("hidden")) {

            beigeBowlButton.addEventListener("click", () => {

                beigeBowlArticle.classList.remove("hidden");
            });

        };
    };
};

function goBackTwo() {

    const backButtonTwo = document.getElementById("close-pictures2");

    if (backButtonTwo) {
        backButtonTwo.addEventListener("click", () => {

            window.location.href = "beigebowl.html";
        });
    }
};

function bigBowlPic() {

    const catBowlArticle = document.getElementById("catbowl-zoom");
    const catBowlButton = document.getElementById("catbowl-big");

    if (catBowlButton) {

        if (catBowlArticle.classList.contains("hidden")) {

            catBowlButton.addEventListener("click", () => {

                catBowlArticle.classList.remove("hidden");
            });

        };
    };
};

function goBackThree() {

    const backButtonThree = document.getElementById("close-pictures3");

    if (backButtonThree) {
        backButtonThree.addEventListener("click", () => {

            window.location.href = "catbowl.html";
        });
    }
};

function bigBedPic() {

    const catBedArticle = document.getElementById("catbed-zoom");
    const catBedButton = document.getElementById("catbed-big");

    if (catBedButton) {

        if (catBedArticle.classList.contains("hidden")) {

            catBedButton.addEventListener("click", () => {

                catBedArticle.classList.remove("hidden");
            });

        };
    };
};

function goBackFour() {

    const backButtonFour = document.getElementById("close-pictures4");

    if (backButtonFour) {
        backButtonFour.addEventListener("click", () => {

            window.location.href = "catbed.html";
        });
    }
};

function bigToyPic() {

    const catToyArticle = document.getElementById("cattoy-zoom");
    const catToyButton = document.getElementById("cattoy-big");

    if (catToyButton) {

        if (catToyArticle.classList.contains("hidden")) {

            catToyButton.addEventListener("click", () => {

                catToyArticle.classList.remove("hidden");
            });

        };
    };
};

function goBackFive() {

    const backButtonFive = document.getElementById("close-pictures5");

    if (backButtonFive) {
        backButtonFive.addEventListener("click", () => {

            window.location.href = "cattoy.html";
        });
    }
};

function itemInBasket() {

    const inBasketArticle = document.getElementById("inBasket");
    const inBasketButton = document.getElementById("shoppingbasket");

    if (inBasketButton) {

        if (inBasketArticle.classList.contains("hidden")) {

            inBasketButton.addEventListener("click", () => {

                inBasketArticle.classList.remove("hidden");
            });

        };
    };
};

function basketOptions() {

    const inBasketArticle = document.getElementById("inBasket");
    const keepShopping = document.getElementById("keepShopping");
    const toBasket = document.getElementById("toBasket");

    if (keepShopping || toBasket) {
        keepShopping.addEventListener("click", () => {

            inBasketArticle.classList.add("hidden");
        });

        toBasket.addEventListener("click", () => {

            window.location.href = "shoppingbasket.html";
        });
    }
};

function functionMenu() {

    const menu = document.getElementById("categories");

    if (window.innerWidth <= 980) {
        menu.classList.add("hidden");
        document.getElementById("categories-head").innerHTML="Produktmeny &#x21e9;"

    } else {
        menu.classList.remove("hidden");
        document.getElementById("categories-head").innerHTML="Produktkategorier: "
    }

};

function getMenu() {

    const menu = document.getElementById("categories");
    const menuLink = document.getElementById("categories-head");
    const closeMenu = document.getElementById("close-menu");

    menuLink.addEventListener("click", () => {

        if (menu.classList.contains("hidden")) {
            menu.classList.remove("hidden");
            closeMenu.classList.remove("hidden");
            menuLink.classList.add("hidden");
        }
    });

};

function awayMenu() {

    const menu = document.getElementById("categories");
    const closeMenu = document.getElementById("close-menu");
    const menuLink = document.getElementById("categories-head");

    closeMenu.addEventListener("click", () => {

        if (menu.classList.contains("hidden") === false) {
            menu.classList.add("hidden");
            closeMenu.classList.add("hidden");
            menuLink.classList.remove("hidden");
        }
    });
};