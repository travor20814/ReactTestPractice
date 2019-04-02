// @flow
import React, { PureComponent } from 'react';

import TwinklerWrapper from './TwinklerWrapper.jsx';

const styles = {
  wrapper: {
    width: 200,
    height: 100,
    position: 'relative',
  },
};

type Props = {

};

type State = {
  value: number,
};

class RenderTestPage extends PureComponent<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        value: parseInt(Math.random() * 1000, 10),
      });
    }, 100);
  }

  render() {
    const {
      value,
    } = this.state;

    return (
      <div style={styles.wrapper}>
        {value}
        <TwinklerWrapper value={value} />
      </div>
    );
  }
}

export default RenderTestPage;
