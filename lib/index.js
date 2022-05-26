import * as React from 'react';
import { NativeModules, StyleSheet, View } from 'react-native';
export const IconBadge = React.memo(({ MainViewStyle, MainElement = {}, Hidden = true, IconBadgeStyle = {}, BadgeElement }) => {
    return (React.createElement(View, { style: [MainViewStyle || {}] },
        MainElement,
        !Hidden && (React.createElement(View, { style: [styles.IconBadge, IconBadgeStyle || {}] }, BadgeElement))));
});
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
export default NativeModules.RNBadgesModule;
//# sourceMappingURL=index.js.map