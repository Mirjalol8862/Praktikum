import React, { useEffect, useState } from 'react'
import Logo from '../assets/Logo/PraktikumLogo'

function Footer() {

  const [link, setLink] = useState([]);

  function getLink() {
    fetch("https://3b4dcc916234dfa4.mokky.dev/Links").then(function (res) {
      return res.json()
    }).then(function (data) {
      setLink(data)
    }).catch(function (err) {
      console.log(err, "Error")
    })
  }

  useEffect(() => {
    getLink()
  }, [])

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_row">
          <Logo />
          <p className="footer_title">© barcha huquqlardan himoyalangan</p>
          <div className="footer_links">
            {
              link.map((item) => (
                <a key={item.id} className='footer_link' href={item.link}>{item.name}</a>
              ))
            }
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer