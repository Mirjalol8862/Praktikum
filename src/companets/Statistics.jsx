import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';


function Statistics() {
    const [statistics, setStatistics] = useState([])
    const [son, setSon] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setSon((prev) => {
        if (prev < 1200) {
          return prev + 10;
        } else {
          clearInterval(interval);
          return 1200;
        }
      });
    }, 5);

    return () => clearInterval(interval);
  }, []);

    function getStatistics() {
        fetch('https://3b4dcc916234dfa4.mokky.dev/Statistics').then(function (res) {
            return res.json()
        }).then(function (data) {
            setStatistics(data)
        }).catch(function (err) {
            console.log(err, 'Error')
        })
    }

    useEffect(() => {
        getStatistics()
    }, [])





    

    return (
        <section className="statistics">
            <div className="container">
                <div className="statistics_row">
                    {
                        statistics.map((item) => (
                            <div key={item.id} className="statistics_item">
                                <h1 className="statistics_number">{item.statistics}</h1>
                                <p className="statistics_subtitle">{item.name}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>

    )
}

export default Statistics