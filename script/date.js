function updateLiveDate() {
  const currentDateElement = document.getElementById("current-date");

  if (!currentDateElement) {
    console.error("Element with ID 'current-date' not found!");
    return;
  }
  const now = new Date();
  const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options).replace(',', '');
  currentDateElement.innerText = formattedDate;
}

document.addEventListener("DOMContentLoaded", updateLiveDate);
setInterval(updateLiveDate, 1000);