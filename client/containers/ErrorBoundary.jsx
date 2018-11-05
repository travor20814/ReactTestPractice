// @flow
import React, { Component } from 'react';

const styles = {
  text: {
    fontSize: 24,
    color: '#9b9b9b',
    fontWeight: 500,
    letterSpacing: 1,
  },
};

type Props = {
  children: React$Element,
};

class ErrorBoundary extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const {
      hasError,
    } = this.state;

    const {
      children,
    } = this.props;

    if (hasError) {
      return (
        <h1 style={styles.text}>
          網頁發生錯誤，請嘗試重新整理。
        </h1>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
