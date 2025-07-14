import { FaCartShopping } from 'react-icons/fa6'
import Logo from '../Logo'
import { HeaderBar, CartButton, LinkItem, Links } from './styles'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { open } from '@/store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootReducer } from '@/store'

const Header = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }
  return (
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
              <HashLink to="/#onSale">Promoções</HashLink>
            </LinkItem>
            <LinkItem>
              <HashLink to="/#comingSoon"> Em breve</HashLink>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        {items.length} - Produtos <FaCartShopping />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
