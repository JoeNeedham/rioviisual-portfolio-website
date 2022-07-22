import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <a style={{textDecoration: 'none', color: 'black'}} href='https://www.instagram.com/rioviisuals/'>
                    <i className='icons' class="fa-brands fa-instagram fa-1x"></i>
                </a>
                <Link style={{textDecoration: 'none', color: 'black'}} to='bookme'>
                <i className='icons' class="fa-solid fa-envelope fa-1x"></i>
                </Link>
            </div>
        </div>
    )
}

export default Footer