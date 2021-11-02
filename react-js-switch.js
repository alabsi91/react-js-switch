import React, { useEffect, useRef, useState } from 'react';
import { requestNum } from 'request-animation-number';

export default function Switch(props) {
  let handle = useRef();

  const disabled = props.disabled ?? false;
  const initialValue = props.initialValue ?? false;
  const width = props.size ?? 40;
  const height = width / 2;
  const duration = props.duration ?? 250;
  const easingFunction = props.ease || 'easeOutExpo';
  const color = props.color || '#fff';

  const backgroundColorOn = props.backgroundColor?.on || '#fc3f7f';
  const backgroundColorOff = props.backgroundColor?.off || '#f9f9f9';
  const background_color = {
    on: backgroundColorOn,
    off: backgroundColorOff,
  };

  const borderColorOn = props.borderColor?.on || '#fc3f7f';
  const borderColorOff = props.borderColor?.off || '#e6e6e6';
  const border_color = {
    on: borderColorOn,
    off: borderColorOff,
  };

  const checkTypes = () => {
    if (typeof disabled !== 'boolean') console.error('react-js-switch: props.disabled has invalid value.');

    if (typeof initialValue !== 'boolean') console.error('react-js-switch: props.initialValue has invalid value.');

    if (typeof width !== 'number' || width < 0) console.error('react-js-switch: props.size has invalid value.');

    if (typeof duration !== 'number' || duration < 0) console.error('react-js-switch: props.duration has invalid value.');

    if (
      (!new Set([
        'linear',
        'easeInSine',
        'easeOutSine',
        'easeInOutSine',
        'easeInQuad',
        'easeOutQuad',
        'easeInOutQuad',
        'easeInCubic',
        'easeOutCubic',
        'easeInOutCubic',
        'easeInQuart',
        'easeOutQuart',
        'easeInOutQuart',
        'easeInQuint',
        'easeOutQuint',
        'easeInOutQuint',
        'easeInExpo',
        'easeOutExpo',
        'easeInOutExpo',
        'easeInCirc',
        'easeOutCirc',
        'easeInOutCirc',
        'easeInBack',
        'easeOutBack',
        'easeInOutBack',
        'easeInElastic',
        'easeOutElastic',
        'easeInOutElastic',
        'easeInBounce',
        'easeOutBounce',
        'easeInOutBounce',
      ]).has(easingFunction) &&
        typeof easingFunction === 'string') ||
      (typeof easingFunction !== 'string' && typeof easingFunction !== 'function')
    )
      console.error('react-js-switch: props.ease has invalid value.');

    if (typeof color !== 'string') console.error('react-js-switch: props.color has invalid value.');

    if (typeof backgroundColorOn !== 'string') console.error('react-js-switch: props.backgroundColor.on has invalid value.');
    if (typeof backgroundColorOff !== 'string') console.error('react-js-switch: props.backgroundColor.off has invalid value.');

    if (typeof borderColorOn !== 'string') console.error('react-js-switch: props.borderColor.on has invalid value.');
    if (typeof borderColorOff !== 'string') console.error('react-js-switch: props.borderColor.off has invalid value.');

    if (props.onChange && typeof props.onChange !== 'function')
      console.error('react-js-switch: props.onChange has invalid value.');

    const allProps = new Set([
      'disabled',
      'initialValue',
      'value',
      'size',
      'duration',
      'ease',
      'color',
      'backgroundColor',
      'borderColor',
      'onChange',
    ]);
    for (const key in props) {
      if (Object.hasOwnProperty.call(props, key)) {
        if (!allProps.has(key)) console.error(`react-js-pager: can't recognize props.${key} it's not a valid prop.`);
      }
    }
  };
  checkTypes();

  const expand_handle_by = width / 2 / 4;

  const [isOn, setIsOn] = useState(props.value ?? initialValue);

  const click_handle = () => {
    console.log(props.value, isOn, initialValue);
    if (props.value === isOn) return;
    setIsOn(props.value ?? !isOn);
    props.onChange?.(!isOn);

    const handleWidth = width / 2;
    requestNum(
      {
        from: props.value ?? isOn ? handleWidth - expand_handle_by : 0,
        to: props.value ?? isOn ? 0 : handleWidth,
        duration,
        easingFunction,
      },
      (p, x) => {
        handle.current.style.left = p + 'px';
      }
    );
  };

  const handle_animation_mousDown = () => {
    const handleWidth = width / 2;
    const handleExpand = handleWidth + expand_handle_by;
    requestNum(
      {
        from: [handleWidth, handleWidth],
        to: [handleExpand, handleWidth - expand_handle_by],
        duration: duration / 2,
        easingFunction: 'easeOutCirc',
      },
      (w, l) => {
        handle.current.style.width = `${w}px`;
        if (isOn) handle.current.style.left = l + 'px';
      }
    );
    document.body.addEventListener('mouseup', handle_animation_mousUp);
    document.body.addEventListener('touchend', handle_animation_mousUp);
  };

  const handle_animation_mousUp = () => {
    document.body.removeEventListener('mouseup', handle_animation_mousUp);
    document.body.removeEventListener('touchend', handle_animation_mousUp);
    const handleWidth = width / 2;
    const handleExpand = handleWidth + expand_handle_by;
    requestNum(
      {
        to: [handleWidth, handleWidth],
        from: [handleExpand, handleWidth - expand_handle_by],
        duration: duration / 2,
        easingFunction: 'easeOutCirc',
      },
      (w, l) => {
        handle.current.style.width = `${w}px`;
        if (isOn) handle.current.style.left = l + 'px';
      }
    );
  };

  useEffect(() => {
    if (typeof props.value === 'boolean') setIsOn(props.value);
  }, [props.value]);

  return (
    <>
      <div
        onClick={disabled ? null : click_handle}
        onMouseDown={handle_animation_mousDown}
        onTouchStart={handle_animation_mousDown}
        style={{
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
          transitionTimingFunction: 'ease',
        }}
      >
        <div
          ref={handle}
          style={{
            position: 'absolute',
            left: isOn ? width / 2 : '0px',
            width: width / 2 + 'px',
            height: height + 'px',
            borderRadius: width / 4 + 'px',
            backgroundColor: color,
            boxShadow: '#00000050 0px 1px 1px 0px',
          }}
        />
        <div
          style={{
            display: disabled ? 'block' : 'none',
            position: 'absolute',
            left: '-2px',
            width: '100%',
            height: '100%',
            border: '2px solid white',
            borderRadius: height + 'px',
            backgroundColor: 'white',
            opacity: 0.5,
          }}
        />
      </div>
    </>
  );
}
