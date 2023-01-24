import React from 'react'

const NxtContext = React.createContext({
  savedList: [],
  isDark: false,
  isSaved: false,
  removeSaveItem: () => {},
  addSavedItem: () => {},
  toggleTheme: () => {},
})

export default NxtContext
