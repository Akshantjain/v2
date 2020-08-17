// response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");

// setTimeout(function () {
//     window.location.reload(1);
// }, 10000);

$(document).ready(function () {
    setTimeout(() => {
        $(".pageTop").fadeIn(3000);
        // $(".pageTop").animate({backgroundColor: "white"}, "slow");
        setTimeout(() => {
            // $(".masthead h1").animate({ height: '8rem' }, 850);
            $(".masthead h1").addClass("headLoad");
            $(".appearonload").animate({opacity: '1'}, 1200);
            setTimeout(() => {
                // $("section").animate({display: 'block'}, 100);
                // $("footer").animate({ display: 'block' }, 100);
                $("section").show();
                $("footer").show();
            }, 100);
        }, 1000);
    }, 200);
});

const classes = ["covid_tracker", "home_security", "personal_v1", "tic_tac_toe", "baccarat_game"]

const each_description = document.querySelectorAll(".projects-section .each .project-description");
let is_expanded = false;


function expandFunction(index) {

    if (is_expanded && each_description[index].classList.contains(classes[index])) {
        each_description[index].classList.remove(classes[index]);
        each_description[index].classList.add("minimize");
        is_expanded = false;
        return;
    }
    else if (is_expanded) {
        for (let i = 0; i < each_description.length; ++i) {
            if (each_description[i].classList.contains(classes[i])) {

                each_description[i].classList.remove(classes[i]);
                each_description[i].classList.add("minimize");
            }
        }
    }

    each_description[index].classList.remove("minimize");
    each_description[index].classList.add(classes[index]);
    is_expanded = true;
}

// Logo color change
const logo_id = ["#java", "#cpp", "#python", "#android", "#html", "#css", "#react", "#gitlogo"]

function colorin (index) {
    let logo = document.querySelector(logo_id[index]);
    logo.classList.add("colored");
}

function colorout(index) {
    let logo = document.querySelector(logo_id[index]);
    logo.classList.remove("colored");
}

/*!
     Initial Work done by Blackrock Digital LLC under MIT License
        Copyright (c) 2013-2019 Blackrock Digital LLC

    Re-designed and edited by Akshant Jain under MIT License
        Copyright (c) 2019-2020 Akshant Jain
 */

!function (e) {
    "use strict";
    e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = e(this.hash);
            if ((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length)
                return e("html, body").animate({
                    scrollTop: a.offset().top - 70
                }, "easeInOutCubic"), !1
        }
    }), e(".js-scroll-trigger").click(function () {
        e(".navbar-collapse").collapse("hide")
    }), e("body").scrollspy({
        target: "#mainNav",
        offset: $('header').outerHeight() - 400
    });
    function a() {
        $('header').outerHeight() - 150 < e("#mainNav").offset().top ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink")
    }
    a(), e(window).scroll(a)
}(jQuery);