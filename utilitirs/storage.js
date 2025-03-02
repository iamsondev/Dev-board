
const buttons = document.querySelectorAll(".completeBtn");


for (const button of buttons) {
button.addEventListener("click", function () {
alert("Board Updated successfully");



let taskAssigned = document.getElementById("taskAssigned");
let checkbox = document.getElementById("checkbox");

let taskCount = parseInt(taskAssigned.textContent);
let checkboxCount = parseInt(checkbox.textContent);


if (taskCount > 0) {
taskAssigned.textContent = taskCount - 1;

checkbox.textContent = checkboxCount + 1;

}







if (checkboxCount + 1 > 28) {
alert("You successfully done with your task");
}
});
}