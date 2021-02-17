import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import shoebox1 from '../images/shoebox/1.jpg'
import shoebox2 from '../images/shoebox/2.jpg'
import shoebox3 from '../images/shoebox/3.jpg'
import shoebox4 from '../images/shoebox/4.jpg'
import shoebox5 from '../images/shoebox/5.jpg'
import shoebox6 from '../images/shoebox/6.jpg'
import shoebox7 from '../images/shoebox/7.jpg'
import shoebox8 from '../images/shoebox/8.jpg'
import shoebox9 from '../images/shoebox/9.jpg'
import shoebox10 from '../images/shoebox/10.jpg'
import shoebox11 from '../images/shoebox/11.jpg'
import shoebox12 from '../images/shoebox/12.jpg'

const TestPage = () => (
    <AwesomeSlider
        animation="cubeAnimation"
        cssModule={[CoreStyles, AnimationStyles]}
        bullets={false}
        style={{
            "--slider-height-percentage": "100%",
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
    </AwesomeSlider>
)

export default TestPage