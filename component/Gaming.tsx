import React from 'react'
// spide
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import Image from 'next/image';
import { Paper } from '@mui/material';
// images
import game1 from '../public/asset/game (1).jpg'
import game2 from '../public/asset/game (2).jpg'
import game3 from '../public/asset/game (3).jpg'
import game4 from '../public/asset/game (4).jpg'

const Gaming = () => {
  return (
    <section className='site__section'>
        <h2>Gaming</h2>
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
                        src={game1}
                        width='300px'
                        height='150px'
                        layout='fixed'
                        />
                        <div className='paperContent'>
                            <h3>NVIDIA DLSS</h3>
                            <p>Max FPS. Max Quality. Powered by AI.</p>
                        </div>
                    </Paper>
                </SplideSlide>
                <SplideSlide className='slide__product'>
                    <Paper
                    className='product__card'
                    >
                        <Image
                        src={game2}
                        width='300px'
                        height='150px'
                        layout='fixed'
                        />
                        <div className='paperContent'>
                            <h3>Frames Win Games</h3>
                            <p>NVIDIA Reflex Available Now.</p>
                        </div>
                    </Paper>
                </SplideSlide>
                <SplideSlide className='slide__product'>
                    <Paper
                    className='product__card'
                    >
                        <Image
                        src={game3}
                        width='300px'
                        height='150px'
                        layout='fixed'
                        />
                        <div className='paperContent'>
                            <h3>NVIDIA DLSS</h3>
                            <p>200 Games and Apps Available Now.</p>
                        </div>
                    </Paper>
                </SplideSlide>
                <SplideSlide className='slide__product'>
                    <Paper
                    className='product__card'
                    >
                        <Image
                        src={game4}
                        width='300px'
                        height='150px'
                        layout='fixed'
                        />
                        <div className='paperContent'>
                            <h3>Game Ready Drivers</h3>
                            <p>Learn How to Get The Best Gaming Experience</p>
                        </div>
                    </Paper>
                </SplideSlide>
            </SplideTrack>
        </Splide>
    </section>
  )
}

export default Gaming