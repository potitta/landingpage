import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import shoebox1 from '../images/shoebox/hanging/1.jpg'
import shoebox2 from '../images/shoebox/hanging/2.jpg'
import shoebox3 from '../images/shoebox/hanging/3.jpg'
import shoebox4 from '../images/shoebox/hanging/4.jpg'
import shoebox5 from '../images/shoebox/hanging/5.jpg'
import shoebox6 from '../images/shoebox/hanging/6.jpg'
import shoebox7 from '../images/shoebox/hanging/7.jpg'
import shoebox8 from '../images/shoebox/hanging/8.jpg'
import shoebox9 from '../images/shoebox/hanging/9.jpg'
import shoebox10 from '../images/shoebox/hanging/10.jpg'
import shoebox11 from '../images/shoebox/hanging/11.jpg'
import shoebox12 from '../images/shoebox/hanging/12.jpg'
import shoebox13 from '../images/shoebox/hanging/13.jpg'
import shoebox14 from '../images/shoebox/hanging/14.jpg'
import shoebox15 from '../images/shoebox/hanging/15.jpg'
import shoebox16 from '../images/shoebox/hanging/16.jpg'

const Shoebox2 = () => (
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
        <div data-src={shoebox1} />
        <div data-src={shoebox2} />
        <div data-src={shoebox3} />
        <div data-src={shoebox4} />
        <div data-src={shoebox5} />
        <div data-src={shoebox6} />
        <div data-src={shoebox7} />
        <div data-src={shoebox8} />
        <div data-src={shoebox9} />
        <div data-src={shoebox10} />
        <div data-src={shoebox11} />
        <div data-src={shoebox12} />
        <div data-src={shoebox13} />
        <div data-src={shoebox14} />
        <div data-src={shoebox15} />
        <div data-src={shoebox16} />
    </AwesomeSlider>
)

export default Shoebox2