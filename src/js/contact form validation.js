let fname=document.getElementById("fname");
let email=document.getElementById("email");
let phone=document.getElementById("phnumber");
let lname=document.getElementById("lname");
let text= document.getElementById("description");
function contactForm(){
    if (fname.value.trim()===""){
        let Errormessage=document.getElementById("error");
        Errormessage.style.visibility="visible";
        let fnamevalidate=document.getElementById("fnamevalidate");
        fnamevalidate.innerText="First Name is Not Empty";
    }
    if (lname.value.trim()===""){
        let Errormessage=document.getElementById("error1");
        Errormessage.style.visibility="visible";
        let fnamevalidate=document.getElementById("lnamevalidate");
        fnamevalidate.innerText="Last Name is Not Empty";
    }
    if (email.value.trim()===""){
        let Errormessage=document.getElementById("error2");
        Errormessage.style.visibility="visible";
        let lnamevalidate=document.getElementById("emailvalidate");
        lnamevalidate.innerText="Email is Not Empty";
    }
    if (phone.value.trim()===""){
        let Errormessage=document.getElementById("error3");
        Errormessage.style.visibility="visible";
        let fnamevalidate=document.getElementById("phonevalidate");
        fnamevalidate.innerText="Phone Number is Not Empty";
    }
    if (text.value.trim()===""){
        let Errormessage=document.getElementById("error4");
        Errormessage.style.visibility="visible";
        let fnamevalidate=document.getElementById("textvalidate");
        fnamevalidate.innerText="You Cannot Write Any text";
    }
}