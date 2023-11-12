document.addEventListener("DOMContentLoaded", function () {
    // Event listener for the "Mek mi play" button
    var playButton = document.getElementById("playButton");
    if (playButton) {
        playButton.addEventListener("click", function () {
            // Navigate to the "play.html" page when the button is clicked
            window.location.href = "play.html";
        });
    }

    function showPopup() {
        var popupOverlay = document.getElementById("popup-overlay");
        popupOverlay.style.display = "flex";
    }

    // Function to hide the pop-up
    function hidePopup() {
        var popupOverlay = document.getElementById("popup-overlay");
        popupOverlay.style.display = "none";
    }

    // Event listener for the "How to play" button
    var howToPlayButton = document.getElementById("howToPlayButton");
    if (howToPlayButton) {
        howToPlayButton.addEventListener("click", showPopup);
    }

    // Event listener for the "Close" button in the pop-up
    var closePopupButton = document.getElementById("close-popup");
    if (closePopupButton) {
        closePopupButton.addEventListener("click", hidePopup);
    }
});
