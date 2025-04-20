import React, { useEffect, useState } from 'react'
import { Accordion, Panel } from 'rsuite';
import "rsuite/dist/rsuite.min.css";


function Questions() {

    const [questions, setQuestions] = useState([])

    function getQuestions() {
        fetch("https://3b4dcc916234dfa4.mokky.dev/Questions").then(function (res) {
            return res.json()
        }).then(function (data) {
            setQuestions(data)
        }).catch(function (err) {
            console.log(err, "Error")
        })
    }

    useEffect(() => {
        getQuestions()
    }, [])

    return (
        <section className='questions'>
            <div className="container">
                <div className="questions_row">
                    <h1 className='questions_title'>Tez-tez so‘raladigan savollar</h1>
                    <div className="questions_list">
                        {
                            questions.map((item) => (
                                <Accordion key={item.id} defaultActiveKey="1" bordered>
                                    <Panel header={item.title} eventKey={item.id}>
                                        <p className="questions_subtitle">{item.subtitle}</p>
                                    </Panel>
                                </Accordion>
                            ))
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Questions