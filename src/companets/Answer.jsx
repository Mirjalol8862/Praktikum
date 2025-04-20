import React, { useEffect, useState } from 'react'

function Answer() {

    const [answer, setAnswer] = useState([])

    function getAnswer() {
        fetch('https://3b4dcc916234dfa4.mokky.dev/Answer').then(function (res) {
            return res.json()
        }).then(function (data) {
            setAnswer(data)
        }).catch(function (err) {
            console.log(err, 'Error')
        })
    }

    useEffect(() => {
        getAnswer()
    }, [])

    return (
        <section className='answer'>
            <div className="container">
                {
                    answer.map((item) => (
                        <div key={item.id} className="answer_row">
                            <h1 className="answer_title">{item.title}</h1>
                            <div className="answer_submit-list">
                                <p className="answer_subtitle">{item.subtitle}</p>
                                <button className="answer_btn">Ro‘yxatdan o‘tish</button>
                            </div>
                            <div className="answer_img">
                                <img src="./img/Anwer/Anwer call img.png" alt="Img" />
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default Answer