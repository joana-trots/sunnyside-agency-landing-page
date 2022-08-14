Nav.elem = document.getElementsByTagName('nav')[0];
burger = document.getElementsByClassName('burger')[0];
navlist = Nav.elem.getElementsByTagName('ul')[0];

function Nav(a) {
    Nav.elem.classList[a ? 'add' : 'remove']('mobile_menu');
    if (Nav.elem.classList.contains('mobile_menu')) {
        navlist.style.display = 'none';
        burger.addEventListener('click', function(){
            //console.log('burger!');
            navlist.style.display = navlist.style.display === 'none' ? 'flex' : 'none';
        });
    } else {
        navlist.style.display = 'flex';
    }
}
      
window.onresize = function() {
    Nav(this.innerWidth < 697);  
}
window.onresize();

