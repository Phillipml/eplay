import Banner from '@/components/Banner'
import ProductList from '@/components/ProductList'
import { Game } from '@/models/Game'
const highlightsProducts: Game[] = [
  {
    title: 'Grand Theft Auto: San Andreas',
    category: 'Ação/Aventura',
    system: 'PS4, PS5, Xbox One, Xbox Series X/S',
    description: 'Clássico jogo de mundo aberto ambientado em Los Santos dos anos 90.',
    infos: ['-70%', 'R$ 30,00'],
    image:
      'https://cdn.mobygames.com/covers/5758782-grand-theft-auto-san-andreas-playstation-2-front-cover.png'
  },
  {
    title: 'God of War',
    category: 'Ação/Aventura',
    system: 'PS4, PS5',
    description: 'Aventura épica de Kratos em busca de vingança contra os deuses.',
    infos: ['-55%', 'R$ 54,00'],
    image: 'https://cdn.mobygames.com/covers/2579658-god-of-war-playstation-2-front-cover.png'
  },
  {
    title: 'Uncharted: Golden Abyss',
    category: 'Ação/Aventura',
    system: 'PS Vita, PS4, PS5',
    description: 'Aventura de Nathan Drake em busca de tesouros perdidos.',
    infos: ['-65%', 'R$ 35,00'],
    image: 'https://cdn.mobygames.com/covers/6854447-uncharted-golden-abyss-ps-vita-front-cover.jpg'
  },
  {
    title: 'Gravity Rush',
    category: 'Ação/Aventura',
    system: 'PS Vita, PS4',
    description: 'Ação com mecânicas únicas de gravidade e exploração aérea.',
    infos: ['-60%', 'R$ 40,00'],
    image: 'https://cdn.mobygames.com/covers/6096862-gravity-rush-ps-vita-front-cover.jpg'
  },
  {
    title: 'Resident Evil Village',
    category: 'Survival Horror',
    system: 'PS4, PS5, Xbox One, Xbox Series X/S, PC',
    description: 'Horror survival em uma vila misteriosa cheia de criaturas.',
    infos: ['-40%', 'R$ 120,00'],
    image:
      'https://cdn.mobygames.com/covers/20000220-resident-evil-village-xbox-one-front-cover.jpg'
  },
  {
    title: 'Call of Duty: Black Ops Cold War',
    category: 'FPS',
    system: 'PS4, PS5, Xbox One, Xbox Series X/S, PC',
    description: 'FPS da Guerra Fria com gráficos realistas e multiplayer intenso.',
    infos: ['-50%', 'R$ 75,00'],
    image:
      'https://cdn.mobygames.com/covers/20245476-call-of-duty-black-ops-cold-war-playstation-4-front-cover.jpg'
  }
]
const soonProducts: Game[] = [
  {
    title: 'Death Stranding 2: On the Beach',
    category: 'Ação/Aventura',
    system: 'PS5',
    description: 'Continuação da saga de Sam Porter Bridges em um mundo pós-apocalíptico.',
    infos: ['Pré-venda', 'R$ 399,00'],
    image:
      'https://cdn.mobygames.com/covers/20348225-death-stranding-2-on-the-beach-playstation-5-front-cover.jpg'
  },
  {
    title: 'Grand Theft Auto VI',
    category: 'Ação/Aventura',
    system: 'PS5, Xbox Series X/S',
    description: 'Aguardado jogo de mundo aberto da franquia GTA para nova geração.',
    infos: ['Pré-venda', 'R$ 499,00'],
    image:
      'https://cdn.mobygames.com/covers/20356957-grand-theft-auto-vi-xbox-series-front-cover.png'
  },
  {
    title: 'FC 25',
    category: 'Esportes',
    system: 'PS4, PS5, Xbox One, Xbox Series X/S, PC',
    description: 'A mais recente edição da franquia de futebol com gráficos realistas.',
    infos: ['Lançamento', 'R$ 299,00'],
    image: 'https://cdn.mobygames.com/covers/19179136-fc-25-xbox-series-front-cover.png'
  },
  {
    title: "Marvel's Spider-Man: Miles Morales",
    category: 'Ação/Aventura',
    system: 'PS4, PS5',
    description: 'Aventura do Spider-Man Miles Morales em Nova York coberta de neve.',
    infos: ['-25%', 'R$ 149,00'],
    image:
      'https://cdn.mobygames.com/covers/9455952-marvel-spider-man-miles-morales-ultimate-edition-playstation-4-f.jpg'
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <ProductList background="gray" title="Produtos em destaque" games={highlightsProducts} />
      <ProductList background="black" title="Em breve" games={soonProducts} />
    </>
  )
}

export default Home
