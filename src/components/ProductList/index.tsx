import Product from '@/components/Product'
import { List, ProductListStyled, Title } from './styles'
import { MainContainer } from '@/styles/global'
import type { Game } from '@/types/game'

export type ProductListProps = {
  title?: string
  background: 'black' | 'gray'
  games: Game[]
}

export const priceFormatter = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}
const ProductList = ({ title, background, games }: ProductListProps) => {
  const getGameTags = (game: Game) => {
    const tags = []
    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(priceFormatter(game.prices.current))
    }
    return tags
  }

  return (
    <>
      <ProductListStyled $background={background}>
        <MainContainer>
          <Title>{title}</Title>
          <List>
            {games?.map((game) => (
              <Product
                background={background}
                key={game.id}
                title={game.name}
                category={game.details.category}
                system={game.details.system}
                description={game.description}
                infos={getGameTags(game)}
                image={game.media.thumbnail}
                id={game.id}
              />
            ))}
          </List>
        </MainContainer>
      </ProductListStyled>
    </>
  )
}

export default ProductList
