import React from 'react';
import { useSwiper } from 'swiper/react';   
//import {ReactComponent as leftArrow} from '../../assets/CaroLeft.svg';
import {ReactComponent as LeftArrow} from '../../assets/CaroLeft.svg';
import StyleSheet from './CarouselLeftNavigation.module.css';   
export default function CarouselLeftNavigation( ) {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = React.useState(swiper.isBeginning);
    swiper.on("slideChange", function() {
      setIsBeginning(swiper.isBeginning);
    });
    return (
        <div className={StyleSheet.leftNavigation}>
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
            </div>
    );
}   