import React, { useState } from 'react'

function Login() {
    const [course, setCourse] = useState('');

    return (
        <div className='login'>
            <div className="container">
                <div className="login_panel">
                    <h2 className="login_panel-title">Kursga yozilish</h2>
                    <form className="login_list">
                        <input type="name" name='name' placeholder='Ism familiya' />
                        <input type="number" name='number' placeholder='Telefon raqam' />
                        <select
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            style={{ padding: '10px', borderRadius: '10px', border: 'none', boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}
                        >
                            <option value="" disabled>Kursni tanlang</option>
                            <option value="frontend">Frontend</option>
                            <option value="backend">Backend</option>
                            <option value="fullstack">Full Stack</option>
                        </select>
                        <input type="text" name='text' placeholder='Xabar' />
                        <button className='login_list-btn'>Kurlar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login