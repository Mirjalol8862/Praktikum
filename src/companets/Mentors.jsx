import React, { useEffect, useState } from 'react'

function Mentors() {

    const [mentors, setMentors] = useState([])

    function getMentors() {
        fetch("https://3b4dcc916234dfa4.mokky.dev/Mentors").then(function (res) {
            return res.json()
        }).then(function (data) {
            setMentors(data)
        }).catch(function (err) {
            console.log(err, "Error")
        })
    }

    useEffect(() => {
        getMentors()
    }, [])

    return (
        <div className="mentors">
            <div className="container">
                <h2 className="mentor_title">Mentorlar</h2>
                <div className="mentors_cards">
                    {
                        mentors.map((item) => (
                            <div key={item.id} className="mentors_card">
                                <h2 className="mentors_card-title">{item.direction}</h2>
                                <div className="mentors_card-image">
                                    <img src={item.images} alt={item.name} />
                                </div>
                                <div className="mentors_card-content">
                                    <p className="mentors_card-data">{item.data} yers</p>
                                    <h2 className="mentors_card-name">{item.name}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Mentors