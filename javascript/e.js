
console.log("yo welcome to the console how u been today, checking up on my website? pretty cool u can do that btw i aint stopping u lol")

// classlists, use later, check notes
const links = document.querySelectorAll("#link")







const f = document.getElementById("fun")
f.style.color = "#4470AD"


const easteregg = document.getElementById("secret")
easteregg.style.fontSize = "8px"
document.addEventListener("keydown", (event) => {
    event.preventDefault()
    if(event.key === "p") {
        easteregg.textContent = "psst, hey, its me! you found an easter egg!"
    }
})
document.addEventListener("keyup", (event) => {
    easteregg.textContent = " "
})