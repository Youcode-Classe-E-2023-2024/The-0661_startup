let g = document.querySelectorAll(".goto")

g.forEach((ele) =>{
    ele.addEventListener("mouseover", function(){
        ele.src = "/pictures/coatching/right.png"
    })  
    ele.addEventListener("mouseleave", function(){
        ele.src = "/pictures/coatching/plus.png"
    })
    
})