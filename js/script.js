// Clears all boxes checked
function clearBoxes() {
    var checkedBoxes = document.querySelectorAll('input:checked')
    for (var i = 0; i < checkedBoxes.length; i++) {
        checkedBoxes[i].checked = false;
    }
}

/* function fill() {
    var checkedBoxes = document.querySelectorAll('input')
    for (var i = 0; i < checkedBoxes.length; i++) {
        checkedBoxes[i].checked = true;
    }
} */

//Calculates the score
function calculateScore() {
    var total = document.querySelectorAll('input[type="checkbox"]:checked')
    var score = 111 - total.length
    var image = ""
    //Gives the meaning of the score
    var meaning;
    if (score >= 111) {
        meaning = "Are you even playing Genshin?"
        image = "<img src=\"img/albedo_confused.webp\">"
    } else if (score >= 110) {
        meaning = "You seem like a relatively new player, or you just have an enormous amount of luck. \nBut here, some flowers your you to guide you through your adventure."
        image = "<img src=\"img/albedo_flowers.webp\">"
    } else if (score >= 90) {
        meaning = "You're more like a casual player, you've been here since a \ndecent amount of time and enjoy your experience with the game.\n(Or you hate the game but enjoys suffering)"
        image = "<img src=\"img/albedo_look.webp\">"
    } else if (score >= 70) {
        image = "<img src=\"img/albedo_look.webp\">"
        meaning = "You know your way into the game and seem to be happy with how your characters are acting.\nYou still like the lore and every single little thing about the game."
    } else if (score >= 50) {
        meaning = "You seem to make a descent amount of damage and have been there since a long amount of time.\nThough, you either really like the lore and feed on it, or you're just very attached to the game.\n(Don't worry, I'm the same, and I'm loving the lore)."
        image = "<img src=\"img/albedo_snow.webp\">"
    } else if (score >= 35) {
        meaning = "You've been there since a long time, huh?\nHow are you holding up? Do you need help with anything?"
        image = "<img src=\"img/albedo_snow.webp\">"
    } else if (score >= 11) {
        meaning = "You should really think about touching grass, but it's alright, the grass in Genshin counts."
        image = "<img src=\"img/albedo_look_away.png\">"
    } else {
        meaning = "You good?"
        image = "<img src=\"img/albedo_look_away.png\" width=25%>"
    }

    document.querySelector(".score").innerHTML = "<p><b>Your Score: </b>" + "<br><span>" + score.toString() + "</span></p>" + image
    document.querySelector(".meaning").innerText = meaning
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Clears the page
function clearPage() {
    clearBoxes()
    var scoreDiv = document.querySelector(".score");
    var meaningDiv = document.querySelector(".meaning");
    scoreDiv.innerHTML = ""
    meaningDiv.innerHTML = ""
}