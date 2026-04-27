// Page load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Campus Sports Hub Loaded!");
});

// Button interaction
function comingSoon() {
    alert("Feature coming soon!");
}

// API fetch + display
async function fetchSportsData() {
    const apiDiv = document.getElementById("apiData");

    try {
        const response = await fetch("https://www.thesportsdb.com/api/v1/json/3/all_sports.php");
        const data = await response.json();

        apiDiv.innerHTML = `<p>Example Sport: ${data.sports[0].strSport}</p>`;

    } catch (error) {
        if (apiDiv) {
            apiDiv.innerHTML = "API could not load.";
        }
    }
}

fetchSportsData();