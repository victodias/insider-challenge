import '../../styles/cart.scss'
import { CartProduct } from '../../types'

function removeProduct(token: string, id: string) {
  console.log({ token, id })
}

export default ({ codigo, imagem, nome, quantidade, valor }: CartProduct) => {
  const Wrapper = document.createElement('li')
  Wrapper.classList.add('cart-list-item')
  Wrapper.setAttribute('id', codigo)

  Wrapper.innerHTML = `
      <img src="${imagem}" alt="" class="image" />
      <div class="infos">
        <div class="title">${nome}</div>
        <span class="price">${quantidade}x ${valor}</span>
        <button class="remove-button" onclick="${removeProduct}">Remover</button>
      </div>
  `

  // const Image = document.createElement('img')
  // Wrapper.append(Image)

  // const ProductInfos = document.createElement('div')
  // ProductInfos.classList.add('infos')
  // Wrapper.append(ProductInfos)

  // const Title = document.createElement('div')
  // Title.classList.add('title')
  // Title.innerText = 'Título do produto'

  // const Price = document.createElement('span')
  // Price.classList.add('price')

  // const RemoveButton = document.createElement('button')
  // RemoveButton.classList.add('remove-button')

  // ProductInfos.append(Title)
  // ProductInfos.append(Price)
  // ProductInfos.append(RemoveButton)

  return Wrapper
}
