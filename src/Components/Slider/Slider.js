import React, { useState } from 'react'
import './Slider.css'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'

export default function Slider() {

    // eslint-disable-next-line
    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false
    })

    console.log(dataSlider, "dataslider ")

    const nextSlide = () => {
        // if i'm not in the end of object
        if(slideAnim.index !== dataSlider.length) {
            setSlideAnim({index: slideAnim.index + 1, inProgress: true})
        }
        else if(slideAnim.index === dataSlider.length) {
            setSlideAnim({index: 1, inProgress: true})
        }

    }

    const prevSlide = () => {
        // if i'm not in the debut of object
        if(slideAnim.index !== 1) {
            setSlideAnim({index: slideAnim.index - 1, inProgress: true})
        } 
        else if (slideAnim.index === 1) {
            setSlideAnim({index: dataSlider.length, inProgress: true})
        }


    }

    return (
        <div className='container-slider'>
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id} 
                    className={slideAnim.index === index + 1 ?
                    "slide active-anim" : "slide"}
                    >
                        <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt="" />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        </div>
    )
}