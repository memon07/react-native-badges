import * as React from 'react'
import { Button, NativeModules, StyleSheet, Text, View } from 'react-native'

interface BadgeProperties {
  MainViewStyle?: object;
  MainElement: object;
  Hidden?: boolean;
  IconBadgeStyle?: object;
  BadgeElement: object;
}

export const IconBadge = React.memo(({MainViewStyle,
  MainElement = {},
  Hidden = true,
  IconBadgeStyle = {},
  BadgeElement}: BadgeProperties) => {

    return (
      <View style={[MainViewStyle || {}]}>
        {MainElement}
        {!Hidden && (
          <View style={[styles.IconBadge, IconBadgeStyle || {}]}>
            {BadgeElement}
          </View>
        )}
      </View>
    );

})

const styles = StyleSheet.create({
  IconBadge: {
    position: 'absolute',
    top: 1,
    right: 1,
    minWidth: 20,
    height: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000',
  },
});


export default NativeModules.RNBadgesModule
