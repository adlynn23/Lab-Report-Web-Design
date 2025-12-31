
function submit() {
    // Soalan minta paparkan alert ini 
    alert("You Have Done The Submission!");
}

document.getElementById("submitContact").addEventListener("click", function(event){
  event.preventDefault()
});

function submitContact() {
    alert("Thank You. Your message has been sent!")
}