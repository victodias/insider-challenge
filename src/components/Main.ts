import SectionProducts from './Products/SectionProducts'
import SectionCart from './Cart/SectionCart'

export default async () => {
  const Main = document.createElement('main')
  Main.classList.add('main-section', 'container')

  Main.append(await SectionProducts(), await SectionCart())

  return Main
} 