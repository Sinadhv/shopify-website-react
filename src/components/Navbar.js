import React from 'react';
import styles from "./Navbar.module.css";
const Navbar = () => {
 return (
  <header className={styles.header}>
     <div className={styles.listContainer}>
      <ul className={styles.list}>
        <li>Home Page</li>
        <li>Products</li>
        <li>About Us</li>
      </ul>
     </div>

     <div className={styles.logo}>
      <img src="../images/logo.jpg"  />
     </div>
  </header>
 )
}

export default Navbar;