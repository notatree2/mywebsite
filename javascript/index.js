
console.log("yo welcome to the console how u been today, checking up on my website? pretty cool u can do that btw i aint stopping u lol")

const allA = document.getElementsByTagName("a")

for(let a of allA) {
    a.style.justifyContent = "space-evenly"
    a.style.color = "blue"
}

const allP = document.getElementsByTagName("p")

allP.forEach(f => {
    f.style.color = "blue"
})