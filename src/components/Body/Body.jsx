import React from 'react'
import './Body.scss'
import body from '../../assets/img/body.png'

function Body() {
    return (
        <div className='body'>
            <div className="container">
                <div className="body__info">
                    <h2>iPhone 14 </h2>
                    <h4>Big and bigger.</h4>
                    <p>iPhone 14 Plus available starting 10.7</p>
                    <span>
                        <button>Learn more</button>
                        <button>Pre-order</button>
                    </span>
                    <img src={body} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Body