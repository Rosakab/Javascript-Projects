const sectionsEl= document.querySelectorAll('section');
const liEl= document.querySelectorAll('nav .container ul li ');
let current;



window.addEventListener('scroll', function() {
    sectionsEl.forEach(section => {
        const sectionTop= section.offsetTop;
        const sectionHeight= section.clientHeight;
       if(pageYOffset >= sectionTop- sectionHeight/3){
        current= section.getAttribute('id');
       }
    });
    
    liEl.forEach(item => {
        item.classList.remove('active');
        if(item.classList.contains(current)){
            item.classList.add('active');
        }
      
    })
})
