import React, { useState } from 'react'
import './Header.scss'
import logo from '../../assets/img/logo.png'

function Header() {
    const [color, setColor] = useState(false)
    const changColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changColor)
    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <div className="container">
                <nav>
                    <a href="#">
                        <img className='logo' src={logo} alt="" />
                    </a>
                    <ul>
                        <li>


                        </li>
                        <li>
                            <a href="#">Store</a>
                        </li>
                        <li>
                            <a href="#">Mac</a>
                        </li>
                        <li>
                            <a href="#">IPad</a>
                        </li>

                        <li>
                            <a href="#">TV & Home</a>
                        </li>
                        <li>
                            <a href="#">AirPods</a>
                        </li>
                        <li>
                            <a href="#">Only on Apple</a>
                        </li>
                        <li>
                            <a href="#">Accessories</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                        <li>
                            <a href="#"><i class="bi bi-search"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="bi bi-bag"></i></a>
                        </li>

                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default Header