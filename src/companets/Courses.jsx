import React, { useEffect, useState } from 'react'

function Courses() {

    const [courses, setCourses] = useState([])

    function getCourses() {
        fetch('https://3b4dcc916234dfa4.mokky.dev/Courses').then(function (res) {
            return res.json()
        }).then(function (data) {
            setCourses(data)
        }).catch(function (err) {
            console.log(err, 'Error')
        })
    }


    useEffect(() => {
        getCourses()
    }, [])

    return (
        <section className="courses">
            <div className="container">
                <div className="courses_row">
                    <h1 className="courses_title">Kurslar</h1>

                    <div className="courses_cards">
                        {
                            courses.map((item) => (
                                <div key={item.id} className="courses_card">
                                    <h1 className="courses_card-title">{item.title}</h1>
                                    <p className="courses_card-subtitle">{item.subtitle}</p>
                                    <div className="courses_list">
                                        <div className="courses_item">
                                            <p className="courses_item-title">Davomiyligi</p>
                                            <p className="courses_item-info">{item.active} oy</p>
                                        </div>
                                        <div className="courses_item">
                                            <p className="courses_item-title">Modullar soni</p>
                                            <p className="courses_item-info">{item.mouduls} ta</p>
                                        </div>
                                        <div className="courses_item">
                                            <p className="courses_item-title">Video darslar</p>
                                            <p className="courses_item-info">{item.videos} oy</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courses