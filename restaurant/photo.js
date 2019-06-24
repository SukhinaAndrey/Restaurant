window.addEventListener('load', function(){

    var header = document.getElementsByClassName('header')[0];


    var navigation = document.getElementById("navigation");
    var navigation_ol = document.getElementById("navigation_ol");




    navigation.addEventListener('click', open_navigation_menu);
    navigation_ol.addEventListener('mouseleave', close_navigation_menu);



    function open_navigation_menu() {
        navigation_ol.style.display = "block";
        navigation_ol.style.animation = "move_nav 0.7s linear forwards";
        // inside_menu.style.display = (inside_menu.style.display == 'none') ? 'block' : 'none';
    }


    function close_navigation_menu(event) {
        var e = event.toElement || event.relatedTarget;
        if (e.parentNode == this || e == this) {
            return;
        }
        this.style.display = "none";
    }

    window.addEventListener('scroll',header_shadow);

    function header_shadow(){
        var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if(posTop>160){
            header.style.background = "none";
        }
        if(posTop<160){
            header.style.background = "rgb(20, 20, 20, 0.4)";
        }
    }
})