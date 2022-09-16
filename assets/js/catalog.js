let i = 0

const carouselServiceItems = document.getElementById('carouselServiceItems')

for (let catalogo of Object.keys(catalogos)) {
  let div = document.createElement('div')
  div.setAttribute('id', catalogo)
  div.classList.add('carousel-item')
  if (i === 0) {
    div.classList.add('active')
  }
  i++
  div.innerHTML = `<div class="serviceItem" ><img src="${catalogos[catalogo]['img']}" alt="${catalogo}"
  class="serviceItemImage" />
</div>`

  div.addEventListener('click', function (event) {
    document.getElementById('modalServicesLabel').innerHTML =
      catalogos[event.currentTarget.id]['title']
    document
      .getElementById('modalServicesImg')
      .setAttribute('src', catalogos[event.currentTarget.id]['img'])
    document.getElementById('modalServicesDescription').innerHTML =
      catalogos[event.currentTarget.id]['description']
    modalServices.show()
  })

  carouselServiceItems.appendChild(div)
}

//Configuração do SlickSlider
$('.galeryServices').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 590,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})
