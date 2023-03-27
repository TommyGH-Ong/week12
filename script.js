const buttonRef = document.querySelector("button")

function alertUser() {
    alert("You clicked!!!")
    // buttonRef.removeEventListener("click", alertUser)
}

buttonRef.addEventListener("click", alertUser, {once:true})


