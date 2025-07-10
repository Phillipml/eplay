import { MainContainer } from '@/styles/global'
import { ProductListStyled, Title } from './styles'

export type SectionProps = {
  title?: string
  background?: 'black' | 'gray'
  children: React.ReactNode
}

const Section = ({ title, background, children }: SectionProps) => {
  return (
    <ProductListStyled background={background}>
      <MainContainer>
        <Title>{title}</Title>
        {children}
      </MainContainer>
    </ProductListStyled>
  )
}

export default Section
