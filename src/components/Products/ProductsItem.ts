import { Product } from '../../types'
import { onUpdateCart } from '../../helpers/events'
import { postProduct } from '../../services'

function addProductToCart(productId: string) {
  const token = localStorage.getItem('IS_token') || ""
  const payload = {
    codigo: productId,
    quantidade: 1,
  }
  postProduct(token, payload).then((response) => {
    console.log('response', response)
    // onUpdateCart()
  })
}

export default ({ codigo, nome, imagem, valor }: Product) => {
  const Wrapper = document.createElement('li')
  Wrapper.classList.add('card-product')
  Wrapper.setAttribute('id', codigo)

  Wrapper.innerHTML = `
    <img src="${imagem}" alt="" class="product-image" />
    <div class="product-infos">
      <h3 class="title">${nome}</h3>
      <span class="price">${valor}</span>
    </div>
  `

  const AddButton = document.createElement('button')
  AddButton.classList.add('add-button')
  AddButton.innerText = 'Adicionar'
  Wrapper.append(AddButton)

  AddButton.addEventListener('click', () => {
    addProductToCart(codigo)
  })

  return Wrapper
}
