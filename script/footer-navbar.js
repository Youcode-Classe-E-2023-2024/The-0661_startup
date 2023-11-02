var navbar = document.getElementById('navbar');
var footer = document.getElementById("footer");

function footerDesktop(){
    return`
    <div>
    <div class="xl:flex justify-between bg-slate-800 p-6 md:p-10 ">
    <div class="flex p-4">
    <img src="pictures/mail-icon.png" class="h-16 mr-6">
    <div class="text-white">
    <h1 class="font-bold md:text-3xl text-2xl">CONTACT</h1>
        <p class="underline md:text-xl text-lg">contact@ygym.com</p>
        <p class="underline md:text-xl text-lg">(212) 239 -8685</p>
      </div>
      </div>

    <div class="flex p-4">
      <img src="pictures/clock-icon.png" class="h-16 mr-6">
      <div class="text-white">
        <h1 class="font-bold md:text-3xl text-2xl">OPEN HOURS</h1>
        <p class="md:text-xl text-lg">MONDAY - FRIDAY 7:00AM - 10:00PM</p>
        <p class="md:text-xl text-lg">SATURDAY 7:00AM - 10:00PM</p>
        <p>SUNDAY 7:00AM - 10:00PM</p>
      </div>
    </div>

    <div class="flex p-4">
      <img src="pictures/location-icon.png" class="h-16 mr-6">
      <div class="text-white">
      <h1 class="font-bold md:text-3xl text-2xl">LOCATION</h1>
        <p class="md:text-xl text-lg">6736 S SHERBOURNE DR LOS ANGELES, 90056</p>
        </div>
        </div>
  </div>

  
  <div class="flex bg-slate-100 h-64 justify-between items-center xl:p-20 p-10">
  
    <div class="w-60 xl:w-80 flex flex-col justify-between h-full">
      <div>
      <h1 class="font-bold text-3xl">Get ready to move</h1>
      <p>Sales, launches, and more that will motivate and move you</p>
      </div>
      <div class="flex w-fit">
        <input type="email" placeholder="Enter your email" class="bg-slate-100 focus:outline-none placeholder:text-slate-500 text-xl">
        <img src="pictures/small-mail.png" class="h-10 hidden lg:block">
      </div>
      </div>
      
      <div class="w-[300px] md:w-[550px] flex flex-col justify-between h-full order-last md:order-none">
      <img src="pictures/logo.png" class="w-72 self-center order-last lg:order-none">
      <div class="underline flex justify-between">
        <a href=""><p class="lg:block hidden">HOME</p></a> 
        <a href=""><p class="lg:block hidden">CLOTHES</p></a> 
        <a href=""><p class="lg:block hidden">NUTRITION</p></a> 
        <a href=""><p class="lg:block hidden">EQUIPMENT</p></a> 
        <a href=""><p class="lg:block hidden">COATCHING</p></a> 
        </div>
        </div>

        <div class="flex flex-col justify-between h-full">
        <img src="pictures/twitter.png" class="hidden md:block h-10 shadow-md rounded-[7px] hover:scale-110 transition-all cursor-pointer">
        <img src="pictures/facebook.png" class="hidden md:block h-10 shadow-md rounded-[7px] hover:scale-110 transition-all cursor-pointer">
        <img src="pictures/youtube.png" class="hidden md:block h-10 shadow-md rounded-[7px] hover:scale-110 transition-all cursor-pointer">
        <img src="pictures/linkdin.png" class="hidden md:block h-10 shadow-md rounded-[7px] hover:scale-110 transition-all cursor-pointer">
      </div>      
    </div>

    <div class="flex justify-center bg-slate-100">
    <p class="border-black border-t w-[95%] text-center py-4">Â© 2023 Y-GYM Fitness</p>
    </div>

    </div>
    </div>
    `
}

function tablet(){
    let g = document.querySelectorAll(".goto")
    let right = document.querySelectorAll(".right")

    g.forEach((ele, key) =>{
            ele.style.display = "none"
            right[key].style.display = "none"
    })
    return `
    <div class="bg-black">
    <img id="burger" class="w-10 h-10 cursor-pointer" src="pictures/burger.svg">
    <div id="mobileNav" class="text-white flex flex-col text-3xl hidden w-screen text-center">
            <a class="py-2" href="index.html">HOME</a>
            <a class="py-2" href="clothes.html">CLOTHES</a>
            <a class="py-2" href="accessories.html">accessories</a>
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
                <a class="text-2xl font-bold pr-8" href="index.html">HOME </a>
                <div id="clothes" class="">
                    <a class="text-2xl pr-8 font-bold" href="clothes.html" >CLOTHES</a>
                    <div id="sex" class="absolute flex flex-col text-white bg-black hidden">
                        <a href="clothes.html" class="px-4 pl-8 py-1">Man</a> <br>
                        <a href="clothes.html" class="bg-red-400 py-1 px-8">Woman</a>
                    </div>
                </div>
                <div id="eq" class="">
                    <a class="text-2xl pr-8 font-bold" href="#" >EQUIPMENT</a>
                    <div id="se" class="absolute flex flex-col text-white bg-black hidden">
                        <a href="" class="pl-6 py-1">Equipement</a> <br>
                        <a href="accessories.html" class="bg-red-400 py-1 px-8">Accessoir</a>
                    </div>
                </div>
                <a class="text-2xl pr-8 font-bold" href="nutrition.html">NUTRITION </a>
                <a class="text-2xl pr-8 font-bold" href="coatching.html">COATCHING </a>
                </nav>
            <div class="flex flex-row items-center">
            <a href=""><img class="w-[24px] h-[24px] mx-2" src="pictures/navbar/search.svg"></a>
            <a href="panier.html"><img class="w-[28px] h-[28px] mx-2" src="pictures/navbar/shop.svg"></a>
            <a href="login.html"><img class="w-[24px] h-[24px] mx-2" src="pictures/navbar/user.svg"></a>
            </div>
        </div>`
        )
    }

    footer.innerHTML = footerDesktop()
    
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

