import React from 'react'
import './Airpods.scss'
import airP from '../../assets/img/airpods.png'

function Airpods() {
    return (
        <div className='airpods'>
            <div className="container">
                <div className="airpods__info">
                    <h2> AirPods Pro </h2>
                    <h4>Rebuilt from the sound up..</h4>
                    <p>Available starting 9.23</p>
                    <span>
                        <button>Learn more</button>
                        <button>Pre-order</button>
                    </span>
                    <img src={airP} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Airpods