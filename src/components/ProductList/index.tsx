import Product from '@/components/Product'
import { List, ProductListStyled, Title } from './styles'
import { MainContainer } from '@/styles/global'
import { Game } from '@/models/Game'

export type ProductListProps = {
  title?: string
  background: 'black' | 'gray'
  games: Game[]
}

const ProductList = ({ title, background, games }: ProductListProps) => {
  return (
    <>
      <ProductListStyled background={background}>
        <MainContainer>
          <Title>{title}</Title>
          <List>
            {games?.map((game) => (
              <Product
                background={background}
                key={game.title}
                title={game.title}
                category={game.category}
                system={game.system}
                description={game.description}
                infos={game.infos}
                image={game.image}
              />
            ))}
          </List>
        </MainContainer>
      </ProductListStyled>
    </>
  )
}

export default ProductList
