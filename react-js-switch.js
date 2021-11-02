"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Switch;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _requestAnimationNumber = require("request-animation-number");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Switch(props) {
  var _props$disabled, _props$initialValue, _props$size, _props$duration, _props$backgroundColo, _props$backgroundColo2, _props$borderColor, _props$borderColor2, _props$value;

  let handle = (0, _react.useRef)();
  const disabled = (_props$disabled = props.disabled) !== null && _props$disabled !== void 0 ? _props$disabled : false;
  const initialValue = (_props$initialValue = props.initialValue) !== null && _props$initialValue !== void 0 ? _props$initialValue : false;
  const width = (_props$size = props.size) !== null && _props$size !== void 0 ? _props$size : 40;
  const height = width / 2;
  const duration = (_props$duration = props.duration) !== null && _props$duration !== void 0 ? _props$duration : 250;
  const easingFunction = props.ease || 'easeOutExpo';
  const color = props.color || '#fff';
  const backgroundColorOn = ((_props$backgroundColo = props.backgroundColor) === null || _props$backgroundColo === void 0 ? void 0 : _props$backgroundColo.on) || '#fc3f7f';
  const backgroundColorOff = ((_props$backgroundColo2 = props.backgroundColor) === null || _props$backgroundColo2 === void 0 ? void 0 : _props$backgroundColo2.off) || '#f9f9f9';
  const background_color = {
    on: backgroundColorOn,
    off: backgroundColorOff
  };
  const borderColorOn = ((_props$borderColor = props.borderColor) === null || _props$borderColor === void 0 ? void 0 : _props$borderColor.on) || '#fc3f7f';
  const borderColorOff = ((_props$borderColor2 = props.borderColor) === null || _props$borderColor2 === void 0 ? void 0 : _props$borderColor2.off) || '#e6e6e6';
  const border_color = {
    on: borderColorOn,
    off: borderColorOff
  };

  const checkTypes = () => {
    if (typeof disabled !== 'boolean') console.error('react-js-switch: props.disabled has invalid value.');
    if (typeof initialValue !== 'boolean') console.error('react-js-switch: props.initialValue has invalid value.');
    if (typeof width !== 'number' || width < 0) console.error('react-js-switch: props.size has invalid value.');
    if (typeof duration !== 'number' || duration < 0) console.error('react-js-switch: props.duration has invalid value.');
    if (!new Set(['linear', 'easeInSine', 'easeOutSine', 'easeInOutSine', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint', 'easeInExpo', 'easeOutExpo', 'easeInOutExpo', 'easeInCirc', 'easeOutCirc', 'easeInOutCirc', 'easeInBack', 'easeOutBack', 'easeInOutBack', 'easeInElastic', 'easeOutElastic', 'easeInOutElastic', 'easeInBounce', 'easeOutBounce', 'easeInOutBounce']).has(easingFunction) && typeof easingFunction === 'string' || typeof easingFunction !== 'string' && typeof easingFunction !== 'function') console.error('react-js-switch: props.ease has invalid value.');
    if (typeof color !== 'string') console.error('react-js-switch: props.color has invalid value.');
    if (typeof backgroundColorOn !== 'string') console.error('react-js-switch: props.backgroundColor.on has invalid value.');
    if (typeof backgroundColorOff !== 'string') console.error('react-js-switch: props.backgroundColor.off has invalid value.');
    if (typeof borderColorOn !== 'string') console.error('react-js-switch: props.borderColor.on has invalid value.');
    if (typeof borderColorOff !== 'string') console.error('react-js-switch: props.borderColor.off has invalid value.');
    if (props.onChange && typeof props.onChange !== 'function') console.error('react-js-switch: props.onChange has invalid value.');
    const allProps = new Set(['disabled', 'initialValue', 'value', 'size', 'duration', 'ease', 'color', 'backgroundColor', 'borderColor', 'onChange']);

    for (const key in props) {
      if (Object.hasOwnProperty.call(props, key)) {
        if (!allProps.has(key)) console.error("react-js-switch: can't recognize props.".concat(key, " it's not a valid prop."));
      }
    }
  };

  checkTypes();
  const expand_handle_by = width / 2 / 4;
  const [isOn, setIsOn] = (0, _react.useState)((_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : initialValue);

  const click_handle = () => {
    var _props$onChange2;

    if (typeof props.value === 'boolean') {
      var _props$onChange;

      (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, null);
      return;
    }

    (_props$onChange2 = props.onChange) === null || _props$onChange2 === void 0 ? void 0 : _props$onChange2.call(props, !isOn);
    setIsOn(!isOn);
    (0, _requestAnimationNumber.requestNum)({
      from: !isOn ? 0 : width / 2 - expand_handle_by,
      to: !isOn ? width / 2 : 0,
      duration,
      easingFunction
    }, p => handle.current.style.left = p + 'px');
  };

  const handle_animation_mousDown = () => {
    const handleWidth = width / 2;
    const handleExpand = handleWidth + expand_handle_by;
    (0, _requestAnimationNumber.requestNum)({
      from: [handleWidth, handleWidth],
      to: [handleExpand, handleWidth - expand_handle_by],
      duration: duration / 2,
      easingFunction: 'easeOutCirc'
    }, (w, l) => {
      handle.current.style.width = "".concat(w, "px");
      if (isOn) handle.current.style.left = l + 'px';
    });
    document.body.addEventListener('mouseup', handle_animation_mousUp);
    document.body.addEventListener('touchend', handle_animation_mousUp);
  };

  const handle_animation_mousUp = () => {
    document.body.removeEventListener('mouseup', handle_animation_mousUp);
    document.body.removeEventListener('touchend', handle_animation_mousUp);
    const handleWidth = width / 2;
    const handleExpand = handleWidth + expand_handle_by;
    (0, _requestAnimationNumber.requestNum)({
      to: [handleWidth, handleWidth],
      from: [handleExpand, handleWidth - expand_handle_by],
      duration: duration / 2,
      easingFunction: 'easeOutCirc'
    }, (w, l) => {
      handle.current.style.width = "".concat(w, "px");
      if (isOn) handle.current.style.left = l + 'px';
    });
  };

  (0, _react.useEffect)(() => {
    if (typeof props.value === 'boolean' && props.value !== isOn) {
      setIsOn(props.value);
      (0, _requestAnimationNumber.requestNum)({
        from: props.value ? 0 : width / 2 - expand_handle_by,
        to: props.value ? width / 2 : 0,
        duration,
        easingFunction
      }, p => handle.current.style.left = p + 'px');
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [props.value]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    onClick: disabled ? null : click_handle,
    onMouseDown: handle_animation_mousDown,
    onTouchStart: handle_animation_mousDown,
    style: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      width: width + 'px',
      height: height + 'px',
      border: 'solid ' + 2 + 'px ' + (isOn ? border_color.on : border_color.off),
      borderRadius: height + 'px',
      backgroundColor: isOn ? background_color.on : background_color.off,
      cursor: 'pointer',
      WebkitTapHighlightColor: 'transparent',
      transitionDuration: duration + 'ms',
      transitionProperty: 'background-color, border-color',
      transitionTimingFunction: 'ease'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: handle,
    style: {
      position: 'absolute',
      left: isOn ? width / 2 + 'px' : '0px',
      width: width / 2 + 'px',
      height: height + 'px',
      borderRadius: width / 4 + 'px',
      backgroundColor: color,
      boxShadow: '#00000050 0px 1px 1px 0px'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: disabled ? 'block' : 'none',
      position: 'absolute',
      left: '-2px',
      width: '100%',
      height: '100%',
      border: '2px solid white',
      borderRadius: height + 'px',
      backgroundColor: 'white',
      opacity: 0.5
    }
  })));
}