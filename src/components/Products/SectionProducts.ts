import ProductsItem from './ProductsItem'
import { getProducts } from '../../services'

export default async () => {
  const SectionProducts = document.createElement('section')
  SectionProducts.classList.add('products', 'container')

  const List = document.createElement('ul')
  List.classList.add('list-products')
  SectionProducts.append(List)

  const productsList = await getProducts()

  const productComponents = productsList.map((item) =>
    ProductsItem({
      codigo: item.codigo,
      imagem: item.imagem,
      nome: item.nome,
      valor: item.valor,
    })
  )

  productComponents.forEach((productComponent) => List.append(productComponent))

  return SectionProducts
}
