window.addEventListener("scroll", (e) => {
    let Y = window.scrollY;
    let nav = document.querySelector('.header_navbar')
    let nav_logo = document.querySelector('.header_navbar h1')
    let nav_items = document.querySelectorAll('.nav_items a')



    if (Y > 100) {
        nav.style.backgroundColor = "#fff"
        nav.style.height = "70px"
        nav_logo.style.color = "#222"
        nav_items.forEach(navLink => {
            navLink.style.color = "#222"
        })
    }
    else {
        nav.style.backgroundColor = "transparent"
        nav.style.height = "140px"
        nav_logo.style.color = "#fff"
        nav_items.forEach(navLink => {
            navLink.style.color = "#fff"
        })
    }
})