import * as React from 'react'
import { Button, NativeModules, StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

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

    const rotate = useSharedValue(0);

    const reanimatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{rotate: `${1}deg`}]
      }
    },[])

    return (
      <View style={[MainViewStyle || {}]}>
        {MainElement}
        {!Hidden && (
          <Animated.View style={[styles.IconBadge, IconBadgeStyle || {}]}>
            {BadgeElement}
          </Animated.View>
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
