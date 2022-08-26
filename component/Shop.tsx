import React from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import { Paper } from '@mui/material';
// images
import product1 from  '../public/asset/product (1).jpg'
import product2 from  '../public/asset/product (2).jpg'
import product3 from  '../public/asset/product (3).jpg'
import product4 from  '../public/asset/product (4).jpg'
// styles
import styles from '../styles/Shop.module.scss'


const Shop = () => {
  return (
    <section className='site__section'>
        <h2>Shop</h2>
        <Splide
        hasTrack={false} aria-label="My Favorite Images"
        options={{
            rewind : true,
            perPage : 1,
            breakpoints : {
                650 : {
                    perPage : 2
                }
            },
            gap : '1em',
            padding : '10px',
            drag : 'free',
            pagination : false
        }}
        >
            <SplideTrack>
                <SplideSlide className='slide__product'>
                    <Paper
                    className='product__card'
                    >
                        <Image
                        src={product1}
                        width='300px'
                        height='150px'
                        layout='fixed'
                        />
                        <div className='paperContent'>
                            <h3>GFN Thursday</h3>
                            <p>See what;s streaming this week on GeForce NOW</p>
                        </div>
                    </Paper>
                </SplideSlide>
                <SplideSlide className='slide__product'>
                    <Paper
                    className='product__card'
                    >
                        <Image
                        src={product2}
                        width='300px'
                        height='150px'
                        layout='fixed'
                        />
                        <div className='paperContent'>
                            <h3>In the NVIDIA Studio</h3>
                            <p>Your weekly celebration of extraordinary artists, inspiring art, and creator news</p>
                        </div>
                    </Paper>
                </SplideSlide>
                <SplideSlide className='slide__product'>
                    <Paper
                    className='product__card'
                    >
                        <Image
                        src={product3}
                        width='300px'
                        height='150px'
                        layout='fixed'
                        />
                        <div className='paperContent'>
                            <h3>The Ultimate Play</h3>
                            <p>GeForce RTX&rdquo; 30 Series</p>
                        </div>
                    </Paper>
                </SplideSlide>
                <SplideSlide className='slide__product'>
                    <Paper
                    className='product__card'
                    >
                        <Image
                        src={product4}
                        width='300px'
                        height='150px'
                        layout='fixed'
                        />
                        <div className='paperContent'>
                            <h3>GeForce RTX 30 Series Laptops</h3>
                            <p>Poweing the world&#39;s fastest laptops for gamers and creators. With new AI-powered Max-Q technologies that optimize laptops to deliver high performance in thin form factors</p>
                        </div>
                    </Paper>
                </SplideSlide>
            </SplideTrack>
        </Splide>
    </section>
  )
}

export default Shop