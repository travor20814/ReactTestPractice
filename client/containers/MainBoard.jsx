// @flow

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {
  Switch,
  Route,
} from 'react-router-dom';

import { FETCH_FOOD_LIST } from '../queries/Global.js';

const styles = {
  placement: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
};

type Props = {
  foodList: Array<{
    id: Number,
    name: String,
    picture: String,
    activePicture: String,
    nobgPicture: String,
  }>,
};

class MainBoard extends Component<Props> {
  render() {
    return (
      <div style={styles.placement}>
        <Switch>
          <Route path="/" component={null} />
        </Switch>
      </div>
    );
  }
}

const queryHook = graphql(FETCH_FOOD_LIST, {
  props: ({
    data: {
      foodList,
    },
  }) => ({
    foodList: foodList || null,
  }),
});

export default queryHook(MainBoard);
