window.onscroll = function(){navBar()};

var nav = document.getElementById("navbar");
var sticky = nav.offsetTop;

function navBar() {
    if (window.pageXOffset >= sticky){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
}
