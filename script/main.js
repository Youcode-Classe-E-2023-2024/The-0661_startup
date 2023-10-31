let g = document.querySelectorAll(".goto")
let right = document.querySelectorAll(".right")

g.forEach((ele, key) =>{
    ele.addEventListener("mouseover", function(){
        ele.style.opacity = "0"
        right[key].style.opacity = "1"
    })  
    ele.addEventListener("mouseleave", function(){
        ele.style.opacity = "1"
        right[key].style.opacity = "0"
    })
    
})