
// heartCounting function
function heartNumber(id) {
    const heartValue = document.getElementById(id).innerText;
    return parseInt(heartValue);
}
let initialHearts = document.getElementsByClassName("heart");
for (let i = 0; i < initialHearts.length; i++) {
    initialHearts[i].addEventListener("click", function () {
        let heartValue = heartNumber("heart-count");
        let heartIncrease = heartValue + 1;
        document.getElementById("heart-count").innerText = heartIncrease;
        // alert("Heart added");
    });
}



