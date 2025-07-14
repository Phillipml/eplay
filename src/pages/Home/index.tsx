import Banner from '@/components/Banner'
import ProductList from '@/components/ProductList'
import { useGetOnSaleGamesQuery, useGetSoonGamesQuery } from '@/services/api'

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleGamesQuery()
  const { data: getSoonGames } = useGetSoonGamesQuery()
  if (onSaleGames && getSoonGames) {
    return (
      <>
        <Banner />
        <ProductList
          background="gray"
          title="Produtos em destaque"
          games={onSaleGames}
          id="onSale"
        />
        <ProductList background="black" title="Em breve" games={getSoonGames} id="comingSoon" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
