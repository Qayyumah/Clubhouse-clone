import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import style from '../style/PhoneConfirm.module.css'

import PhoneInput from 'react-phone-number-input'


const PhoneConfirmatio = () => {
    const [value, setValue] = useState()
  return (
    <div className={style.PhoneConfirmContainer}>
        <Link exact to='/' className={style.backBtn}>
            <img src='https://www.svgrepo.com/show/49353/backward-arrow.svg' />
        </Link>
        <h1>Enter your phone</h1>
        <PhoneInput international defaultCountry='US' value={value} onChange={setValue}/>
        <p>By entering your number, you're agreeing to our {""}  
        <span>Terms of service and Privacy Policy.</span>
        Thanks!
        </p>
        <Link exact to='/code_confirm' className='primaryBtn d-flex align-items-center'>
            Next <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4HPNAavQaZKaHDfPAPyCqHMRGR_ZfeezFjDQ9LhnU8axTjah038Hxnjle5OpxJ23d7g&usqp=CAU' style={{width: '10%',  }}/>
        </Link>
    </div>
  )
}

export default PhoneConfirmatio