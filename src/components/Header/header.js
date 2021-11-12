import React from 'react';
import style from './header.module.css';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';

const Header = () => {

  const navBars = () => (
    <div className={style['bars']}>
      <FontAwesome name="bars"
      style={{
        color:'#fff',
        padding: '10px',
        cursor: 'pointer'
      }} />
    </div>
  )

  const logo = () => (
    <Link to="/" className={style['logo']}>
      HDP
    </Link>
  )

  return (
    <header className={style['header']}>
      <div className={style['headerOpt']}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );

};

export default Header;
