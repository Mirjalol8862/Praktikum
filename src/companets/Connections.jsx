import React from 'react'

function Connections() {
    return (
        <div className="connections">
            <div className="container">
                <div className="connections_row">
                    <h1 className="connections_title">Ma’lumotlaringizni qoldiring, o‘zimiz siz bilan bog‘lanamiz</h1>

                    <form className='connections_card'>
                        <div className="connections_card-top">
                            <input name='name' type="name" className='connections_input' placeholder='Ism familiya' />
                            <input name='number' type="number" className='connections_input' placeholder='+998' />
                        </div>
                        <div className="connections_card-bottom">
                            <input name='text' type="text" className='connections_input' placeholder='Xabar' />
                            <button className='connections_card-btn' type='submit'>Jo'natish</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Connections