// @flow
import React, { memo } from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    opacity: 0,
    cursor: 'default',
  },
};

const twinkle = radium.keyframes({
  '0%': {
    opacity: 0.1,
  },
  '60%': {
    opacity: 0.4,
  },
  '100%': {
    opacity: 0.1,
  },
});

function TwinkleCoverBlock({
  value,
  color,
  duration,
}: {
  value: number,
  color: string,
  duration?: number,
}) {
  return (
    <div
      key={value}
      style={{
        ...styles.wrapper,
        backgroundColor: color,
        animationName: color ? twinkle : null,
        animationDuration: `${duration}s`,
        animationIterationCount: 1,
      }} />
  );
}

TwinkleCoverBlock.defaultProps = {
  duration: 0.3,
};

export default memo(radium(TwinkleCoverBlock));
