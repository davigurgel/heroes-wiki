import { useState } from 'react'

import api from '../services/api'

export const useFetch = <T>() => {
  const [ loading, setLoading ] = useState(false)
  const [ data, setData ] = useState<T>()
  const [ error, setError ] = useState(null)

  const fetchData = async (url: string) => {
    setLoading(true)
    try {
      const response = await api.get<T>(url)
      setData(response.data)
    } catch (errorRequest: any) {
      setError(errorRequest)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    data,
    error,
    fetchData,
  }
}
