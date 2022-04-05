import React, {useState, useEffect} from 'react';
import {Box} from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import TrendingItem from './TrendingItem';

function TrendingCarousel(props) {
    const trendingList = [
        {
            name:'Donut', 
            link: '',
            imageURL: 'images/donut.png',
            description: 'donut modeled in blender'
        },
        {
            name:'Spacegame', 
            // link: '',
            // imageURL: '',
            // description: 'spacegame - 2D platformer game'
        }
    ]

    return (
        <>
            <Box sx={
                    { 
                        mr: 2, 
                        backgroundColor: 'primary.main',
                        width: props.width,
                        height: props.height,
                    }
                }
            >
                <Carousel 
                    autoPlay={props.autoPlay}
                    stopAutoPlayOnHover 
                    interval={props.autoPlayInterval} 
                    animation='slide'
                    timeout={props.transitionTime}
                    swipe
                    indicators
                    navButtonsAlwaysInvisible
                    cycleNavigation
                    indicatorContainerProps={{
                        style: {
                            position: 'absolute',
                            marginTop: '-30px',
                        }

                    }}
                >
                    {trendingList.map((item,index) => {
                        return (
                            <TrendingItem 
                                key={index}
                                width={props.width}
                                height={props.height}
                                name={item.name}
                                imgURL={item.imageURL}
                                description={item.description}
                                link={item.link}
                        />
                        )
                    })}
                </Carousel>
            </Box>
            
        </>
    )
}
TrendingCarousel.defaultProps = {
    width: 300,
    height: 400,
    transitionTime: 100,
    autoPlayInterval: 10000,
    autoPlay: false
}
export default TrendingCarousel;