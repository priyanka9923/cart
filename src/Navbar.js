import React from 'react';

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="https://image.flaticon.com/icons/png/128/665/665865.png" alt="cart-icon" />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    height: 60,
    background: 'gray',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'red',
    borderRadius: '50%',
    padding: '2px 6px',
    position: 'absolute',
    color :'white',
    right: 3,
    top: -9
  }
};


export default Navbar;