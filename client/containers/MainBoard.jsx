// @flow

import React, { Component, lazy, Suspense } from 'react';
import { graphql } from 'react-apollo';
import {
  Switch,
  Route,
} from 'react-router-dom';

import { FETCH_FOOD_LIST } from '../queries/Global.js';

const Landing = lazy(() => import('./Landing.jsx'));
const SideBar = lazy(() => import('./SideBar.jsx'));

const styles = {
  placement: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
  },
  sideBar: {
    width: 200,
    height: '100%',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  mainBoard: {
    flex: 1,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
        <div style={styles.sideBar}>
          <Suspense fallback={<div>Loading...</div>}>
            <SideBar />
          </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <div style={styles.mainBoard}>
            <Switch>
              <Route path="/landing" component={Landing} />
            </Switch>
          </div>
        </Suspense>
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
