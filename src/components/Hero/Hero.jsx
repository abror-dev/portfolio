import React from 'react'
import './Hero.scss'
import iphone from '../../assets/img/iphone.png'

function Hero() {
    return (
        <div className='hero'>
            <div className="container">
                <div className="wrapper">
                    <h2>iPhone 14 Pro</h2>
                    <h3>Pro. Beyond.</h3>
                    <p>Available starting 9:16</p>
                    <span className='button
               '>
                        <button>
                            <a href="#">Learn more</a>
                        </button>
                        <button>

                            <a href="#">
                                Pre-order
                            </a>
                        </button>
                    </span>
                </div>
                <img className='iphone' src={iphone} alt="" />
            </div>
        </div>
    )
}

export default Hero