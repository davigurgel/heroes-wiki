import React from 'react'

import './styles.sass'

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: 'none', label: 'Limpar filtro' },
  { value: 'intelligence', label: 'Inteligência' },
  { value: 'strength', label: 'Força' },
  { value: 'speed', label: 'Velocidade' },
  { value: 'durability', label: 'Resistência' },
  { value: 'power', label: 'Poder' },
  { value: 'combat', label: 'Luta' },
]

const Select = ({ ...rest }) => (
  <div className="select-wrapper">
    <select
      className="select"
      {...rest}
    >
      {
        options.map((item: OptionType) => (
          <option key={item.value} value={item.value}>{item.label}</option>
        ))
      }
    </select>
  </div>
)

export default Select
