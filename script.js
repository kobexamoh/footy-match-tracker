// variables and constants
const apiKEY = ""; // replace with your own API key
let baseURL = "https://v3.football.api-sports.io/leagues?id=4";

// Headers
let requestHeaders = new Headers();
requestHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");
requestHeaders.append("x-rapidapi-key", apiKEY);

let response = await fetch(baseURL, {
    "method": "GET",
    "headers": requestHeaders
});

if (response.ok) {
    let results = await response.json();
    console.log(results);
} else {
    alert("HTTP-Error: " + response.status);
}


// Create player card
function createPlayerCard() {
    let playerDiv = document.createElement("div");
    playerDiv.classList.add("playerCard", "playerBox");
}