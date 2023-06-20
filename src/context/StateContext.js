import React, { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";


const Context = createContext()

export const StateContext = ({children}) => {
  const [movieId, setMovieId] = useState('')
  const [input, setInput] = useState('')
  const [BASE_URL, setBASE_URL] = useState('https://image.tmdb.org/t/p/w500')
  const [searchParams, setSearchParams] = useSearchParams()
  

  
  return (
    <Context.Provider value={{ movieId, setMovieId, input, setInput, BASE_URL, setBASE_URL, searchParams, setSearchParams }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = ()=> useContext(Context)