# react-js-switch

- Switch is a visual toggle between two mutually exclusive states — on and off.

## Installation

`npm install react-js-switch`

## Usage

```
/...

import Switch from 'react-js-switch'

export default function App() {

    const [isSwitchOn, setIsSwitchOn] = useState(true)

    const switch_onChange_handle = () => {
      setIsSwitchOn(!isSwitchOn)
      /...
    }

    return (
      <div>
        /...

          <Switch
           value={isSwitchOn}
           onChange={switch_onChange_handle}
          />

        /...
      </div>
    );
}

```

## Props

### value : _[Boolean]_

- Value of the switch, true means 'on', false means 'off'.

### size : _[Number] [optional]_

- The size of the switch in pixels.
- **Default Value** 40

### duration : _[Number] [optional]_

- Switch On/Off animation duration in ms.
- **Default Value** 250

### ease : _[String] [optional]_

- Switch On/Off animation timing function (CSS Value).
- **Default Value** 'ease'

### color : _[String] [optional]_

- Custom color for switch circle button.
- **Default Value** '#fff'

### backgroundColor : _[String] [optional]_

- Switch container background color when it's on or off.
- **Default Value** `{ on: '#fc3f7f', off: '#f9f9f9' }`

### borderColor : _[String] [optional]_

- Switch container border color when it's on or off.
- **Default Value** `{ on: '#fc3f7f', off: '#e6e6e6' }`

### disabled : _[Boolean] [optional]_

- Disable toggling the switch.
- **Default Value** false

### onChange : _[Function] [optional]_

- Callback called with the new value when it changes takes a parameter represents switch state.
