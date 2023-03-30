# react-js-switch

- Switch is a visual toggle between two mutually exclusive states — on and off.

![](https://github.com/alabsi91/react-js-switch/blob/readme/react-switches.png)

## Installation

`npm install react-js-switch`

## Usage

```jsx
//...

import Switch from 'react-js-switch';

export default function App() {
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  const switch_onChange_handle = () => {
    setIsSwitchOn(!isSwitchOn);
    //...
  };

  return (
    <div>
      //...
      <Switch value={isSwitchOn} onChange={switch_onChange_handle} />
      //...
    </div>
  );
}
```

## Props

### `value?: boolean`

- Value of the switch, `true` means 'on', `false` means 'off'.

### `initialValue?: boolean`

- Value of the switch on the first render, `true` means 'on', `false` means 'off'.
- **Note:** this prop will be overwritten by the `value` prop.

### `size?: number`

- The size of the switch in pixels.
- **Default Value** `40`

### `duration?: number`

- Switch On/Off animation duration in ms.
- **Default Value** `250`

### `ease?: string`

- Switch On/Off animation timing function.
- Check [easings.net](https://easings.net/) to learn more.
- **Default Value** `easeOutExpo`
- If you want to provide your own timing-function make sure that the function takes one parameter and returns one value.

```javascript
function easeInQuad(x) {
  return x * x;
}
```

### `color?: string`

- Custom color for switch circle button.
- **Default Value** `#fff`

### `backgroundColor?: string`

- Switch container background color when it's on or off.
- **Default Value** `{ on: '#fc3f7f', off: '#f9f9f9' }`

### `borderColor?: string`

- Switch container border color when it's on or off.
- **Default Value** `{ on: '#fc3f7f', off: '#e6e6e6' }`

### `disabled?: boolean`

- Disable toggling the switch.
- **Default Value** `false`

### `onChange?: (state: Boolean) => void`

- Callback called with the new value when it changes.
- Takes a parameter represents switch state, this parameter will return `null` if the switch `value` linked to a state.
