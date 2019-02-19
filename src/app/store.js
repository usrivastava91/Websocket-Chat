import { createStore } from 'redux'
import { createContext } from 'react'

export const makeStore = () => {
  const store = createStore(reducer)
  return store
}

const reducer = (state = initState, action) => {
  return state
}

const initState = {
  messages: []
}
