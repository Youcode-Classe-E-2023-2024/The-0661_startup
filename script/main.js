let e = document.getElementById("clothes")
let s = document.getElementById("sex")

let eq = document.getElementById("eq")
let se = document.getElementById("se")

function toggleSubs(e, s) {
    e.addEventListener("mouseover", function () {
        s.style.display = "block"
    })
    e.addEventListener("mouseleave", function () {
        s.style.display = "none"
    })
}
toggleSubs(eq, se)
toggleSubs(e, s)
