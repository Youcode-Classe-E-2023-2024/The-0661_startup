    function generateNavbar() {
        return (
            `
            <div class="bg-[#D9D9D990] backdrop-blur z-[99] fixed w-full flex justify-between items-center py-4 px-8">
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
    
    
        const navbar = document.getElementById('navbar');
        navbar.innerHTML = generateNavbar();
    
    
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