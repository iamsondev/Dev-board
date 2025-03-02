document.addEventListener("DOMContentLoaded", function () {
  const completeBtns = document.querySelectorAll(".completeBtn button");
  const taskAssigned = document.getElementById("taskAssigned");
  const checkbox = document.getElementById("checkbox");
  const activityLog = document.getElementById("activitylog");
  const clearHistoryBtn = document.getElementById("clear-history");

  let completedCount = 0;

  for (let btn of completeBtns) {
      btn.addEventListener("click", function () {
          if (!btn.disabled) {
              alert("Board update successfully");

              btn.disabled = true;
              btn.style.backgroundColor = "#8a8787";
              btn.style.cursor = "not-allowed";

              let taskCard = btn.closest(".w-80"); 
              let taskTitle = taskCard.querySelector("p.text-xl.font-semibold").innerText; 

              let assignedCount = parseInt(taskAssigned.innerText);
              if (assignedCount > 0) {
                  taskAssigned.innerText = assignedCount - 1;
              }

              let checkboxCount = parseInt(checkbox.innerText);
              checkbox.innerText = checkboxCount + 1;

              completedCount++;

              let timestamp = new Date().toLocaleTimeString();
              let logEntry = document.createElement("p");
              logEntry.innerText = `You have completed the task ${taskTitle}  at ${timestamp}`;
              activityLog.appendChild(logEntry);

              if (completedCount === completeBtns.length) {
                  alert("You completed your task successfully!");
              }
          }
      });
  }

  clearHistoryBtn.addEventListener("click", function () {
      activityLog.innerHTML = "";
  });
});