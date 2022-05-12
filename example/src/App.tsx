import React, { useEffect } from 'react'
import RNBadgesModule, { Counter } from 'react-native-badges'

const App = () => {
  useEffect(() => {
    console.log(RNBadgesModule)
  })

  return <Counter />
}

export default App
