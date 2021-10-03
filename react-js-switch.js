"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Switch;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Switch(props) {
  var _props$disabled, _props$size, _props$duration, _props$backgroundColo, _props$backgroundColo2, _props$borderColor, _props$borderColor2, _props$value;

  const disabled = (_props$disabled = props.disabled) !== null && _props$disabled !== void 0 ? _props$disabled : false;
  const width = (_props$size = props.size) !== null && _props$size !== void 0 ? _props$size : 40;
  const height = width / 2;
  const duration = (_props$duration = props.duration) !== null && _props$duration !== void 0 ? _props$duration : 250;
  const ease = props.ease || 'ease';
  const color = props.color || '#fff';
  const background_color = {
    on: ((_props$backgroundColo = props.backgroundColor) === null || _props$backgroundColo === void 0 ? void 0 : _props$backgroundColo.on) || '#fc3f7f',
    off: ((_props$backgroundColo2 = props.backgroundColor) === null || _props$backgroundColo2 === void 0 ? void 0 : _props$backgroundColo2.off) || '#f9f9f9'
  };
  const border_color = {
    on: ((_props$borderColor = props.borderColor) === null || _props$borderColor === void 0 ? void 0 : _props$borderColor.on) || '#fc3f7f',
    off: ((_props$borderColor2 = props.borderColor) === null || _props$borderColor2 === void 0 ? void 0 : _props$borderColor2.off) || '#e6e6e6'
  };
  const [isOn, setIsOn] = (0, _react.useState)((_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : false);

  const click_handle = () => {
    var _props$value2, _props$onChange;

    setIsOn((_props$value2 = props.value) !== null && _props$value2 !== void 0 ? _props$value2 : !isOn);
    (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, !isOn);
  };

  (0, _react.useEffect)(() => {
    setIsOn(props.value);
  }, [props.value]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    onClick: disabled ? null : click_handle,
    style: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      width: width + 'px',
      height: height + 'px',
      border: 'solid ' + 2 + 'px' + (isOn ? border_color.on : border_color.off),
      borderRadius: height + 'px',
      backgroundColor: isOn ? background_color.on : background_color.off,
      transitionDuration: duration + 'ms',
      transitionProperty: 'background-color, border-color',
      transitionTimingFunction: ease
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      left: isOn ? width / 2 : '0px',
      width: width / 2 + 'px',
      height: height + 'px',
      borderRadius: '50%',
      backgroundColor: color,
      boxShadow: '#00000050 0px 1px 1px 0px',
      transitionDuration: duration + 'ms',
      transitionProperty: 'left',
      transitionTimingFunction: ease
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