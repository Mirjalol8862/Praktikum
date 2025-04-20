import React from 'react'
import ReactPlayer from 'react-player';



function Opinion(props) {
    return (
        <div className='opinion'>
            <div className="opinion_card">
                <h3 className="opinion_direction">{props.opinion.direction}</h3>
                <ReactPlayer
                    url={props.opinion.video}
                    width="100%"
                    height="100%"
                    className="opinion_player"
                    controls
                    light={props.opinion.post}
                />
                <h1 className="opinion_name">{props.opinion.name}</h1>
            </div>

        </div>
    )
}

export default Opinion