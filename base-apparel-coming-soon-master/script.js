const form = document.querySelector(".container form");
const email = document.querySelector(".container form input[type=email]");

function checkEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let emailValue = email.value;
    if(emailValue){
        form.classList.remove("error");
    }else{
        form.classList.add("error");
    }
})