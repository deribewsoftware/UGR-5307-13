const username=document.getElementById('username')
const password=document.getElementById('password')
const email=document.getElementById('email')

const fname=document.getElementById('fname')
const phone=document.getElementById('phone')

const user=document.getElementById('user')
const pass=document.getElementById('pass')

function LoginValidate(){
    //usernam can not be empty
    if( user.value.trim()===""){
        
        let Errormessage=document.getElementById('uservalidate');
        Errormessage.style.visibility="visible";
        let icon= document.getElementById('icon')
       icon.style.visibility="visible";
        Errormessage.innerText="  Username cannot be empty";
    
        
    
    
    }
    //password cannot be empty
    if( pass.value.trim()===""){
        
        let Errormessage=document.getElementById('passwordvalidate');
        Errormessage.style.visibility="visible";
        let icon= document.getElementById('icon');
       icon.style.visibility="visible";
        Errormessage.innerText="  Password cannot be empty";
    
        
    
    
    }

}
function ValidateForm(){
    //First Name can't be empty
    if( fname.value.trim()===""){
        let parent=fname.parentElement;
        let Errormessage=parent.querySelector('span')
        Errormessage.style.visibility="visible";
        parent.querySelector('small').innerText="  Name cannot be empty";
    
        
    
    
    }
    // Last Name cannot be empty
    if( phone.value.trim()===""){
        let parent=phone.parentElement;
        let Errormessage=parent.querySelector('span')
        Errormessage.style.visibility="visible";
        parent.querySelector('small').innerText="  Phone Number cannot be empty";
    
        
    
    
    }
    
    //Username cannot be empty
if( username.value.trim()===""){
    let parent=username.parentElement;
    let Errormessage=parent.querySelector('span')
    Errormessage.style.visibility="visible";
    parent.querySelector('small').innerText="  Username cannot be empty";

    


}
//username is less than 10 digits
if( username.value.length>10){
    let parent=school.parentElement;
    let Errormessage=parent.querySelector('span')
    Errormessage.style.visibility="visible";
    parent.querySelector('small').innerText="  Username cannot be greater than 10";
    

    


}
//email can't be empty
if( email.value.trim()===""){
    let parent=email.parentElement;
    let Errormessage=parent.querySelector('span')
    Errormessage.style.visibility="visible";
    parent.querySelector('small').innerText="  Email cannot be empty";

    


}
// password cannot be empty
if( password.value.trim()===""){
    let parent=password.parentElement;
    let Errormessage=parent.querySelector('span')
    Errormessage.style.visibility="visible";
    parent.querySelector('small').innerText="  Password cannot be empty";

    


}
}
document.getElementById("submit").addEventListener("click",(event)=>{
    event.preventDefault();
    ValidateForm();

});

function Onsuccess(input){

    let parent=input.parentElement;
    let message=parent.querySelector("span");
    parent.classlist.remove("error");
    parent.classList.add("success");
}
function OnError(input,message){

}