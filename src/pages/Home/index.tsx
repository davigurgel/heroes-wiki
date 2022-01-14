import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { useFetch } from '../../hooks/useFetch'
import Search from '../../components/Search'
import Button from '../../components/Button'
import List from '../../components/List'
import Select from '../../components/Select'
import { ReactComponent as X } from '../../assets/images/x.svg'
import './styles.sass'
import PowerStats from '../Single/PowerStats'

export type ItemProps = {
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
    'aliases': []
    'place-of-birth': string
    'first-appearance': string
    'publisher': string
    'alignment': string
  }
  image: {
    url: string
  }
}

type DataProps = {
  response: 'success' | 'error',
  results: ItemProps[],
}

const Home:React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [ dataSource, setDataSource ] = useState<DataProps>()
  const [ compareData, setCompareData ] = useState<ItemProps[]>([])
  const [ showCompare, setShowCompare ] = useState(false)
  const [ showToast, setShowToast ] = useState(false)
  const { loading, fetchData, data } = useFetch<DataProps>()

  const fetchSuperHeroes = useCallback(() => {
    if (inputRef.current?.value) {
      fetchData(`search/${inputRef.current?.value}`)
    }
  }, [ inputRef ])

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter') {
      fetchSuperHeroes()
    }
  }, [])

  const handleFilter = (value: string) => {
    if (value === 'none') {
      setDataSource(data)
    } else {
      const dataSourceBackUp = JSON.parse(JSON.stringify(data))

      const dataFiltered = {
        ...dataSourceBackUp,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        results: dataSourceBackUp?.results?.sort((a: any, b: any) => (
          Number(b.powerstats[value]) - Number(a.powerstats[value])
        )),
      }

      setDataSource(dataFiltered)
    }
  }

  const handleCompare = (item: ItemProps) => {
    if (compareData.length > 0) {
      setShowToast(false)
      if (compareData[0].id === item.id) {
        setCompareData([])
      } else {
        setCompareData((updatedValue) => [ ...updatedValue, item ])
      }
    } else {
      setShowToast(true)
      setCompareData((updatedValue) => [ ...updatedValue, item ])
    }
  }

  const handleCloseCompare = () => {
    setShowCompare(false)
    setCompareData([])
  }

  useEffect(() => {
    setDataSource(data)
  }, [ data ])

  useEffect(() => {
    if (compareData.length === 2) {
      setShowCompare(true)
    }
  }, [ compareData ])

  return (
    <>
      <div className="home-content">
        <div className="form">
          <Search
            ref={inputRef}
            type="text"
            placeholder="Digite o nome do super-héroi"
            onKeyDown={handleKeyDown}
          />
          <Button
            label="Buscar"
            disabled={loading}
            onClick={fetchSuperHeroes}
            className="button"
          />
        </div>
        {
          (dataSource?.results || []).length > 0 && (
            <div className="order-by">
              <Select
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(event: any) => handleFilter(event.target.value)}
              />
            </div>
          )
        }
        <List
          loading={loading}
          onCompare={handleCompare}
          data={dataSource?.results || []}
        />
      </div>
      {
        showCompare && (
          <div className="compare-wrapper">
            <div
              aria-hidden
              role="button"
              className="close"
              onClick={handleCloseCompare}
            >
              <X stroke="#fff" width={25} height={25} />
            </div>
            <div className="compare-container">
              {
                compareData.map((item) => (
                  <div key={item.id} className="item-compare">
                    <div className="image">
                      <img src={item.image.url} alt={item.name} />
                    </div>
                    <PowerStats item={item} />
                  </div>
                ))
              }
            </div>
          </div>
        )
      }
      {
        showToast && (
          <div className="toast">
            {/* eslint-disable-next-line max-len */ }
            <span>Clique no botão de comparar de outro super-héroi para compará-los, ou clique novamente no botão comparar do mesmo super-héroi para removê-lo da área de comparação.</span>
          </div>
        )
      }
    </>
  )
}

export default Home
