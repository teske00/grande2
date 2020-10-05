function menu() {
    var menuIcon = document.querySelector(".menu-icon");
    var nav = document.querySelector("nav");
    var menuClose = document.querySelector(".menu-close");

    const tl = new TimelineMax();

    menuIcon.addEventListener('click', () => {
        nav.style.visibility = 'visible';
        tl.fromTo(nav, 0.2, { opacity: "0" }, { opacity: "1" })
        menuClose.style.visibility = 'visible';
        menuIcon.style.visibility = 'hidden';
    })

    menuClose.addEventListener('click', () => {
        tl.fromTo(nav, 0.2, { opacity: "1" }, { opacity: "0" })
        setTimeout(() => { nav.style.visibility = 'hidden'; }, 200);

        menuClose.style.visibility = 'hidden';
        menuIcon.style.visibility = 'visible';
    })

}


function menuScroll() {
    var header = document.querySelector("header");
    var sticky = header.clientHeight;

    var start = 0;
    var start2 = 0;
    window.addEventListener('scroll', () => {
        var scrollTop = window.pageYOffset;
        if (scrollTop >= sticky) {
            if (start2 == 0) {
                start = 1;
            }
        }

        if (scrollTop < sticky) {
            start2 = 0;
            header.style.boxShadow = 'none';
            header.style.position = "static";
            header.style.transform = 'translateY(0px)';
            header.style.top = "0px";
        }
        console.log(start2);

        if (start == 1) {
            header.style.transition = '600ms ease-in-out';
            header.style.transform = 'translateY(' + sticky + 'px)';
            setTimeout(() => {
                header.style.boxShadow = '0px 3px 6px #00000029';
                header.style.position = "sticky";
                header.style.transform = 'translateY(0px)';
                header.style.top = "0px";
                header.style.transition = 'none';
            }, 600);
            start = 0;
            start2 = 1;
        }

    })
}

menu();
menuScroll();