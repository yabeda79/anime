let text=document.querySelector('.smoke__text')
text.innerHTML=text.textContent.replace(/\S/g,"<span>$&</span>")

let letters = document.querySelectorAll('span')
console.log(letters.length)

for(i=0; i<letters.length; i++){
    //console.log(letters[i])
    letters[i].addEventListener("mouseover", function(e){
        e.target.classList.add('active')
    })
}