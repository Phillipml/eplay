import ProductList from '@/components/ProductList'
import { useState } from 'react'
import type { Game } from '@/types/game'
import { useEffect } from 'react'

const Categories = () => {
  const [action, setAction] = useState<Game[]>([])
  const [sports, setSports] = useState<Game[]>([])
  const [simulation, setSimulation] = useState<Game[]>([])
  const [fighting, setFighting] = useState<Game[]>([])
  const [rpg, setRpg] = useState<Game[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => {
        setAction(res)
      })
    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => {
        setSports(res)
      })
    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => {
        setSimulation(res)
      })
    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => {
        setFighting(res)
      })
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => {
        setRpg(res)
      })
  }, [])
  return (
    <>
      <ProductList games={action} background="black" title="Ação" />
      <ProductList games={sports} background="gray" title="Esportes" />
      <ProductList games={simulation} background="gray" title="Simulação" />
      <ProductList games={fighting} background="gray" title="Luta" />
      <ProductList games={rpg} background="gray" title="RPG" />
    </>
  )
}

export default Categories
