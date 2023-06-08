const links = document.querySelector('.header-nav-flex '),
    burger = document.querySelector('.burger '),
    body = document.querySelector('body')  

    burger.addEventListener('click', function () {
        links.classList.toggle('active')
    })
burger.addEventListener('click', function () {
    body.classList.toggle('overflow')
})
 