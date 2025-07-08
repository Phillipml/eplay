import { MainContainer } from '@/styles/global'
import { Image, Prices, Title } from './styles'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => {
  return (
    <Image>
      <MainContainer>
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
          <Prices>
            De <span>R$ 250,00</span>
            <br />
            Por R$ 99,90
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
