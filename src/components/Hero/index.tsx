import { MainContainer } from '@/styles/global'
import { Banner, Infos } from './styles'
import { useEffect, useState } from 'react'
import Tag from '@/components/Tag'
import Button from '@/components/Button'
import type { Game } from '@/types/game'
import { priceFormatter } from '../ProductList'

type HeroProps = {
  id: number
}

const Hero = ({ id }: HeroProps) => {
  const [game, setGame] = useState<Game | null>(null)
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setGame(res)
      })
  }, [id])
  if (!game) return null

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
              <Button to="/product/1" title="Adicionar ao carrinho">
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
