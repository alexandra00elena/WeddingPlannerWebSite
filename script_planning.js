document.getElementById('wedding-schedule').addEventListener('submit', function(event) {
    event.preventDefault();

    const moment = document.getElementById('moment').value;
    const location = document.getElementById('location').value;
    const time = document.getElementById('time').value;

    const listItem = document.createElement('li');
    listItem.textContent = `${moment} la ${location} la ora ${time}`;
    document.getElementById('schedule-list').appendChild(listItem);

    // Reset the form fields
    document.getElementById('wedding-schedule').reset();
});