import { MainContainer } from '@/styles/global'
import { Banner, Infos } from './styles'
import Tag from '@/components/Tag'
import Button from '@/components/Button'
import type { Game } from '@/types/game'
import { priceFormatter } from '../ProductList'
import { useDispatch } from 'react-redux'
import { add, open } from '@/store/reducers/cart'

type HeroProps = {
  game: Game
}

const Hero = ({ game }: HeroProps) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }
  return (
    <>
      <Banner style={{ backgroundImage: `url('${game.media.cover}')` }}>
        <MainContainer>
          <div>
            <Tag>{game.details.category}</Tag>
            <Tag>{game.details.system}</Tag>
          </div>
          <Infos>
            <h2>{game.name}</h2>
            <p>
              {game.prices.discount && <span>De {priceFormatter(game.prices.old)}</span>}

              {game.prices.current && <>Por {priceFormatter(game.prices.current)}</>}
            </p>
            {game.prices.current ? (
              <Button to="/product/1" title="Adicionar ao carrinho" onClick={addToCart}>
                Adicionar ao carrinho
              </Button>
            ) : (
              <span>Em breve</span>
            )}
          </Infos>
        </MainContainer>
      </Banner>
    </>
  )
}
export default Hero
