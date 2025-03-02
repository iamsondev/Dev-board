function updateLiveDate() {
  const currentDateElement = document.getElementById("current-date");

  if (!currentDateElement) {
      console.error("Element with ID 'current-date' not found!");
      return;
  }

  const now = new Date();

  // Format the date as "Tue Mar 05 2025"
  const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options).replace(',', '');

  // Update the date in the HTML
  currentDateElement.innerText = formattedDate;
}

// ✅ Set the date when the page loads
document.addEventListener("DOMContentLoaded", updateLiveDate);

// ✅ Keep updating every second to ensure real-time changes
setInterval(updateLiveDate, 1000);