const buttonRef = document.querySelector("button")

function addNewButtonAndPara(){
    // 2 x createElement()
    const newButton = document.createElement("button")
    // make this button respond to "mouseover" by changing its bg to green
    const newPara = document.createElement("p")
    // 2 x parent(document.body).appendChild()
    document.body.appendChild(newButton)
    document.body.appendChild(newPara)
    // 2 x textContent .innerText
    newButton.textContent = "purple"
    newPara.textContent = "Some text"
    newButton.addEventListener("mouseover", bgChange)
}
buttonRef.addEventListener("click", addNewButtonAndPara)
// buttonRef.addEventListener("mouseover", bgChange)

function alertUser() {
    alert("You clicked!!!")
    // buttonRef.removeEventListener("click", alertUser)
}

// buttonRef.addEventListener("click", alertUser, {once:true})

function changeBGPink(){
    // document.body.style.backgroundColor = "pink";
    document.body.classList.add("pinkBG")
}
// buttonRef.addEventListener("click", changeBGPink)

function changeText(){   
    if (buttonRef.textContent === "Click Me!"){
        buttonRef.textContent = "Clicked!"
    }else{
        buttonRef.textContent = "Click Me!"
    }
}
// buttonRef.addEventListener("click", changeText)

function updateImage(){
    const image = document.querySelector("#shoppingCart")
    image.setAttribute(
        "src",
        "images/263142.png"
    );
    image.setAttribute("alt", "shopping Cart")
    image.setAttribute("width", 50)
    image.setAttribute("height", 50)
}
// buttonRef.addEventListener("click", updateImage)

// 1. find the element
const buttonContainer = document.querySelector(".button-container");

// 2. define a function
console.log(buttonContainer)
function bgChange(event){
    // console.log("buttons clicked", event.target.tagName);
    if (event.target.tagName === "BUTTON"){
    event.target.classList.add("greenBG");
    }
};

// 3. use addEventListener
buttonContainer.addEventListener("mouseover", bgChange);

function changeText(event) {
    console.log(event.target.textContent)
    // if red is clicked -> change the color to red
    const color = event.target.textContent
    // add inline style
    event.target.style.color = color
}
buttonContainer.addEventListener("click", changeText);

