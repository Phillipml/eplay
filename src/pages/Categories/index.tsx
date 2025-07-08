import ProductList from '@/components/ProductList'
import { Game } from '@/models/Game'

const products: Game[] = [
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
    title: "Marvel's Spider-Man: Miles Morales",
    category: 'Ação/Aventura',
    system: 'PS4, PS5',
    description: 'Aventura do Spider-Man Miles Morales em Nova York coberta de neve.',
    infos: ['-25%', 'R$ 149,00'],
    image:
      'https://cdn.mobygames.com/covers/9455952-marvel-spider-man-miles-morales-ultimate-edition-playstation-4-f.jpg'
  },
  {
    title: "Assassin's Creed Mirage",
    category: 'Ação/Aventura',
    system: 'PS4, PS5, Xbox One, Xbox Series X/S, PC',
    description: 'Aventura de parkour e stealth no mundo árabe medieval.',
    infos: ['-30%', 'R$ 180,00'],
    image:
      'https://cdn.mobygames.com/covers/20356958-assassins-creed-mirage-playstation-5-front-cover.jpg'
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
    title: 'Resident Evil 4 Remake',
    category: 'Survival Horror',
    system: 'PS4, PS5, Xbox Series X/S, PC',
    description: 'Remake do clássico survival horror com gráficos modernos.',
    infos: ['-20%', 'R$ 200,00'],
    image:
      'https://cdn.mobygames.com/covers/20356959-resident-evil-4-remake-playstation-5-front-cover.jpg'
  },
  {
    title: 'The Last of Us Part I',
    category: 'Survival Horror',
    system: 'PS5, PC',
    description: 'Remake do aclamado jogo de sobrevivência pós-apocalíptico.',
    infos: ['-15%', 'R$ 250,00'],
    image: 'https://cdn.mobygames.com/covers/6986945-the-last-of-us-playstation-3-front-cover.jpg'
  },
  {
    title: 'Dead Space Remake',
    category: 'Survival Horror',
    system: 'PS5, Xbox Series X/S, PC',
    description: 'Remake do horror espacial com gráficos de nova geração.',
    infos: ['-25%', 'R$ 220,00'],
    image: 'https://cdn.mobygames.com/covers/11298642-dead-space-playstation-5-front-cover.jpg'
  },
  {
    title: 'Call of Duty: Black Ops Cold War',
    category: 'FPS',
    system: 'PS4, PS5, Xbox One, Xbox Series X/S, PC',
    description: 'FPS da Guerra Fria com gráficos realistas e multiplayer intenso.',
    infos: ['-50%', 'R$ 75,00'],
    image:
      'https://cdn.mobygames.com/covers/20245476-call-of-duty-black-ops-cold-war-playstation-4-front-cover.jpg'
  },
  {
    title: 'Call of Duty: Modern Warfare III',
    category: 'FPS',
    system: 'PS4, PS5, Xbox One, Xbox Series X/S, PC',
    description: 'Mais recente título da franquia Call of Duty com multiplayer avançado.',
    infos: ['-10%', 'R$ 350,00'],
    image: 'https://cdn.mobygames.com/covers/6473178-call-of-duty-mw3-playstation-3-front-cover.jpg'
  },
  {
    title: 'Overwatch 2',
    category: 'FPS',
    system: 'PS4, PS5, Xbox One, Xbox Series X/S, PC, Switch',
    description: 'FPS hero shooter com personagens únicos e habilidades especiais.',
    infos: ['Gratuito', 'R$ 0,00'],
    image: 'https://cdn.mobygames.com/covers/11037275-overwatch-2-xbox-one-front-cover.png'
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
    title: 'NBA 2K25',
    category: 'Esportes',
    system: 'PS4, PS5, Xbox One, Xbox Series X/S, PC, Switch',
    description: 'Simulador de basquete com jogadores licenciados da NBA.',
    infos: ['-35%', 'R$ 195,00'],
    image: 'https://cdn.mobygames.com/1c98eb72-6d43-11ef-ab2a-02420a000111.webp'
  },
  {
    title: 'FIFA 24',
    category: 'Esportes',
    system: 'PS4, PS5, Xbox One, Xbox Series X/S, PC, Switch',
    description: 'Simulador de futebol com times e jogadores atualizados.',
    infos: ['-40%', 'R$ 180,00'],
    image: 'https://cdn.mobygames.com/covers/17678688-fc-24-xbox-one-front-cover.png'
  },
  {
    title: 'Madden NFL 24',
    category: 'Esportes',
    system: 'PS4, PS5, Xbox One, Xbox Series X/S, PC',
    description: 'Simulador oficial da NFL com times e jogadores atualizados.',
    infos: ['-30%', 'R$ 210,00'],
    image: 'https://cdn.mobygames.com/covers/17640875-madden-nfl-24-xbox-one-front-cover.jpg'
  },
  {
    title: 'The Witcher 3: Wild Hunt',
    category: 'RPG',
    system: 'PS4, PS5, Xbox One, Xbox Series X/S, PC, Switch',
    description: 'RPG de mundo aberto com narrativa épica e escolhas impactantes.',
    infos: ['-80%', 'R$ 40,00'],
    image:
      'https://cdn.mobygames.com/covers/17397141-the-witcher-3-wild-hunt-windows-front-cover.jpg'
  },
  {
    title: 'Elden Ring',
    category: 'RPG',
    system: 'PS4, PS5, Xbox One, Xbox Series X/S, PC',
    description: 'RPG de ação com mundo aberto vasto e combate desafiador.',
    infos: ['-25%', 'R$ 225,00'],
    image: 'https://cdn.mobygames.com/covers/10722526-elden-ring-playstation-5-front-cover.jpg'
  },
  {
    title: 'Final Fantasy XVI',
    category: 'RPG',
    system: 'PS5',
    description: 'RPG de ação com gráficos cinematográficos e história épica.',
    infos: ['-20%', 'R$ 320,00'],
    image: 'https://cdn.mobygames.com/89a7a45e-da91-11ef-af26-02420a000153.webp'
  },
  {
    title: 'Forza Horizon 5',
    category: 'Corrida',
    system: 'Xbox One, Xbox Series X/S, PC',
    description: 'Simulador de corrida em mundo aberto no México com gráficos realistas.',
    infos: ['-35%', 'R$ 195,00'],
    image: 'https://cdn.mobygames.com/covers/10095777-forza-horizon-5-windows-apps-front-cover.jpg'
  },
  {
    title: 'Gran Turismo 7',
    category: 'Corrida',
    system: 'PS4, PS5',
    description: 'Simulador de corrida com física realista e carros licenciados.',
    infos: ['-25%', 'R$ 225,00'],
    image: 'https://cdn.mobygames.com/covers/10754016-gran-turismo-7-playstation-5-front-cover.jpg'
  },
  {
    title: 'Need for Speed: Heat',
    category: 'Corrida',
    system: 'PS4, Xbox One, PC',
    description: 'Corrida arcade com perseguições policiais e customização de carros.',
    infos: ['-60%', 'R$ 80,00'],
    image: 'https://cdn.mobygames.com/covers/8355336-nfs-heat-playstation-4-front-cover.jpg'
  },
  {
    title: 'The Crew Motorfest',
    category: 'Corrida',
    system: 'PS4, PS5, Xbox One, Xbox Series X/S, PC',
    description: 'Corrida em mundo aberto no Havaí com eventos e festivais.',
    infos: ['-20%', 'R$ 240,00'],
    image:
      'https://cdn.mobygames.com/covers/17647229-the-crew-motorfest-playstation-5-front-cover.jpg'
  },
  {
    title: 'Street Fighter 6',
    category: 'Luta',
    system: 'PS4, PS5, Xbox Series X/S, PC',
    description: 'Jogo de luta com novos personagens e mecânicas inovadoras.',
    infos: ['-15%', 'R$ 255,00'],
    image:
      'https://cdn.mobygames.com/covers/18728382-street-fighter-6-playstation-5-front-cover.jpg'
  },
  {
    title: 'Mortal Kombat 1',
    category: 'Luta',
    system: 'PS5, Xbox Series X/S, PC, Switch',
    description: 'Reboot da franquia com fatalities brutais e novos personagens.',
    infos: ['-10%', 'R$ 270,00'],
    image: 'https://cdn.mobygames.com/covers/17628678-mortal-kombat-1-xbox-series-front-cover.png'
  },
  {
    title: 'Tekken 8',
    category: 'Luta',
    system: 'PS5, Xbox Series X/S, PC',
    description: 'Jogo de luta 3D com gráficos de nova geração e história épica.',
    infos: ['-5%', 'R$ 285,00'],
    image: 'https://cdn.mobygames.com/covers/18584335-tekken-8-playstation-5-front-cover.png'
  },
  {
    title: 'Dragon Ball FighterZ',
    category: 'Luta',
    system: 'PS4, Xbox One, PC, Switch',
    description: 'Jogo de luta baseado no anime Dragon Ball com combos espetaculares.',
    infos: ['-70%', 'R$ 90,00'],
    image:
      'https://cdn.mobygames.com/covers/1423595-dragon-ball-fighterz-fighterz-edition-xbox-one-front-cover.jpg'
  },
  {
    title: 'Microsoft Flight Simulator',
    category: 'Simulação',
    system: 'Xbox Series X/S, PC',
    description: 'Simulador de voo com gráficos realistas e mundo inteiro mapeado.',
    infos: ['-20%', 'R$ 240,00'],
    image:
      'https://cdn.mobygames.com/covers/9444500-microsoft-flight-simulator-windows-apps-front-cover.jpg'
  },
  {
    title: 'The Sims 4',
    category: 'Simulação',
    system: 'PS4, Xbox One, PC',
    description: 'Simulador de vida com criação de personagens e construção de casas.',
    infos: ['-50%', 'R$ 100,00'],
    image: 'https://cdn.mobygames.com/covers/10405877-the-sims-4-windows-front-cover.jpg'
  },
  {
    title: 'Cities: Skylines',
    category: 'Simulação',
    system: 'PS5, Xbox Series X/S, PC',
    description: 'Simulador de construção de cidades com gráficos modernos.',
    infos: ['-10%', 'R$ 270,00'],
    image:
      'https://cdn.mobygames.com/covers/2790391-cities-skylines-playstation-4-edition-xbox-one-front-cover.png'
  },
  {
    title: 'Farming Simulator 22',
    category: 'Simulação',
    system: 'PS4, PS5, Xbox One, Xbox Series X/S, PC',
    description: 'Simulador de agricultura com máquinas realistas e gestão de fazenda.',
    infos: ['-40%', 'R$ 120,00'],
    image: 'https://cdn.mobygames.com/covers/2544836-farming-simulator-windows-front-cover.jpg'
  }
]

const categoryFilter = [
  {
    name: 'Ação/Aventura',
    background: 'gray'
  },
  {
    name: 'Survival Horror',
    background: 'black'
  },
  {
    name: 'FPS',
    background: 'gray'
  },
  {
    name: 'Esportes',
    background: 'black'
  },
  {
    name: 'RPG',
    background: 'gray'
  },
  {
    name: 'Corrida',
    background: 'black'
  },
  {
    name: 'Luta',
    background: 'gray'
  },
  {
    name: 'Simulação',
    background: 'black'
  }
]

const Categories = () => {
  return (
    <>
      {categoryFilter.map((category) => {
        return (
          <ProductList
            background={category.background as 'gray' | 'black'}
            title={category.name}
            games={products.filter((product) => product.category === category.name)}
          />
        )
      })}
    </>
  )
}

export default Categories
