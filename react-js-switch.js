import React, { useEffect, useState } from 'react';

export default function Switch(props) {
  const disabled = props.disabled ?? false;
  const width = props.size ?? 40;
  const height = width / 2;
  const duration = props.duration ?? 250;
  const ease = props.ease || 'ease';
  const color = props.color || '#fff';
  const background_color = {
    on: props.backgroundColor?.on || '#fc3f7f',
    off: props.backgroundColor?.off || '#f9f9f9',
  };
  const border_color = {
    on: props.borderColor?.on || '#fc3f7f',
    off: props.borderColor?.off || '#e6e6e6',
  };
  const [isOn, setIsOn] = useState(props.value ?? false);

  const click_handle = () => {
    setIsOn(props.value ?? !isOn);
    props.onChange?.(!isOn);
  };

  useEffect(() => {
    setIsOn(props.value);
  }, [props.value]);

  return (
    <>
      <div
        onClick={disabled ? null : click_handle}
        style={{
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
          transitionTimingFunction: ease,
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: isOn ? width / 2 : '0px',
            width: width / 2 + 'px',
            height: height + 'px',
            borderRadius: '50%',
            backgroundColor: color,
            boxShadow: '#00000050 0px 1px 1px 0px',
            transitionDuration: duration + 'ms',
            transitionProperty: 'left',
            transitionTimingFunction: ease,
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
