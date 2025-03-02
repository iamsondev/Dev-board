document.addEventListener("DOMContentLoaded", function () {
    const completeBtns = document.querySelectorAll(".completeBtn");
    const taskAssigned = document.getElementById("taskAssigned");
    const checkbox = document.getElementById("checkbox");
    const activityLog = document.getElementById("activitylog");
    const clearHistoryBtn = document.getElementById("clear-history");

    let completedCount = 0;

    
    for (let i = 0; i < completeBtns.length; i++) {
        completeBtns[i].addEventListener("click", function () {
            if (!completeBtns[i].disabled) {
                alert("Board update successfully");

                // Disable the button after first click
                completeBtns[i].disabled = true;
                completeBtns[i].style.backgroundColor = "#ff1000"; // Optional: Change button color

                // Decrease the taskAssigned count
                let assignedCount = parseInt(taskAssigned.innerText);
                if (assignedCount > 0) {
                    taskAssigned.innerText = assignedCount - 1;
                }

                // Increase the checkbox count
                let checkboxCount = parseInt(checkbox.innerText);
                checkbox.innerText = checkboxCount + 1;

                // Increment completed count
                completedCount++;

                // Log activity with timestamp
                let timestamp = new Date().toLocaleTimeString();
                let logEntry = document.createElement("p");
                logEntry.innerText = `${completeBtns[i].innerText} completed at ${timestamp}`;
                activityLog.appendChild(logEntry);

                // Check if all tasks are completed
                if (completedCount === completeBtns.length) {
                    alert("You completed your task successfully!");
                }
            }
        });
    }

    // ✅ Clear only the logs inside #activitylog but keep it visible
    clearHistoryBtn.addEventListener("click", function () {
        activityLog.innerHTML = ""; // Clears only the log entries, NOT the div
    });
});
  
  
  
  
  
  
  
//   document.addEventListener("DOMContentLoaded", function () {
//     const completeBtns = document.querySelectorAll(".completeBtn");
//     const taskAssigned = document.getElementById("taskAssigned");
//     const checkbox = document.getElementById("checkbox");
//     const activityLog = document.getElementById("activitylog");
//     const clearHistoryBtn = document.getElementById("clear-history");

//     let completedCount = 0;

//     completeBtns.forEach((btn) => {
//         btn.addEventListener("click", function () {
//             if (!btn.disabled) {
//                 alert("Board update successfully");

//                 // Disable the button after first click
//                 btn.disabled = true;
//                 btn.style.backgroundColor = "#ccc"; // Optional: Change button color to indicate it's disabled

//                 // Decrease the taskAssigned count
//                 let assignedCount = parseInt(taskAssigned.innerText);
//                 if (assignedCount > 0) {
//                     taskAssigned.innerText = assignedCount - 1;
//                 }

//                 // Increase the checkbox count
//                 let checkboxCount = parseInt(checkbox.innerText);
//                 checkbox.innerText = checkboxCount + 1;

//                 // Increment completed count
//                 completedCount++;

//                 // Log activity with timestamp
//                 let timestamp = new Date().toLocaleTimeString();
//                 let logEntry = document.createElement("p");
//                 logEntry.innerText = `${btn.innerText} completed at ${timestamp}`;
//                 activityLog.appendChild(logEntry);

//                 // Check if all tasks are completed
//                 if (completedCount === completeBtns.length) {
//                     alert("You completed your task successfully!");
//                 }
//             }
//         });
//     });

//     // ✅ Clear only the history logs but keep the "Clear History" button visible
//     clearHistoryBtn.addEventListener("click", function () {
//         activityLog.innerHTML = ""; // Clears only the log entries
//     });
// });




// document.addEventListener("DOMContentLoaded", function () {
//     const completeBtns = document.querySelectorAll(".completeBtn");
//     const taskAssigned = document.getElementById("taskAssigned");
//     const checkbox = document.getElementById("checkbox");
//     const activityLog = document.getElementById("activitylog");

//     let completedCount = 0;

//     for (const btn of completeBtns) {
//         btn.addEventListener("click", function () {
//             alert("Board update successfully");

//             // Disable the button after first click
//             btn.disabled = true;

//             // Decrease the taskAssigned count
//             let assignedCount = parseInt(taskAssigned.innerText);
//             if (assignedCount > 0) {
//                 taskAssigned.innerText = assignedCount - 1;
//             }

//             // Increase the checkbox count
//             let checkboxCount = parseInt(checkbox.innerText);
//             checkbox.innerText = checkboxCount + 1;

//             // Increment completed count
//             completedCount++;

//             // Log activity with timestamp
//             let timestamp = new Date().toLocaleTimeString();
//             let logEntry = document.createElement("p");
//             logEntry.innerText = `${btn.innerText} completed at ${timestamp}`;
//             activityLog.appendChild(logEntry);

//             // Check if all tasks are completed
//             if (completedCount === completeBtns.length) {
//                 alert("You completed your task successfully!");
//             }
//         });
//     }
// });





// document.addEventListener("DOMContentLoaded", function () {
//     const completeBtns = document.querySelectorAll(".completeBtn");
//     const taskAssigned = document.getElementById("taskAssigned");
//     const checkbox = document.getElementById("checkbox");

//     let completedCount = 0;

//     for (const btn of completeBtns) {
//         btn.addEventListener("click", function () {
//             alert("Board update successfully");

            
//             this.disabled = true;

//             // Decrease the taskAssigned count
//             let assignedCount = parseInt(taskAssigned.innerText);
//             if (assignedCount > 0) {
//                 taskAssigned.innerText = assignedCount - 1;
//             }

//             // Increase the checkbox count
//             let checkboxCount = parseInt(checkbox.innerText);
//             checkbox.innerText = checkboxCount + 1;

//             // Increment completed count
//             completedCount++;

//             // Check if all tasks are completed
//             if (completedCount === completeBtns.length) {
//                 alert("You completed your task successfully!");
//             }
//         });
//     }
// });
