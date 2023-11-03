var eee = document.querySelectorAll(".addToShop");
var names = document.querySelectorAll(".nameP");
var imgHide = document.getElementById("imgHide");
var items = document.getElementById("items");
var totalSpan = document.getElementById("totalSpan")
var price = document.querySelectorAll(".price");
var imageProducts = document.querySelectorAll(".imgP");

var priceSpan = document.getElementById("priceSpan");
var total = localStorage.getItem('total') ? parseFloat(localStorage.getItem('total')) : 0;

var empty = document.getElementById("empty");

var key = localStorage.length;

for (let i = 0; i < eee.length; i++) {
    eee[i].addEventListener("click", function () {
       // window.location.href = "http://127.0.0.1:5500/panier.html"
        var nu = parseFloat(price[i].textContent);
     
        total += nu;
     
      
        var concat = {
            name: names[i].textContent,
            imageProduct: imageProducts[i].src,
            price: nu,
            total: total
        };
       
        localStorage.setItem(key++, JSON.stringify(concat));
        localStorage.setItem("total", total); 
        
    });
}

if (localStorage.length > 0) {
    imgHide.style.display = "none";
    items.style.display = "block"

    for (let x = 0; x < localStorage.length; x++) {
        var item = JSON.parse(localStorage.getItem(x));
        
        items.insertAdjacentHTML('beforeend', ` <div class="urmama  bg-gray-100 flex justify-around items-center p-2 w-full h-[29%]">
        <div class="prdctcntiner h-[100px] bg-red-500 w-[75px]">
            <img src="${item.imageProduct}" class="w-full h-full" alt="">
        </div>
        <div class="comer font-bold text-md pt-4">
            <p>${item.name}</p>
        </div>
        <h1 class="font-bold">${item.price} MAD</h1>
    
    
    </div>`);

    // console.log(parseFloat(localStorage.getItem("total")) )
    totalSpan.innerText = parseFloat(localStorage.getItem("total")) + " MAD";

    }
    
   
}else{
    items.style.display = "none"
    document.getElementById("containerPanier").style.display= "none"
}
