import insiderLogo from '../assets/insider-logo.svg'

export default () => {
  const Header = document.createElement('header')
  Header.classList.add('header', 'container')

  const HeaderContent = document.createElement('div')
  HeaderContent.classList.add('content')
  Header.append(HeaderContent)

  const HeaderLogo = document.createElement('img')
  HeaderLogo.classList.add('logo')
  HeaderLogo.setAttribute('src', insiderLogo)
  HeaderLogo.setAttribute('alt', 'Imagem que contem o logo da Insider, escrito o nome da empresa "Insider".')
  HeaderContent.append(HeaderLogo)

  return Header;
}