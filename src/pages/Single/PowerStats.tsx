import React from 'react'

import { ItemProps } from '../Home'

type PowerStatsProps = {
  item: ItemProps
}

const PowerStats = ({ item }: PowerStatsProps) => (
  <div className="content-powerstats">
    <div className="section-title">
      <h3>Poderes</h3>
    </div>
    <div className="section-info">
      <h3>Inteligencia: </h3>
      <span>{item.powerstats.intelligence}</span>
    </div>
    <div className="section-info">
      <h3>Força: </h3>
      <span>{item.powerstats.strength}</span>
    </div>
    <div className="section-info">
      <h3>Velocidade: </h3>
      <span>{item.powerstats.speed}</span>
    </div>
    <div className="section-info">
      <h3>Resistência: </h3>
      <span>{item.powerstats.durability}</span>
    </div>
    <div className="section-info">
      <h3>Poder: </h3>
      <span>{item.powerstats.power}</span>
    </div>
    <div className="section-info">
      <h3>Luta: </h3>
      <span>{item.powerstats.combat}</span>
    </div>
  </div>
)

export default PowerStats
