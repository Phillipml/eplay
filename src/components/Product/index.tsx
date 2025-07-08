import Tag from '@/components/Tag'
import { Card, Description, Infos, Title } from './styles'
export type CardProps = {
  background: 'black' | 'gray'
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}
const Product = ({ background, title, category, system, description, infos, image }: CardProps) => {
  return (
    <Card background={background}>
      <img src={image} alt={title} />
      <Title>{title}</Title>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Description>{description}</Description>
    </Card>
  )
}

export default Product
