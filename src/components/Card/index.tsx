import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ItemProps } from '../../pages/Home'
import Button from '../Button'

import './styles.sass'

type CardProps = {
  item: ItemProps
  onCompare: (value: ItemProps) => void,
}

const Card: React.FC<CardProps> = ({
  item,
  onCompare,
}) => {
  const navigate = useNavigate()
  const goTo = () => {
    navigate(`${item.id}`, { state: item })
  }

  return (
    <div className="card">
      <img src={item.image.url} alt={item.name} />
      <div className="card-details">
        <h2>{ item.name }</h2>
        <span>{ item.biography['full-name'] }</span>
        <div className="buttons-details">
          <Button
            className="compare"
            disabled={false}
            onClick={() => onCompare(item)}
            label="Comparar"
          />
          <Button
            className="view"
            disabled={false}
            onClick={goTo}
            label="Visualizar"
          />
        </div>
      </div>
    </div>
  )
}

export default Card
