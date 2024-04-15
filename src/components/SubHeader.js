import React from 'react'
import style from '../style/explore.module.css'
import { Link } from 'react-router-dom'

const SubHeader = (props) => {
  return (
    <div className={style.head}>
        <Link to='/home'>
            <img src='https://www.svgrepo.com/show/49353/backward-arrow.svg'/>
        </Link>
        <h3>{props.pageTitle}</h3>
    </div>
  )
}

export default SubHeader