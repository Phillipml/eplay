import Tag from '@/components/Tag'
import { Card, Description, Infos, Title } from './styles'
import { Link } from 'react-router-dom'
export type CardProps = {
  background: 'black' | 'gray'
  title: string
  category: string
  system: string
  description: string
  infos?: string[]
  image: string
  id: number
}
const Product = ({
  background,
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: CardProps) => {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }
    return description
  }
  return (
    <Card $background={background}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
        <Title>{title}</Title>
        <Infos>
          {infos?.map((info) => (
            <Tag key={info}>{getDescription(info)}</Tag>
          ))}
        </Infos>
        <Tag>{category}</Tag>
        <Tag>{system}</Tag>
        <Description>{getDescription(description)}</Description>
      </Link>
    </Card>
  )
}

export default Product
