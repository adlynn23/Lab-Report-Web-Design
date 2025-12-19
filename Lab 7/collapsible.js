// document.addEventListener("DOMContentLoaded", function () {
//     const collapsibleButton = document.querySelector
//         (".collapsible");
//     const content = document.querySelector(".content");
//     collapsibleButton.addEventListener("click", function () {
//         if (content.style.display === "block") {
//             content.style.display = "none";
//         } else {
//             content.style.display = "block";
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const collapsibleButton = document.querySelector(".collapsible");
    const content = document.querySelector(".content");
    const icon = document.querySelector("#icon"); // Get the icon span

    collapsibleButton.addEventListener("click", function () {
        if (content.style.display === "block") {
            content.style.display = "none";
            icon.textContent = "+"; // Change back to plus
        } else {
            content.style.display = "block";
            icon.textContent = "-"; // Change to minus
        }
    });
});