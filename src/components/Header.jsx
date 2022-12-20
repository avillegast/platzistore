import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MyOrder from '@containers/MyOrder';
import AppContext from '@context/AppContext';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import cart from '@icons/icon_shopping_cart.svg';

import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
        <nav className={styles.nav}>
        <Image src={menu} alt="menu" className={styles.menu} />
    
        <div className={styles.navbar_left}>
          <Link href="/">
                    <Image src={logo} alt="logo" className={styles.nav_logo}/>
          </Link>

          <ul>
            <li>
              <Link href="/">All</Link>
            </li>
            <li>
              <Link href="/">Clothes</Link>
            </li>
            <li>
              <Link href="/">Electronics</Link>
            </li>
            <li>
              <Link href="/">Furnitures</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>   
        <div className={styles.navbar_right}>
          <ul>
            <li> <div role="button" tabIndex={0} className={styles.navbar_email} onClick={handleToggle} onKeyDown={handleToggle}>
              reactshop@example.com
              </div>
            </li>
            <li> <div role="button" tabIndex={0} className={styles.navbar_shopping_cart}
                onClick={()=> setToggleOrders(!toggleOrders)} onKeyDown={()=> setToggleOrders(!toggleOrders)}>
              <Image src={cart} alt="shopping cart"/>
              {state.cart.length>0 ? <div>{state.cart.length} </div> : null}
              </div>
            </li>
          </ul>
        </div>
        {toggle && <Menu /> }
        {toggleOrders && <MyOrder />}
      </nav>
    );
};

export default Header;
