import { FaCartShopping } from 'react-icons/fa6'
import Logo from '../Logo'
import { HeaderBar, LinkCart, LinkItem, Links } from './styles'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/">Novidades</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/">Promoções</Link>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart>
      0 - Produtos <FaCartShopping />
    </LinkCart>
  </HeaderBar>
)

export default Header
