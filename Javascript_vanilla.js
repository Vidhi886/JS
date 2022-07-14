function javaExternalAlert(){
    alert("External Alert.");
}
function javaExternalConfirm(){
    if(confirm("Are you sure..?")){
        alert("Yesss");
    }
    else{
        alert("Nooo")
    }
}
function javaExternalPrompt(){
    var fname=prompt("Enter First name here...");
    var lname=prompt("Enter Last name here...");
    alert(fname+" "+lname);
}