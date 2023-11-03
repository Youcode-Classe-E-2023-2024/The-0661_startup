var eee = document.querySelectorAll(".addToShop");
let names = document.querySelectorAll(".nameP")
let imgHide = document.getElementById("imgHide")
let items = document.getElementById("heading")
let price = document.querySelectorAll(".price")
var priceSpan = document.getElementById("priceSpan")
var total = 0;

var key = 0;

for (let i = 0; i < eee.length; i++) {
    eee[i].addEventListener("click", function() {
        let nu = price[i].textContent;
        total += parseFloat(nu);
        let concat = {
            name: names[i].textContent, 
            price: price[i].textContent,
            total: total
        }
        localStorage.setItem(key++, JSON.stringify(concat)); 
    });
}

if(localStorage.length > 0){
    imgHide.style.display = "none";
    for(let x = 0; x < localStorage.length; x++){
        var item = JSON.parse(localStorage.getItem(x)); 
        items.innerHTML += item.name + "+" ;
        priceSpan.innerHTML += item.price + "$" + "+"
    }
}
items.innerHTML += "Total: " + item.total;
