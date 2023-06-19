import React, { createContext, useContext, useState } from "react";


const Context = createContext()

export const StateContext = ({children}) => {
  const [movieId, setMovieId] = useState('')
  const [input, setInput] = useState('')
  const [BASE_URL, setBASE_URL] = useState('https://image.tmdb.org/t/p/w500')

  

  
  return (
    <Context.Provider value={{ movieId, setMovieId, input, setInput, BASE_URL, setBASE_URL }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = ()=> useContext(Context)