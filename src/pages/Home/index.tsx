import Banner from '@/components/Banner'
import ProductList from '@/components/ProductList'
import type { Game } from '@/types/game'
import { useEffect, useState } from 'react'

const Home = () => {
  const [promo, setPromo] = useState<Game[]>([])
  const [soon, setSoon] = useState<Game[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const [promoRes, soonRes] = await Promise.all([
        fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes'),
        fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      ])

      const promoData = await promoRes.json()
      const soonData = await soonRes.json()

      console.log('Promo data:', promoData)
      console.log('Soon data:', soonData)

      setPromo(promoData)
      setSoon(soonData)
    }

    fetchData()
  }, [])

  return (
    <>
      <Banner />
      <ProductList background="gray" title="Produtos em destaque" games={promo} />
      <ProductList background="black" title="Em breve" games={soon} />
    </>
  )
}

export default Home
