import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Banner() {

    const [banners, setBanners] = useState([])

    function getBanners() {
        fetch('https://3b4dcc916234dfa4.mokky.dev/Banner').then(function (res) {
            return res.json()
        }).then(function (data) {
            setBanners(data);
        }).catch(function (err) {
            console.log(err, 'Error');
        })

    }
    useEffect(() => {
        getBanners()
    }, [])


    return (
        <section className="banner">
            <div className="container">
                {
                    banners.map((item) => (
                        <div key={item.id} className="banner_row">
                            <div className="banner_content">
                                <h1 className="banner_title">{item.title}</h1>
                                <p className="banner_subtitle">{item.subtitle}</p>
                                <div className="banner_buttons">
                                    <Link className='banner_btn'>Kurslar</Link>
                                    <Link className='banner_btn'>Bog‘lanish</Link>
                                </div>
                            </div>
                            <img src={item.images} alt="" className="banner_img"/>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Banner