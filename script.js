function addEvent() {
    const eventName = document.getElementById("eventName").value;
    const eventDate = document.getElementById("eventDate").value;
    const eventStartTime = document.getElementById("eventStartTime").value;
    const eventEndTime = document.getElementById("eventEndTime").value;

    if (eventName && eventDate && eventStartTime && eventEndTime) {
        const eventList = document.getElementById("events");
        const listItem = document.createElement("li");
        listItem.innerText = `${eventName} - Datum: ${eventDate}, Uhrzeit: von ${eventStartTime} bis ${eventEndTime}`;
        eventList.appendChild(listItem);

        // Clear input fields
        document.getElementById("eventName").value = "";
        document.getElementById("eventDate").value = "";
        document.getElementById("eventStartTime").value = "";
        document.getElementById("eventEndTime").value = "";
    }
}
