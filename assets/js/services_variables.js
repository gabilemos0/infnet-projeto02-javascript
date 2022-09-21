const modalServices = new bootstrap.Modal('#modalServices', {})

class Service {
  title = ''
  img = ''
  description = ''
  constructor(title, img, description) {
    this.title = title
    this.img = './assets/img/' + img
    this.description =
      description ||
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda cum, commodi in laborum non, accusamus magni architecto aut sapiente odit nesciunt tempora sequi cupiditate hic, obcaecati officia ea asperiores tenetur!'
  }

  showModal() {
    document.getElementById('modalServicesLabel').innerHTML = this.title
    document.getElementById('modalServicesImg').setAttribute('src', this.img)
    document.getElementById('modalServicesDescription').innerHTML =
      this.description
    document.getElementById('modalBodyContent').style.display = 'none'
    document.getElementById('carousel-placeholderModal').style.display = 'block'
    setTimeout(() => {
      document.getElementById('modalBodyContent').style.display = 'block'
      document.getElementById('carousel-placeholderModal').style.display =
        'none'
    }, 1500)
    modalServices.show()
  }
}

const catalogos = {
  visagismo: new Service('VISAGISMO', 'visagism.jpg'),
  estilo: new Service('ESTILO', 'style.jpg'),
  etiqueta: new Service('ETIQUETA E COMPORTAMENTO', 'etiquette.jpg'),
  coloracao: new Service('COLORAÇÃO PESSOAL', 'color.jpg'),
  tipologia: new Service('TIPOLOGIA FISICA', 'tipology.jpg'),
  revitalizacao: new Service('REVITALIZAÇÃO DE CLOSET', 'closet.jpg'),
  capsula: new Service('ARMÁRIO CÁPSULA', 'clean-closet.jpg'),
  dresscode: new Service('DRESS CODE', 'dress-code.jpg'),
  tendencias: new Service('TENDENCIAS', 'moda.jpg'),
  lingerie: new Service('LINGERIE', 'lingerie.jpg'),
  personal: new Service('PERSONAL SHOPPING', 'shopping.jpg')
}
