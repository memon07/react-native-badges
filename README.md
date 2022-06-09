# react-native-badges

[![view on npm](https://img.shields.io/badge/npm-1.0.0-blue)](https://www.npmjs.com/package/react-native-badges)

Icon badge is used to create icon badge on some element, such as avatar, icon, image.... The badge is used to give some alert to user of specific element.

## How to use

Install package:

```bash
npm install --save react-native-badges
```

Import to your app:

```javascript
...
import IconBadge from 'react-native-badges';
...
```

Use the component:

```javascript
const [badgeCount, setBadgeCount] = React.useState(0)
```

```javascript
<View
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <IconBadge
    MainElement={
      <View
        style={{ backgroundColor: '#489EFE', width: 50, height: 50, margin: 6 }}
      />
    }
    BadgeElement={<Text style={{ color: '#FFFFFF' }}>{badgeCount}</Text>}
    IconBadgeStyle={{ width: 30, height: 30, backgroundColor: '#FF00EE' }}
    Hidden={badgeCount == 0}
  />
</View>
```

## API

API table

| API name       | Usage                                     |
| -------------- | ----------------------------------------- |
| MainElement    | The background element.                   |
| BadgeElement   | The badge element, normally it is a Text. |
| IconBadgeStyle | Customized badge style.(Optional)         |
| Hidden         | Hides badge.(Optional)                    |

## Default badge style

```css
IconBadge: {
  position:'absolute',
  top:1,
  right:1,
  minWidth:20,
  height:20,
  borderRadius:15,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'red'
}
```
