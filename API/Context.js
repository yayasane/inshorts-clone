import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { getNewsAPI } from './api'

export const NewsContext = createContext()

export const Context = ({ children }) => {
  const [news, setNews] = useState([])
  const [category, setCategory] = useState('general')
  const [index, setIndex] = useState(1)

  const fetchNews = async () => {
    const { data } = await axios.get(getNewsAPI(category))

    setNews(data)
    setIndex(1)
  }

  useEffect(() => {
    fetchNews()
  })

  return (
    <NewsContext.Provider value={{ news, index, setIndex, fetchNews }}>
      {children}
    </NewsContext.Provider>
  )
}
