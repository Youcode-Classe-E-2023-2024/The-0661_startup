var navbar = document.getElementById('navbar');

function tablet(){
    let g = document.querySelectorAll(".goto")
    let right = document.querySelectorAll(".right")

    g.forEach((ele, key) =>{
            ele.style.display = "none"
            right[key].style.display = "none"
    })

    return `
    <div class="backdrop-blur-lg fixed top-0">
    <img id="burger" class="w-10 h-10 cursor-pointer" src="pictures/burger.svg">
    <div id="mobileNav" class="text-white flex flex-col text-3xl hidden w-screen">
            <a class="py-2" href="index.html">HOME</a>
            <a class="py-2" href="clothes.html">CLOTHES</a>
            <a class="py-2" href="">EQUIPEMENT</a>
            <a class="py-2" href="nutrition.html">NURITION</a>
            <a class="py-2" href="coatching.html">COACHING</a>
            </div>
            </div>
            `
        }
        
        
        function desktop() {
        return (
            `
            <div class="bg-[#D9D9D990] backdrop-blur z-[99] fixed top-0 w-full flex justify-between items-center py-4 px-8">
            <img src="pictures/logo.png" alt="" class="w-[201px]">
            <nav class="flex relative">
                <a class="text-2xl font-bold text-[#FF0000] pr-8" href="index.html">HOME </a>
                <div id="clothes" class="">
                    <a class="text-2xl pr-8 font-bold" href="clothes.html" >CLOTHES</a>
                    <div id="sex" class="absolute flex flex-col text-white bg-black hidden  ">
                        <a href="clothes.html" class="px-4">Man</a> <br>
                        <a href="clothes.html" class="bg-red-400 py-1 px-4">Woman</a>
                        </div>
                </div>
                <div id="eq" class="">
                    <a class="text-2xl pr-8 font-bold" href="#" >EQUIPMENT</a>
                    <div id="se" class="absolute flex flex-col text-white bg-black hidden">
                        <a href="" class="px-4">Equipement</a> <br>
                        <a href="accessories.html" class="bg-red-400 py-1 px-4">Accessoir</a>
                    </div>
                </div>
                <a class="text-2xl pr-8 font-bold" href="nutrition.html">NUTRITION </a>
                <a class="text-2xl pr-8 font-bold" href="coatching.html">COATCHING </a>
                </nav>
            <div>
            <a href="">ico</a>
            <a href="">ico</a>
            <a href="">ico</a>
            </div>
        </div>`
        )
    }
    
    navbar.innerHTML = window.innerWidth > 920 ? desktop() : tablet()
    window.addEventListener("resize",function(){
        navbar.innerHTML = window.innerWidth > 920 ? desktop() : tablet()
    })
    let i = 0;
    
    const burger = document.getElementById("burger")
    if(burger){
        burger.addEventListener("click", function(){
            if(i === 0){
                i = 1;
                document.getElementById("mobileNav").style.display="flex"
            }
            else{
                i = 0;
                document.getElementById("mobileNav").style.display="none"
            }
        })
    }
    
    
        let e = document.getElementById("clothes")
        let s = document.getElementById("sex")    
        
        let eq = document.getElementById("eq")
        let se = document.getElementById("se")
        
        function toggleSubs(e, s){
            e.addEventListener("mouseover", function(){
                s.style.display = "block"
            })
        
            e.addEventListener("mouseleave", function(){
                s.style.display = "none"
            })
        }
    
        toggleSubs(eq, se)
        toggleSubs(e, s)

