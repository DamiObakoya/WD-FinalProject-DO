document.addEventListener("DOMContentLoaded", () => {
    console.log("Campus Sports Hub Loaded!");
});

// Button placeholder function
function comingSoon() {
    alert("Feature coming soon!");
}

// API integration attempt (MVP requirement)
async function fetchSportsData() {
    try {
        const response = await fetch("https://www.thesportsdb.com/api/v1/json/3/all_sports.php");
        const data = await response.json();
        console.log("Sports API Data:", data);
    } catch (error) {
        console.log("API not fully connected yet (MVP stage).");
    }
}

fetchSportsData();