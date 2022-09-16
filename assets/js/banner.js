let placeholderBanner = document.querySelector('#carousel-placeholder')
let carouselGalery = document.querySelector('#carousel-galery')

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    placeholderBanner.style.display = 'none'
    carouselGalery.style.visibility = 'visible'
    $('.galery').slick({
      autoplay: true,
      autoplaySpeed: 3000
    })
  }, 2000)
})
