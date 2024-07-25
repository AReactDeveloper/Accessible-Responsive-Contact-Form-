//my vars
const form = document.getElementById('myForm')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
//radio box 
const general = document.getElementById('general')
const support = document.getElementById('support')
//
const message = document.getElementById('message')
const consent = document.getElementById('consent')
const submitMsg = document.querySelector('.succesMsg')


const colorString = 'hsl(0, 66%, 54%)'

let isValid = true;


const validateInput = (input)=>{
    //validate firstname
    if(input.value == ''){
        isValid = false
        input.style.borderColor = colorString
        input.style.outlineColor = colorString
        input.nextElementSibling.style.display = 'block'
        input.nextElementSibling.style.color = colorString
    }else{
        isValid = true;
    }
}

form.addEventListener('submit',e=>{
    e.preventDefault()

    validateInput(firstName)
    validateInput(lastName)
    validateInput(message)

     //validate email
     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     if (!emailPattern.test(email.value)) {
         isValid = false;
         email.style.borderColor = colorString
         email.style.outlineColor = colorString
         email.nextElementSibling.style.display = 'block'
         email.nextElementSibling.style.color = colorString
     }else{
         isValid = true;
     }


     //validate radio
     //check if either one of them is checked 
     if(general.checked || support.checked){
         isValid = true;
     }else{
         document.getElementById('queryError').style.display = 'block'
         document.getElementById('queryError').style.color = colorString
         isValid = false;
     }

     //consent validation
     if(consent.checked){
        isValid = true
     }else{
        consent.parentElement.nextElementSibling.style.display = 'block'
         consent.parentElement.nextElementSibling.style.color = colorString
         isValid = false;
     }

    if(isValid){
        submitMsg.style.display = 'block'
        setInterval(() => {
            location.reload()
        }, 2500);
    }
})