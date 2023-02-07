export type Product = {
  nome: string
  valor: number
  codigo: string
  imagem: string
}

export type CartProduct = Product & { quantidade: number}

export type Cart = {
  token: string
  valor_total: number
  itens_total: number
  produtos: CartProduct[]
  error: string
}

export type Error = {
  error: string
}