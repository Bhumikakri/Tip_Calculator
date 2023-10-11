let mainButton = document.getElementById("Bill");
let list = document.getElementById("main")
list.style.display="none";

mainButton.addEventListener("click",() => {
    list.style.display="block";
    mainButton.style.display = "none";
})

let calulate=document.getElementById("btnn");
let total = document.getElementById("total");
total.style.display = "none";

calulate.addEventListener('click',(e)=>{
    let Price =document.getElementById("price").value;
    let serviceRate =document.getElementById("Rate").value;
    let numPeople=document.getElementById("totalPeople").value;
    e.preventDefault();
    let result = ((Price * serviceRate)/100 )/numPeople;
    document.getElementById("totall").value = result;
    total.style.display="inline";
})