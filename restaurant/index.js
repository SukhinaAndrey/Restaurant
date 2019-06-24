window.addEventListener('load', function () {

    var sections = document.getElementsByTagName('section');
    var navigation = document.getElementById("navigation");
    var navigation_ol = document.getElementById("navigation_ol");
    var slides = document.getElementsByClassName('interior_photo');
    var slides2 = document.getElementsByClassName('interior_photo2');
    var describe = document.getElementsByClassName('describe');
    var slider = document.getElementsByClassName('slider');
    var geo_place = document.getElementsByClassName('geo_place');



    window.onwheel = function (e) {
        for (let i = 0; i < sections.length; i++) {

            if (sections[i].style.visibility !== "hidden") {

                if (i == sections.length - 1) {

                    if (e.deltaY > 0) {
                        sections[i].style.visibility = "hidden";
                        sections[i].style.opacity = "0";
                        sections[i].style.removeProperty("animation");
                        sections[0].style.visibility = "visible";
                        sections[0].style.animation = 'moveclimbTop 1s linear forwards';
                        check_main();
                        check_main2();
                        return;
                        // return i = 0;
                    } else if (e.deltaY < 0) {
                        sections[i].style.visibility = "hidden";
                        sections[i].style.opacity = "0";
                        sections[i].style.removeProperty("animation");
                        sections[i - 1].style.visibility = "visible";
                        sections[i - 1].style.animation = 'moveclimbDown 1s linear forwards';
                        check_main();
                        check_main2();
                        return;
                    }
                } else if (i == 0) {

                    if (e.deltaY > 0) {
                        sections[i].style.visibility = "hidden";
                        sections[i].style.opacity = "0";
                        sections[i].style.removeProperty("animation");
                        sections[i + 1].style.visibility = "visible";
                        sections[i + 1].style.animation = 'moveclimbTop 1s linear forwards';
                        check_main();
                        check_main2();
                        return;
                    } else if (e.deltaY < 0) {
                        sections[i].style.visibility = "hidden";
                        sections[i].style.opacity = "0";
                        sections[i].style.removeProperty("animation");
                        sections[sections.length - 1].style.visibility = "visible";
                        sections[sections.length - 1].style.animation = 'moveclimbDown 1s linear forwards';
                        check_main();
                        check_main2();
                        return;
                        // return i = sections.length - 1;

                    }
                } else {

                    if (e.deltaY > 0) {
                        sections[i].style.visibility = "hidden";
                        sections[i].style.opacity = "0";
                        sections[i].style.removeProperty("animation");
                        sections[i + 1].style.visibility = "visible";
                        sections[i + 1].style.animation = 'moveclimbTop 1s linear forwards';
                        check_main();
                        check_main2();
                        return;
                    } else if (e.deltaY < 0) {
                        sections[i].style.visibility = "hidden";
                        sections[i].style.opacity = "0";
                        sections[i].style.removeProperty("animation");
                        sections[i - 1].style.visibility = "visible";
                        sections[i - 1].style.animation = 'moveclimbDown 1s linear forwards';
                        check_main();
                        check_main2();
                        return;
                    }
                }
            }
        }
    }




    function keyslide (e) {
        switch (e.keyCode) {
            case 38: {
                for (let i = 0; i < sections.length; i++) {
                    if (sections[i].style.visibility !== "hidden") {

                        if (i == sections.length - 1) {
                            sections[i].style.visibility = "hidden";
                            sections[i].style.opacity = "0";
                            sections[i].style.removeProperty("animation");
                            sections[i - 1].style.visibility = "visible";
                            sections[i - 1].style.animation = 'moveclimbDown 1s linear forwards';
                            check_main();
                            check_main2();
                            return;

                        } else if (i == 0) {
                            sections[i].style.visibility = "hidden";
                            sections[i].style.opacity = "0";
                            sections[i].style.removeProperty("animation");
                            sections[sections.length - 1].style.visibility = "visible";
                            sections[sections.length - 1].style.animation = 'moveclimbDown 1s linear forwards';
                            check_main();
                            check_main2();
                            return i = sections.length - 1;
                        } else {
                            sections[i].style.visibility = "hidden";
                            sections[i].style.opacity = "0";
                            sections[i].style.removeProperty("animation");
                            sections[i - 1].style.visibility = "visible";
                            sections[i - 1].style.animation = 'moveclimbDown 1s linear forwards';
                            check_main();
                            check_main2();
                            return;
                        }
                    }
                }
            }
            break;
            case 40: {
                for (let i = 0; i < sections.length; i++) {
                    if (sections[i].style.visibility !== "hidden") {

                        if (i == sections.length - 1) {
                            sections[i].style.visibility = "hidden";
                            sections[i].style.opacity = "0";
                            sections[i].style.removeProperty("animation");
                            sections[0].style.visibility = "visible";
                            sections[0].style.animation = 'moveclimbTop 1s linear forwards';
                            check_main();
                            check_main2();
                            return i = 0;

                        } else if (i == 0) {
                            sections[i].style.visibility = "hidden";
                            sections[i].style.opacity = "0";
                            sections[i].style.removeProperty("animation");
                            sections[i + 1].style.visibility = "visible";
                            sections[i + 1].style.animation = 'moveclimbTop 1s linear forwards';
                            check_main();
                            check_main2();
                            return;
                        } else {
                            sections[i].style.visibility = "hidden";
                            sections[i].style.opacity = "0";
                            sections[i].style.removeProperty("animation");
                            sections[i + 1].style.visibility = "visible";
                            sections[i + 1].style.animation = 'moveclimbTop 1s linear forwards';
                            check_main();
                            check_main2();
                            return;
                        }
                    }
                }
            }
            break;
        }
    }

    addEventListener('keydown',keyslide);




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




    for(let i=0;i<slides.length;i++){
        setInterval(() => {
            if(i == slides.length-1){
                slides[i].style.display = "none";
                slides[i].style.removeProperty("animation");
                slides[0].style.display = "block";
                slides[0].style.animation = "slide_animator 0.3s linear forwards";
                i = 0;
            }else{
                slides[i].style.display = "none";
                slides[i].style.removeProperty("animation");
                slides[i+1].style.display = "block";
                slides[i+1].style.animation = "slide_animator 0.3s linear forwards";
                i++;
            }
        }, 3000);
    }

    for(let i=0;i<slides2.length;i++){
        setInterval(() => {
            if(i == slides2.length-1){
                slides2[i].style.display = "none";
                slides2[i].style.removeProperty("animation");
                slides2[0].style.display = "block";
                slides2[0].style.animation = "slide_animator 0.3s linear forwards";
                i = 0;
            }else{
                slides2[i].style.display = "none";
                slides2[i].style.removeProperty("animation");
                slides2[i+1].style.display = "block";
                slides2[i+1].style.animation = "slide_animator 0.3s linear forwards";
                i++;
            }
        }, 3000);
    }
    

    function check_main2(){
        if(sections[1].style.visibility !== "hidden"){
            describe[0].style.animation = "describe_animator 0.5s linear forwards";
            describe[0].style.animationDelay = "2s";
            slider[0].style.animation = "slider_animator 0.5s linear forwards";
            slider[0].style.animationDelay = "1.5s";
        }
        else if(sections[1].style.visibility == "hidden"){
            describe[0].style.removeProperty("animation");
            slider[0].style.removeProperty("animation");
        }
    }

    function check_main(){
        if(sections[0].style.visibility !== "hidden"){
            geo_place[0].style.animation = "geo_place_animator 1s linear forwards";
            geo_place[0].style.animationDelay = "1s";
        }
        else if(sections[0].style.visibility == "hidden"){
            geo_place[0].style.removeProperty("animation");
        }
    }

    check_main();

    var result = document.getElementById('andrey');
    result.value = window.sessionStorage.getItem('result'); 

})