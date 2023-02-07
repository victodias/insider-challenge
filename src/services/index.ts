import { Product, Cart } from '../types'

const baseUrl =
  'https://us-central1-insider-integrations.cloudfunctions.net/cart-api-fullstack-test'

export const getProducts: () => Promise<Product[]> = async () => {
  const response = await fetch(`${baseUrl}/products`)
  const data: Product[] = await response.json()
  return data
}

export const getCartProducts: (token: string | null) => Promise<Cart> = async (
  token: string | null
) => {
  const response = await fetch(`${baseUrl}/cart/${token}`)
  const data: Cart = await response.json()
  return data
}

type ProductPayload = {
  codigo: string
  quantidade: number
}

export const postProduct: (
  token: string | null,
  payload: ProductPayload
) => Promise<Cart> = async (token: string | null, payload: ProductPayload) => {
  const response = await fetch(`${baseUrl}/cart/${token}`, {
    method: 'POST',
    body: JSON.stringify(payload),
  })

  const data: Cart = await response.json()
  return data
}
