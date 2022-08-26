import React from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import Image from 'next/image';
import { Paper } from '@mui/material';
interface data {
    image : string
    title : string
    content : string
}



const LatestNews = () => {
    const dataObj: data[] = [
        {
            image : '/asset/news (1).jpg',
            title : 'random',
            content : 'lorem'
        },
        {
            image : '/asset/news (2).jpg',
            title : 'random',
            content : 'lorem'
        },
        {
            image : '/asset/news (3).jpg',
            title : 'random',
            content : 'lorem'
        },
        {
            image : '/asset/news (4).jpg',
            title : 'random',
            content : 'lorem'
        },
    ]

  return (
    <section className='site__section'>
         <h2>Latest News</h2>
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
                { dataObj.map(data => (
                    <SplideSlide className='slide__product'>
                        <Paper
                    className='product__card'
                    >
                        <Image
                        src={data.image}
                        width='300px'
                        height='150px'
                        layout='fixed'
                        />
                        <div className='paperContent'>
                            <h3>{data.title}</h3>
                            <p>{data.content}</p>
                        </div>
                    </Paper>
                    </SplideSlide>
                ))}
            </SplideTrack>
        </Splide>
    </section>
  )
}

export default LatestNews