import Button from '@/components/Button'
import { CartContainer, CartItem, Overlay, Prices, Quantity, Sidebar } from './styles'
import Tag from '../Tag'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootReducer } from '@/store'
import { close, remove } from '@/store/reducers/cart'
import { priceFormatter } from '../ProductList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch<AppDispatch>()
  const handleCloseCart = () => {
    dispatch(close())
  }
  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.prices.current, 0)
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={handleCloseCart} />
      <Sidebar>
        <ul>
          {items.map((i) => (
            <CartItem key={i.id}>
              <img src={i.media.thumbnail} alt={i.name} />
              <div>
                <h3>{i.name}</h3>
                <Tag>{i.details.category}</Tag>
                <Tag>{i.details.system}</Tag>
                <span>{priceFormatter(i.prices.current)}</span>
              </div>
              <IoMdClose onClick={() => dispatch(remove(i.id))} />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho </Quantity>
        <Prices>
          Total de {priceFormatter(getTotalPrice())} <span>em até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra">Continuar com a compra</Button>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
