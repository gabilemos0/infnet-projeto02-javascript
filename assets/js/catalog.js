let i = 0

const carouselServiceItems = document.getElementById('carouselServiceItems')
const placeholderModal = document.getElementById('placeholderModal')

for (let catalogo of Object.keys(catalogos)) {
  const service = catalogos[catalogo]

  let div = document.createElement('div')
  div.classList.add('carousel-item')
  if (i === 0) {
    div.classList.add('active')
  }
  i++

  div.innerHTML = `<div class="serviceItem" ><img src="${service.img}" alt="${catalogo}"
  class="serviceItemImage" />
</div>`

  div.addEventListener('click', function () {
    service.showModal()
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
