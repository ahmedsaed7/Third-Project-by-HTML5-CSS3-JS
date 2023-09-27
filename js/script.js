var allproducts = document.querySelectorAll(".list li ")
var div  = document.querySelector("#contect")
var btn = document.querySelector("#btn")
var totalPrice = 0 
var price =document.querySelector("#price")
var sel = document.querySelectorAll("#Select")

allproducts.forEach(function (item) {
    item.onclick = function(){
        div.innerHTML += document.querySelector("#name").textContent + "   "
        totalPrice +=  parseFloat(item.getAttribute("price"))

        if(div.innerHTML != " "){
            btn.style.display = "block"
        }
    }
})
btn.onclick = function(){
    console.log(totalPrice)
    price.innerHTML = "TOTAL PRICE IS : " + totalPrice 

}