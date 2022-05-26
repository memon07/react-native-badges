import React, { useEffect } from 'react'
import {View,Text} from 'react-native'
import RNBadgesModule, { IconBadge } from 'react-native-badges'

const App = () => {
  useEffect(() => {
    console.log(RNBadgesModule)
  })

  return (<View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>
  <IconBadge
    MainElement={
      <View style={{backgroundColor:'#489EFE',
        width:50,
        height:50,
        margin:6
      }}/>
    }
    BadgeElement={
      <Text style={{color:'#FFFFFF'}}>hi</Text>
    }
    IconBadgeStyle={
      {width:30,
      height:30,
      backgroundColor: '#FF00EE'}
    }
    Hidden={false}
    />
</View>)
}

export default App
