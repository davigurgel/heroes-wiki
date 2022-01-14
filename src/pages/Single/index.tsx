import React from 'react'
import { useLocation } from 'react-router-dom'
import PowerStats from './PowerStats'

import './styles.sass'

type DataProps = {
  id: number
  name: string
  powerstats: {
    intelligence: string
    strength: string
    speed: string
    durability: string
    power: string
    combat: string
  }
  biography: {
    'full-name': string
    'alter-egos': string
    'place-of-birth': string
    'first-appearance': string
    publisher: string
    alignment: string
  }
  appearance: {
    gender: string
    race: string
    height: string[]
    weight: string[]
    'eye-color': string
    'hair-color': string
  }
  work: {
    occupation: string
    base: string
  }
  image: {
    url: string
  }
}

const Single = () => {
  const location = useLocation()
  const { state } = location
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: DataProps | any = state

  return (
    <div className="single">
      <div className="hero-name">
        <h1>{data.name}</h1>
      </div>
      <div className="single-wrapper">
        <div className="image">
          <img src={data.image.url} alt={data.name} />
        </div>
        <div className="content-info">
          <div className="section-title">
            <h3>Informações</h3>
          </div>
          <div className="section-info">
            <h3>Nome completo: </h3>
            <span>{data.biography['full-name']}</span>
          </div>
          <div className="section-info">
            <h3>Gênero: </h3>
            <span>{data.appearance.gender}</span>
          </div>
          <div className="section-info">
            <h3>Raça: </h3>
            <span>{data.appearance.race}</span>
          </div>
          <div className="section-info">
            <h3>Altura: </h3>
            <span>{data.appearance.height[1]}</span>
          </div>
          <div className="section-info">
            <h3>Peso: </h3>
            <span>{data.appearance.weight[1]}</span>
          </div>
          <div className="section-info">
            <h3>Cor dos Olhos: </h3>
            <span>{data.appearance['eye-color']}</span>
          </div>
          <div className="section-info">
            <h3>Cor dos Cabelos: </h3>
            <span>{data.appearance['hair-color']}</span>
          </div>
          <div className="section-info">
            <h3>Profissão: </h3>
            <span>{data.work.occupation}</span>
          </div>
          <div className="section-info">
            <h3>Base: </h3>
            <span>{data.work.base}</span>
          </div>
          <div className="section-info">
            <h3>Alter egos: </h3>
            <span>{data.biography['alter-egos']}</span>
          </div>
          <div className="section-info">
            <h3>Cidade natal: </h3>
            <span>{data.biography['place-of-birth']}</span>
          </div>
          <div className="section-info">
            <h3>Primeira aparição: </h3>
            <span>{data.biography['first-appearance']}</span>
          </div>
          <div className="section-info">
            <h3>Editora: </h3>
            <span>{data.biography.publisher}</span>
          </div>
          <div className="section-info">
            <h3>Alinhamento: </h3>
            <span>{data.biography.alignment}</span>
          </div>
        </div>
        <PowerStats item={data} />
      </div>
    </div>
  )
}

export default Single
