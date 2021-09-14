const userName=document.getElementById("username"),email=document.getElementById("email"),confirmEmail=document.getElementById("confirmemail"),password=document.querySelector("#password"),btnSubmit=document.querySelector("#btnsubmit")
let chechUserName=false,checkEmail=false,checkConfirmEmail=false,checkPassword=false
function validateEmail(email){let regex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return regex.test(email);}
function validatePassword(password){if(password.match(/[0-9]/g)&&password.match(/[A-Z]/g)&&password.match(/[a-z]/g)&&password.match(/[^a-zA-Z\d]/g)&&password.length>=10)
return true
else
return false}
userName.addEventListener('focusout',()=>{let parentUserName=userName.parentNode
let errorMsg=document.createElement("strong")
errorMsg.innerHTML="Le champ est obligatoire !"
let getErrorMsg=parentUserName.querySelector("strong")
if(userName.value===""){parentUserName.classList.add("error")
parentUserName.classList.remove("success")
if(!getErrorMsg)
parentUserName.appendChild(errorMsg)}else{parentUserName.classList.add("success")
parentUserName.classList.remove("error")
checkUserName=true
if(getErrorMsg)
parentUserName.removeChild(getErrorMsg)}})
email.addEventListener('focusout',()=>{let parentEmail=email.parentNode
let errorMsg=document.createElement("strong")
errorMsg.innerHTML="Le champ est obligatoire !"
let getErrorMsg=parentEmail.querySelector("strong")
if(email.value===""){parentEmail.classList.add("error")
parentEmail.classList.remove("success")
if(!getErrorMsg)
parentEmail.appendChild(errorMsg)}else{if(getErrorMsg)
parentEmail.removeChild(getErrorMsg)
if(validateEmail(email.value)){parentEmail.classList.add("success")
parentEmail.classList.remove("error")
checkEmail=true}else{parentEmail.classList.add("error")
parentEmail.classList.remove("success")
errorMsg.innerHTML="Le format de l'email n'est pas valide !"
parentEmail.appendChild(errorMsg)}}})
confirmEmail.addEventListener('focusout',()=>{let parentConfirmEmail=confirmEmail.parentNode
let errorMsg=document.createElement("strong")
errorMsg.innerHTML="Le champ est obligatoire !"
let getErrorMsg=parentConfirmEmail.querySelector("strong")
if(confirmEmail.value===""){parentConfirmEmail.classList.add("error")
parentConfirmEmail.classList.remove("success")
if(!getErrorMsg)
parentConfirmEmail.appendChild(errorMsg)}else{if(getErrorMsg)
parentConfirmEmail.removeChild(getErrorMsg)
if(confirmEmail.value===email.value){parentConfirmEmail.classList.add("success")
parentConfirmEmail.classList.remove("error")
checkConfirmEmail=true}else{parentConfirmEmail.classList.add("error")
parentConfirmEmail.classList.remove("success")
errorMsg.innerHTML="Les deux emails ne sont pas identiques !"
parentConfirmEmail.appendChild(getErrorMsg)}}})
password.addEventListener('keyup',()=>{let parentPassword=password.parentNode
let errorMsg=document.createElement("strong")
errorMsg.innerHTML="Le champ est obligatoire !"
let getErrorMsg=parentPassword.querySelector("strong")
if(password.value===""){parentPassword.classList.add("error")
parentPassword.classList.remove("success")
if(!getErrorMsg)
parentPassword.appendChild(errorMsg)}else{if(getErrorMsg)
parentPassword.removeChild(getErrorMsg)
if(validatePassword(password.value)){parentPassword.classList.add("success")
parentPassword.classList.remove("error")
checkPassword=true
errorMsg.innerHTML="Le mot de passe est fort !"
parentPassword.appendChild(errorMsg)}else{parentPassword.classList.add("error")
parentPassword.classList.remove("success")
errorMsg.innerHTML="Le mot de passe est faible !"
parentPassword.appendChild(errorMsg)}}})
btnSubmit.addEventListener('click',(e)=>{e.preventDefault()
if(checUserName&&checkEmail&&checkConfirmEmail&&checkPassword)
document.querySelector("form").submit()
else
console.log("erreur")})