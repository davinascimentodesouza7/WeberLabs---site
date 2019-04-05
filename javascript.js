var body = document.querySelector('body');
window.addEventListener('scroll', function(){
    if(scrollY > 0){
        body.classList.add('navigation-fixed');
    } else{
        body.classList.remove('navigation-fixed');
    }
})


var btn = document.getElementById('btn-toggle');
var menu = document.getElementById('navigation-phone');
btn.addEventListener('click', function(){
    if(menu.style.maxHeight == '' || menu.style.maxHeight === '0px'){
        menu.style.maxHeight = '100vh';
    } else if(menu.style.maxHeight == '100vh'){
        menu.style.maxHeight = '0px';
    }
})
