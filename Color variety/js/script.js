function changeImage(event){
    const box= document.querySelector('.thumb-img').children;

    for (let i = 0; i < box.length; i++) {
        box[i].classList.remove('active');  
    }
    event.classList.add('active');
    document.querySelector('.img').src= event.children[0].src;
}
// childern[0] points to the first child of div with the class of box
// event points to the event that we have in the html page for each div with the class of box