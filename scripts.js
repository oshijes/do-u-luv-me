// Click Yes button - Show Popup
function clickYesButton() {
    document.getElementById('popup').style.display = 'block'; // Show popup
}

// Close popup function
function closePopup() {
    document.getElementById('popup').style.display = 'none'; // Hide popup
}

// Move button on hover
function hoverNoButton() {
    let noButton = document.getElementById('no-button');

    let x = Math.random() * (window.innerWidth - noButton.clientWidth);
    let y = Math.random() * (window.innerHeight - noButton.clientHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
}
