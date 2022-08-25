import React from 'react'
import Image from 'next/image';
// icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// images
import logo from '../public/asset/nvidia-logo.png'
// css
import styles from '../styles/HeaderNav.module.scss'



const HeaderNav = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBar__wrapper}>
        <MenuIcon sx={{ color : '#666'}} />
        <SearchIcon sx={{ color : '#666'}}/>
      </div>
      <Image 
      src={logo}
      layout='fixed'
      width='120px'
      height='60px'
      />
      <div className={styles.navBar__wrapper}>
        <ShoppingCartIcon sx={{ color : '#666'}}/>
        <AccountCircleIcon sx={{ color : '#666'}}/>
      </div>
    </nav>
  )
}

export default HeaderNav