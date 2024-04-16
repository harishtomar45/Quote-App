
let card = document.querySelector("card")
let h2 = document.querySelector("h2")
let h3 = document.querySelector("h3")
let button = document.querySelector("button")



const getfetchuser = async ()=>{
    const Response =await fetch("http://quotable.io/random") 
    const data = await Response.json();
   h2.innerHTML = '<i class="fa-solid fa-quote-left"></i> ' + data.content + ' <i class="fa-solid fa-quote-right"></i>';
   h3.innerText = "Author - " + data.author;

}



button.addEventListener("click", getfetchuser)