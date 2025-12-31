// create array
const projects=[
    {id:1, name:'SEO Audit', price:'RM5000'},
    {id:2, name:"Website Development", price:'RM15000'},
    {id:3, name:"Digital Marketing", price:'RM8000'}
];

// variable untuk simpan html table rows
let text="";
// loop
for(i=0;i<projects.length;i++){
    text+="<tr>";
    text+="<td>"+projects[i].name+"</td>";
    text+="<td>"+projects[i].price+"</td>";
    text+="<td><button class=\"btn btn-primary\" onclick=\"goToForm()\">Request Quote</button></td>";
}
document.getElementById("ProjectTable").innerHTML=text;


function goToForm(){
    document.getElementById("quotation").scrollIntoView({
        behavior: 'smooth'
    });
}

// select the form
const form=document.getElementById('quoteForm');

form.addEventListener("submit",function(e){
    const voucher=document.getElementById('voucher').value;

    // check if voucher starts with DEV
    if(!voucher.startsWith("DEV")){
        e.preventDefault();
        alert("Invalid Voucher Code");
    }
})
