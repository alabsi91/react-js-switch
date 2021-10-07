import React, { useEffect, useRef, useState } from 'react';
import { requestNum } from 'request-animation-number';

export default function Switch(props) {
  let handle = useRef();

  const disabled = props.disabled ?? false;
  const width = props.size ?? 40;
  const height = width / 2;
  const duration = props.duration ?? 250;
  const easingFunction = props.ease || 'easeOutExpo';
  const color = props.color || '#fff';
  const background_color = {
    on: props.backgroundColor?.on || '#fc3f7f',
    off: props.backgroundColor?.off || '#f9f9f9',
  };
  const border_color = {
    on: props.borderColor?.on || '#fc3f7f',
    off: props.borderColor?.off || '#e6e6e6',
  };

  const expand_handle_by = width / 2 / 4;

  const [isOn, setIsOn] = useState(props.value ?? false);

  const click_handle = () => {
    setIsOn(props.value ?? !isOn);
    props.onChange?.(!isOn);

    const handleWidth = width / 2;
    requestNum(
      { from: isOn ? handleWidth - expand_handle_by : 0, to: isOn ? 0 : handleWidth, duration, easingFunction },
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
    setIsOn(props.value);
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
          border: 'solid ' + 2 + 'px' + (isOn ? border_color.on : border_color.off),
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
