import React from 'react'

export default function Movie(props) {
  return (
    <div>
        <div className='card'>
            <div className='container'>
                <img src={props.image} alt="John Wick" width="100%" height="230px"/>
                <h2>{props.name}</h2>
                <h4>{props.genre} - {props.year}</h4>
            </div>
        </div>
    </div>
  )
}
