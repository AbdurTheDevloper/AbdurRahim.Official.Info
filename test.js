var navBar = document.getElementById('nav_bar');

window.onscroll = function(){
    var navScroll = window.scrollY ;
    if(navScroll> 100){
        navBar.classList.add('scroll');
    }else{
        navBar.classList.remove('scroll');
    }
}