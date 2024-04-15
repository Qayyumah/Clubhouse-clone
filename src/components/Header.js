import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style/header.module.css'

const Header = () => {
    
  return (
    <div className={style.Header}>
        <Link exact to='/explore'>
            <img src='/images/icons8-search-50.png'/>
        </Link>
        <div>
            <Link exact to='/friends_invite'>
                <img src='/images/icons8-invite-50.png'/>
            </Link>
            
            <Link exact to='/upcoming'>
                <img src='/images/icons8-calendar-50.png'/>
            </Link>

            <Link exact to='/activity'>
                <img src='/images/icons8-notification-50.png'/>
            </Link>

            <Link exact to='/profile'>
                <img src='/images/icons8-glyph-48.png'/>
            </Link>
        </div>
    </div>
  )
}

export default Header