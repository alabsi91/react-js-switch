type NamedColor =
  | 'aliceblue'
  | 'antiquewhite'
  | 'aqua'
  | 'aquamarine'
  | 'azure'
  | 'beige'
  | 'bisque'
  | 'black'
  | 'blanchedalmond'
  | 'blue'
  | 'blueviolet'
  | 'brown'
  | 'burlywood'
  | 'cadetblue'
  | 'chartreuse'
  | 'chocolate'
  | 'coral'
  | 'cornflowerblue'
  | 'cornsilk'
  | 'crimson'
  | 'cyan'
  | 'darkblue'
  | 'darkcyan'
  | 'darkgoldenrod'
  | 'darkgray'
  | 'darkgreen'
  | 'darkgrey'
  | 'darkkhaki'
  | 'darkmagenta'
  | 'darkolivegreen'
  | 'darkorange'
  | 'darkorchid'
  | 'darkred'
  | 'darksalmon'
  | 'darkseagreen'
  | 'darkslateblue'
  | 'darkslategray'
  | 'darkslategrey'
  | 'darkturquoise'
  | 'darkviolet'
  | 'deeppink'
  | 'deepskyblue'
  | 'dimgray'
  | 'dimgrey'
  | 'dodgerblue'
  | 'firebrick'
  | 'floralwhite'
  | 'forestgreen'
  | 'fuchsia'
  | 'gainsboro'
  | 'ghostwhite'
  | 'gold'
  | 'goldenrod'
  | 'gray'
  | 'green'
  | 'greenyellow'
  | 'grey'
  | 'honeydew'
  | 'hotpink'
  | 'indianred'
  | 'indigo'
  | 'ivory'
  | 'khaki'
  | 'lavender'
  | 'lavenderblush'
  | 'lawngreen'
  | 'lemonchiffon'
  | 'lightblue'
  | 'lightcoral'
  | 'lightcyan'
  | 'lightgoldenrodyellow'
  | 'lightgray'
  | 'lightgreen'
  | 'lightgrey'
  | 'lightpink'
  | 'lightsalmon'
  | 'lightseagreen'
  | 'lightskyblue'
  | 'lightslategray'
  | 'lightslategrey'
  | 'lightsteelblue'
  | 'lightyellow'
  | 'lime'
  | 'limegreen'
  | 'linen'
  | 'magenta'
  | 'maroon'
  | 'mediumaquamarine'
  | 'mediumblue'
  | 'mediumorchid'
  | 'mediumpurple'
  | 'mediumseagreen'
  | 'mediumslateblue'
  | 'mediumspringgreen'
  | 'mediumturquoise'
  | 'mediumvioletred'
  | 'midnightblue'
  | 'mintcream'
  | 'mistyrose'
  | 'moccasin'
  | 'navajowhite'
  | 'navy'
  | 'oldlace'
  | 'olive'
  | 'olivedrab'
  | 'orange'
  | 'orangered'
  | 'orchid'
  | 'palegoldenrod'
  | 'palegreen'
  | 'paleturquoise'
  | 'palevioletred'
  | 'papayawhip'
  | 'peachpuff'
  | 'peru'
  | 'pink'
  | 'plum'
  | 'powderblue'
  | 'purple'
  | 'rebeccapurple'
  | 'red'
  | 'rosybrown'
  | 'royalblue'
  | 'saddlebrown'
  | 'salmon'
  | 'sandybrown'
  | 'seagreen'
  | 'seashell'
  | 'sienna'
  | 'silver'
  | 'skyblue'
  | 'slateblue'
  | 'slategray'
  | 'slategrey'
  | 'snow'
  | 'springgreen'
  | 'steelblue'
  | 'tan'
  | 'teal'
  | 'thistle'
  | 'tomato'
  | 'transparent'
  | 'turquoise'
  | 'violet'
  | 'wheat'
  | 'white'
  | 'whitesmoke'
  | 'yellow'
  | 'yellowgreen'
  | (string & {});

type requestFrameEasing =
  | 'linear'
  | 'easeInSine'
  | 'easeOutSine'
  | 'easeInOutSine'
  | 'easeInQuad'
  | 'easeOutQuad'
  | 'easeInOutQuad'
  | 'easeInCubic'
  | 'easeOutCubic'
  | 'easeInOutCubic'
  | 'easeInQuart'
  | 'easeOutQuart'
  | 'easeInOutQuart'
  | 'easeInQuint'
  | 'easeOutQuint'
  | 'easeInOutQuint'
  | 'easeInExpo'
  | 'easeOutExpo'
  | 'easeInOutExpo'
  | 'easeInCirc'
  | 'easeOutCirc'
  | 'easeInOutCirc'
  | 'easeInBack'
  | 'easeOutBack'
  | 'easeInOutBack'
  | 'easeInElastic'
  | 'easeOutElastic'
  | 'easeInOutElastic'
  | 'easeInBounce'
  | 'easeOutBounce'
  | 'easeInOutBounce';

interface backgroundColor {
  /**
   * Switch container background color when it's on.
   * **Default Value** `#fc3f7f`
   */
  on?: NamedColor;

  /**
   * Switch container background color when it'soff.
   * **Default Value** `#f9f9f9`
   */
  off?: NamedColor;
}

interface borderColor {
  /**
   * Switch container border color when it's on.
   * **Default Value** `#fc3f7f`
   */
  on?: NamedColor;

  /**
   * Switch container border color when it'soff.
   * **Default Value** `#e6e6e6`
   */
  off?: NamedColor;
}

interface SwitchProps {
  /**
   * - The size of the switch in pixels.
   * **Default Value** `40`
   */
  size?: number;

  /**
   * - Switch On/Off animation duration in ms.
   * - **Default Value** `250`
   */
  duration?: number;

  /**
   * - Switch On/Off animation timing function.
   * - Check [easings.net](https://easings.net/) to learn more.
   * - **Default Value** `easeOutExpo`
   */
  ease?: requestFrameEasing | ((x: number) => number);

  /**
   * - Custom color for switch circle button.
   * - **Default Value** `#fff`
   */
  color?: NamedColor;

  /**
   * - Switch container background color when it's on or off.
   * - **Default Value** `{ on: '#fc3f7f', off: '#f9f9f9' }`
   */
  backgroundColor?: backgroundColor;

  /**
   * - Switch container border color when it's on or off.
   * - **Default Value** `{ on: '#fc3f7f', off: '#e6e6e6' }`
   */
  borderColor?: borderColor;

  /**
   * - Value of the switch, true means `on`, false means `off`.
   */
  value?: boolean;

  /**
   * - Value of the switch on the first render, true means `on`, false means `off`.
   * - **Note:** this prop will be overwritten by the `value` prop.
   */
  initialValue?: boolean;

  /**
   * - Disable toggling the switch.
   * - **Default Value** `false`
   */
  disabled?: boolean;

  /**
   * - Callback called with the new value when it changes.
   * - Takes a parameter represents switch state, this parameter will return `null` if the switch `value` linked to a state.
   */
  onChange: (state?: boolean) => void;
}

declare const Switch: React.FunctionComponent<SwitchProps>;

export default Switch;
