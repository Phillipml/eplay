import { MainContainer } from '@/styles/global'
import { Image, Prices, Title } from './styles'
import Tag from '../Tag'
import { useGetFeaturedGameQuery } from '@/services/api'
import { priceFormatter } from '../ProductList'
import { ButtonLink } from '../Button/styles'

const Banner = () => {
  const { data: game, isLoading, error } = useGetFeaturedGameQuery()
  if (isLoading) {
    return <h1>Carregando...</h1>
  }

  if (error) {
    return <h1>Erro ao carregar</h1>
  }

  if (!game) {
    return <h1>Nenhum jogo encontrado</h1>
  }

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
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
        <ButtonLink to={`/product/${game.id}`} title="Clique aqui para aproveitar essa oferta">
          Aproveitar
        </ButtonLink>
      </MainContainer>
    </Image>
  )
}

export default Banner
