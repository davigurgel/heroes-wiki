import React from 'react'

import Card from '../../components/Card'
import { ItemProps } from '../../pages/Home'
import './styles.sass'

type ListProps = {
  loading: boolean
  data: ItemProps[]
  onCompare: (value: ItemProps) => void
}

const List: React.FC<ListProps> = ({
  loading,
  data,
  onCompare,
}) => (
  <div className="list">
    {
      !loading && Boolean(data?.length) && (
        data?.map((item) => (
          <Card
            key={item.id}
            item={item}
            onCompare={onCompare}
          />
        ))
      )
    }
  </div>
)

export default List
