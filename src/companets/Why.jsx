import React, { useEffect, useState, useRef } from 'react'
import WhyLogoIcon from '../assets/icons/WhyLogoIcon'
import PrevIcon from '../assets/icons/SwiperPrevIcon';
import NextIcon from '../assets/icons/SwiperNextIcon'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

function Why(   ) {

    const [why, setWhy] = useState([])

    function getWhy() {
        fetch('https://3b4dcc916234dfa4.mokky.dev/Why').then(function (res) {
            return res.json()
        }).then(function (data) {
            setWhy(data)
        }).catch(function (err) {
            console.log(err, 'Error')
        })
    }

    useEffect(() => {
        getWhy()
    }, [])

    const swiperRef = useRef(null)

    const prevSlide = () => {
        swiperRef.current.swiper.slidePrev(); // Prev tugmasi
    };

    const nextSlide = () => {
        swiperRef.current.swiper.slideNext(); // Next tugmasi
    };

    return (
        <section className="why">
            <div className="container">
                <div className="why_row">
                    <div className="why_top">
                        <h1 className="why_title">Nima uchun biz</h1>
                        <div className="why_buttons">
                            <button className="why_btn" onClick={prevSlide}><PrevIcon /></button>
                            <button className="why_btn" onClick={nextSlide}><NextIcon /></button>
                        </div>
                    </div>
                    <div className="why_list">
                        <Swiper
                            ref={swiperRef}
                            slidesPerView={3}
                            slidesPerGroup={1}
                            spaceBetween={25}
                            modules={[Navigation]}
                            touchStartPreventDefault={false}
                            className="why_swiper"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    allowTouchMove: true,
                                },
                                400: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                    spaceBetween: 20,
                                    allowTouchMove: true,
                                },
                                1000: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 1,
                                    spaceBetween: 30,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 1,
                                    spaceBetween: 35,
                                },
                            }}
                            
                        >
                            {
                                why.map((item) => (
                                    <SwiperSlide key={item.id} className='why_card'>
                                        <WhyLogoIcon />
                                        <h2 className="why_card-title">{item.name}</h2>
                                        <p className="why_card-subtitle">{item.subtitle}</p>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why