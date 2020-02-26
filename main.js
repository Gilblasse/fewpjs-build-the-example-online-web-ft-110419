// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
let errorMessage = document.querySelector("#modal");
let hearts = document.querySelectorAll(".like-glyph");

for (heart of hearts) {
  heart.addEventListener("click", toggleHeart);
}

function toggleHeart(e) {
  let currentheart = e.target;

  mimicServerCall()
    .then(serverMessage => {
      if (currentheart.innerText == EMPTY_HEART) {
        currentheart.innerText = FULL_HEART;
        currentheart.className = "activated-heart";
      } else {
        currentheart.innerText = EMPTY_HEART;
        currentheart.className = "";
      }
      errorMessage.setAttribute("class", "hidden");
    })
    .catch(error => {
      errorMessage.setAttribute("class", "");
    });
}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
