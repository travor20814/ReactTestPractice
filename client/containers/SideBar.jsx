import React from 'react';
import radium from 'radium';
import {
  NavLink,
} from 'react-router-dom';

const styles = {
  wrapper: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  navWrapper: {
    textDecoration: 'none',
    fontSize: 22,
    fontWeight: 500,
    letterSpacing: 1,
    color: 'rgb(74, 98, 167)',
  },
  navActive: {
    fontSize: 24,
    color: 'rgb(102, 123, 185)',
  },
};

const Link = radium(NavLink);

function SideBar() {
  return (
    <div style={styles.wrapper}>
      <Link
        to={{ pathname: '/landing' }}
        style={styles.navWrapper}
        activeStyle={styles.navActive}>
        首頁
      </Link>
      <Link
        to={{ pathname: '/article' }}
        style={styles.navWrapper}
        activeStyle={styles.navActive}>
        文章
      </Link>
    </div>
  );
}

export default SideBar;
