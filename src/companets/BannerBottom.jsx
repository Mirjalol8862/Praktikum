import React, { useEffect, useState } from 'react'

function BannerBottom() {

    const [bannerbtm, setBannerBtm] = useState([])

    function getBannerBtm() {
        fetch("https://3b4dcc916234dfa4.mokky.dev/BannerBottom").then(function (res) {
            return res.json()
        }).then(function (data) {
            setBannerBtm(data)
        }).catch(function (err) {
            console.log(err, 'Error')
        })
    }

    useEffect(() => {
        getBannerBtm()
    }, [])


    return (
        <section className='bannerbtm'>
            <div className="container">
                {
                    bannerbtm.map((item) => (
                        <div key={item.id} className="bannerbtm_card">
                            <div className="bannerbtm_card-content">
                                <div className="bannerbtm_content">
                                    <h3 className="bannerbtm_card-title">{item.title}</h3>
                                    <div className="bannerbtm_buttons">
                                        <button className="bannerbtm_btn">Ro‘yxatdan o‘tish</button>
                                        <button className="bannerbtm_btn">Bog‘lanish</button>
                                    </div>
                                </div>
                            </div>

                            <div className="bannerbtm_img">
                                <img src={item.images} alt="Banner bottom img" />
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default BannerBottom