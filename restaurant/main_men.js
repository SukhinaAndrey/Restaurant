window.addEventListener('load', function () {


    var header = document.getElementsByClassName('header')[0];
    var navigation = document.getElementById("navigation");
    var navigation_ol = document.getElementById("navigation_ol");
    var product = document.getElementsByClassName('product');
    var title = document.getElementsByClassName('title');
    var price = document.getElementsByClassName('price');
    var choose = document.getElementsByClassName('choose');
    var suma = document.getElementById('suma');
    var basket = document.getElementById('basket');
    var order_box = document.getElementsByClassName('order-box')[0];
    var delete_product = document.getElementsByClassName("delete-product");
    var image = document.getElementsByClassName('image')[0];
    var close_icon = document.getElementsByClassName('close-icon')[0];
    var btn_order = document.getElementsByClassName('btn-order')[0];
    var back_new_order = document.getElementsByClassName('background_new_order')[0];
    var order_form = document.getElementById('order-form');

    var result;





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

    window.addEventListener('scroll', header_shadow);

    function header_shadow() {
        var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (posTop > 160) {
            header.style.background = "none";
        }
        if (posTop < 160) {
            header.style.background = "rgb(20, 20, 20, 0.8)";
        }
    }




    for (let i = 0; i < product.length; i++) {
        choose[i].addEventListener('click', function () {
            suma.innerText = (parseInt(suma.innerText) || 0) + parseInt(price[i].innerText);
            result = suma;
            window.sessionStorage.setItem("result", suma.innerText);


            var plus_elem = document.createElement('div');
            var plus_elem_title = document.createElement('div');
            var plus_elem_price = document.createElement('div');
            var plus_elem_delete = document.createElement('div');

            order_box.appendChild(plus_elem);
            plus_elem.classList.add("plus-elem");

            plus_elem.appendChild(plus_elem_title);
            plus_elem_title.innerText = title[i].innerText;
            plus_elem_title.classList.add("plus-elem-child");

            plus_elem.appendChild(plus_elem_price);
            plus_elem_price.innerText = price[i].innerText;
            plus_elem_price.classList.add("plus-elem-child");

            plus_elem.appendChild(plus_elem_delete);
            plus_elem_delete.innerHTML = "<img src='images/small_closeicon.png' class='delete-product'>";
            plus_elem_delete.classList.add("plus-elem-child");

            del_prod();
            image.style.animation = "jump 0.3s linear forwards";
            setTimeout(() => {
                image.style.removeProperty("animation");
            }, 350)
        })
    }


    function del_prod() {
        for (let i = 0; i < delete_product.length; i++) {
            delete_product[i].addEventListener('click', sum_reload);
        }
    }

    function sum_reload() {
        suma.innerText = (parseInt(suma.innerText) || 0) -
        parseInt(this.parentNode.previousSibling.innerText);
        result = suma;
        window.sessionStorage.setItem("result", suma.innerText);
        var row = this.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }

    image.addEventListener('click', visibility_basket);
    close_icon.addEventListener('click', unvisible_basket);

    function visibility_basket() {
        basket.style.display = 'block';
        image.style.display = 'none';
        image.style.animation = "jump 0.3s linear forwards";
        basket.style.animation = "right_basket_move 0.5s linear forwards";
    }

    function unvisible_basket() {
        basket.style.display = 'none';
        image.style.display = 'block';
        basket.style.removeProperty("animation");
    }

    btn_order.addEventListener('click', function () {
        var new_element = document.getElementsByClassName('plus-elem');

        for (let i = 0; i <= sessionStorage.length; i++) {
            sessionStorage.clear();
        }
        window.sessionStorage.setItem("result", suma.innerText);
        for (let i = 0; i < new_element.length; i++) {
            window.sessionStorage.setItem("product" + i, new_element[i].firstChild.innerText);

        }

    })

})