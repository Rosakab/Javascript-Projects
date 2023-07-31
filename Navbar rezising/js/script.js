let navEl= document.querySelector('nav');
console.log(navEl)

let sticky= navEl.offsetTop
console.log(sticky)

window.addEventListener('scroll', function(){
  if(window.pageYOffset > sticky){
    navEl.classList.add('sticky')
  }else{
    navEl.classList.remove('sticky')
  }
})