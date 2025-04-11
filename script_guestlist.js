document.getElementById('add-guest').addEventListener('click', function() {
    const guestName = prompt("Introdu numele invitatului:");
    if (guestName) {
        const guestList = document.getElementById('guest-list');
        const newGuest = document.createElement('div');
        newGuest.textContent = guestName;
        guestList.appendChild(newGuest);
    }
});