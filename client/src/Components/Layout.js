import React from 'react';
import Header from './header';
import MenuHeader from './menu-header';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
        <Header />
        <MenuHeader />
        {props.children}
    </>
   )

 }

export default Layout