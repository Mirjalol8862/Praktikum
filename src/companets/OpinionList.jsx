import React, { useEffect, useState, useRef } from 'react'
import Opinion from './Opinion'

import PrevIcon from '../assets/icons/SwiperPrevIcon';
import NextIcon from '../assets/icons/SwiperNextIcon'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';




function OpinionList(props) {

    const [opinion, setOpinion] = useState([])

    function getOpinion() {
        fetch("https://3b4dcc916234dfa4.mokky.dev/Opinion").then(function (res) {
            return res.json()
        }).then(function (data) {
            setOpinion(data)
        }).catch(function (err) {
            console.log(err, "Eroor")
        })
    }

    useEffect(() => {
        getOpinion()
    }, [])



    const swiperRef = useRef(null)

    const prevSlide = () => {
        swiperRef.current.swiper.slidePrev(); // Prev tugmasi
    };

    const nextSlide = () => {
        swiperRef.current.swiper.slideNext(); // Next tugmasi
    };


    return (
        <section className='opinionlist'>
            <div className="container">
                <div className="opinionlist_top">
                    <h1 className='opinionlist_title'>O‘quvchilar fikri</h1>
                    <div className="opinionlist_buttons">
                        <button className="opinionlist_btn" onClick={prevSlide}><PrevIcon /></button>
                        <button className="opinionlist_btn" onClick={nextSlide}><NextIcon /></button>
                    </div>
                </div>
                <div className="opinion_list">
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={3}
                        slidesPerGroup={1}
                        spaceBetween={25}
                        modules={[Navigation]}
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
                                allowTouchMove: true,
                            },
                            1200: {
                                slidesPerView: 4,
                                slidesPerGroup: 1,
                                spaceBetween: 35,
                                allowTouchMove: true,
                            },
                        }}
                    >
                        {
                            opinion.map((item) => (
                                <SwiperSlide key={item.id} >
                                    <Opinion opinion={item} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

// {
//     props.list.map(item => (
//         <Opinion key={item.id} opinion={item} />
//     ))
// }
export default OpinionList