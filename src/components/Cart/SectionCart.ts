import CartProductItem from './CartProductItem'
import { getCartProducts } from '../../services'

async function fillCartProductsList(
  elementWrapper: HTMLElement,
  elementList: HTMLElement
) {
  const token = localStorage.getItem('IS_token') || null
  const cartData = await getCartProducts(token)
  const { produtos, error } = cartData

  if (error) {
    elementWrapper.innerHTML = `
      <div class="empty-cart">
        sua cesta está vazia. adicione um produto. :)
      </div>
    `
    return
  }

  produtos.forEach((product) => elementList.append(CartProductItem(product)))
}

export default async () => {
  const SectionCart = document.createElement('section')
  SectionCart.classList.add('cart')

  const CartList = document.createElement('ul')
  CartList.classList.add('cart-list')
  SectionCart.append(CartList)

  fillCartProductsList(SectionCart, CartList)

  document.addEventListener('update-cart', async () => {
    fillCartProductsList(SectionCart, CartList)
  })

  return SectionCart
}
