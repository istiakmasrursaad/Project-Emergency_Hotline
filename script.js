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
    alert("Heart added");
  });
}

//copy counter
function copyCounter(id) {
  let text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text);
  alert(text + " -Copied to clipboard & copt counter increased");
  let copyCount = parseInt(document.getElementById("copy-count").innerText);
  document.getElementById("copy-count").innerText = copyCount + 1;
}
