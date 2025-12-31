function sendEmail(){
    alert("Task details have been sent to your email!")
};

function validateForm(){
    let x=document.forms["myForm"]["f.name"].value;
    if(x!="@"){
        alert("Error: Invalid Email Address.");
        return false;
    }
}