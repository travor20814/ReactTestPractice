// @flow
/* eslint react/no-did-update-set-state: 0 */
import React, { PureComponent } from 'react';

// components
import TwinkleCoverBlock from '../components/TwinkleCoverBlock.jsx';

const GREEN = '#8dd2a2';
const RED = '#e5603b';

type Props = {
  value: number,
};

type State = {
  color: string,
  value: number,
};

const requestAnimationFrame = window.requestAnimationFrame
|| window.mozRequestAnimationFrame
|| window.webkitRequestAnimationFrame
|| window.msRequestAnimationFrame;

function getOrderCurrentUpdateTrend(prevSize, nextSize) {
  if (nextSize > prevSize) {
    return 'UP';
  }

  if (nextSize < prevSize) {
    return 'DOWN';
  }

  return null;
}

class TwinklerWrapper extends PureComponent<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      color: null,
      value: 0,
    };

    this.isMount = false;
  }

  componentDidMount() {
    this.isMount = true;
    const {
      value,
    } = this.props;

    this.setState({
      value,
    });
  }

  componentDidUpdate({
    value: prevValue,
  }) {
    const {
      value,
    } = this.props;

    if (value !== prevValue && value) {
      const trend = getOrderCurrentUpdateTrend(prevValue, value);
      const newColor = (trend === 'UP' && GREEN) || (trend === 'DOWN' && RED) || null;

      requestAnimationFrame(() => {
        if (this.isMount) {
          this.setState({
            color: newColor,
            value,
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.isMount = false;
  }

  isMounted: boolean

  render() {
    const {
      color,
      value,
    } = this.state;

    return (
      <TwinkleCoverBlock
        value={value}
        duration={0.18}
        color={color} />
    );
  }
}

export default TwinklerWrapper;
