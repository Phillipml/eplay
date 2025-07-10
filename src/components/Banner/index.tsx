import { MainContainer } from '@/styles/global'
import { Image, Prices, Title } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { useEffect, useState } from 'react'
import type { Game } from '@/types/game'
import { priceFormatter } from '../ProductList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => {
        setGame(res)
      })
  }, [])
  if (!game) {
    return <h1>Carregando...</h1>
  }

  return (
    <Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <MainContainer>
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            De <span>{priceFormatter(game.prices.old)}</span>
            <br />
            Por {priceFormatter(game.prices.current)}
          </Prices>
        </div>
        <Button type="link" to="/" title="Clique aqui para aproveitar essa oferta">
          Aproveitar
        </Button>
      </MainContainer>
    </Image>
  )
}

export default Banner
