import React from 'react'
import Image from 'next/image';
// mui
import { IconButton } from '@mui/material'

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
        <IconButton>
          <MenuIcon sx={{ color : '#666'}} />
        </IconButton>
        <IconButton>
          <SearchIcon sx={{ color : '#666'}}/>
        </IconButton>
      </div>
      <Image 
      src={logo}
      layout='fixed'
      width='120px'
      height='60px'
      />
      <div className={styles.navBar__wrapper}>
        <IconButton>
          <ShoppingCartIcon sx={{ color : '#666'}}/>
        </IconButton>
        <IconButton>
          <AccountCircleIcon sx={{ color : '#666'}}/>
        </IconButton>
      </div>
    </nav>
  )
}

export default HeaderNav