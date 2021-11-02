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

### value : _[Boolean] [optional]_

- Value of the switch, `true` means 'on', `false` means 'off'.
### initialValue : _[Boolean] [optional]_

- Value of the switch on the first render, true means 'on', false means 'off'.
- **Note:** this prop will be overwritten by the `value` prop.

### size : _[Number] [optional]_

- The size of the switch in pixels.
- **Default Value** `40`

### duration : _[Number] [optional]_

- Switch On/Off animation duration in ms.
- **Default Value** `250`

### ease : _[String] [optional]_

- Switch On/Off animation timing function.
- Check [easings.net](https://easings.net/) to learn more.
- **Default Value** `easeOutExpo`
- If you want to provide your own timing-function make sure that the function takes one parameter and returns one value.

```javascript
function easeInQuad(x) {
  return x * x;
}
```

### color : _[String] [optional]_

- Custom color for switch circle button.
- **Default Value** `#fff`

### backgroundColor : _[String] [optional]_

- Switch container background color when it's on or off.
- **Default Value** `{ on: '#fc3f7f', off: '#f9f9f9' }`

### borderColor : _[String] [optional]_

- Switch container border color when it's on or off.
- **Default Value** `{ on: '#fc3f7f', off: '#e6e6e6' }`

### disabled : _[Boolean] [optional]_

- Disable toggling the switch.
- **Default Value** `false`

### onChange : _[ (state: Boolean) => void ] [optional]_

- Callback called with the new value when it changes.
- Takes a parameter represents switch state, this parameter will return `null` if the switch `value` linked to a state.
