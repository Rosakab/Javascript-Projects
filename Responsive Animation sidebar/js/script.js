const openMenu = document.querySelector ('.menuopen');
const closeMenu = document.querySelector ('.menuclose');
const layer= document.querySelector ('.layer1');

openMenu.onclick=() => {
  layer.classList.add('check');
}

closeMenu.onclick=() => {
  layer.classList.remove('check');
}

//different syntax:

// openMenu.addEventListener('click', function() {
//   layer.classList.add('check')
// });

// closeMenu.addEventListener('click', function() {
//   layer.classList.remove('check')
// })