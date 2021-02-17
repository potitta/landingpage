import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import pic1 from '../../images/shirt/bulls1.jpg'
import pic2 from '../../images/shirt/bulls2.jpg'
import pic3 from '../../images/shirt/bulls3.jpg'

const Bulls = () => (
    <AwesomeSlider
        animation="cubeAnimation"
        cssModule={[CoreStyles, AnimationStyles]}
        bullets={false}
        style={{
            "--slider-height-percentage": "120%",
            "--slider-transition-duration": "200ms",
            "--organic-arrow-thickness": "1px",
            "--organic-arrow-border-radius": "0px",
            "--organic-arrow-height": "10px",
            "--organic-arrow-color": "#cf3438",
            "--control-button-width": "5%",
            "--control-button-height": "25%",
            "--control-button-background": "transparent",
            "--control-bullet-color": "#000000",
            "--control-bullet-active-color": "#000000",
            "--loader-bar-color": "#000000",
            "--loader-bar-height": "6px",
        }}
    >
        <div data-src={pic3} />
        <div data-src={pic1} />
        <div data-src={pic2} />
        
    </AwesomeSlider>
)

export default Bulls