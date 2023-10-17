let contents = ["Rent a Car Directly From Owner ", "Rent a Car Anywhere Anytime ", "SRI LANKA’S NO. 1 VEHICLE SHARING NETWORK "];

let charCount = 0;

let wordCount = 0;

setInterval(function () {
    animateText();
}, 400);

function animateText() {

    let content = contents[wordCount].substring(0, charCount) + "|";

    $("#content").text(content);

    charCount++;

    if (charCount == contents[wordCount].length) {

        charCount = 0;

        wordCount++;

        if (wordCount == contents.length) {

            wordCount = 0;

        }

    }

};