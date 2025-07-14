import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { useParams } from 'react-router-dom'
import { useGetGameQuery } from '@/services/api'
import Gallery from '@/components/Gallery'

const Product = () => {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id!)
  if (!game) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Gallery
        id={Number(id)}
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
      <Section title="Sobre o jogo" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system}
        </p>
        <p>
          <b>Desenvolvedora:</b> {game.details.developer}
        </p>
        <p>
          <b>Editora:</b> {game.details.publisher}
        </p>
        <p>
          <b>Linguagens:</b> {game.details.languages.join(', ')}
        </p>
      </Section>
    </>
  )
}

export default Product
