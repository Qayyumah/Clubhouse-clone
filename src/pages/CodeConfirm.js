import React from 'react'
import style from '../style/PhoneConfirm.module.css'
import {Link} from 'react-router-dom'

const CodeConfirm = () => {
  return (
    <div className={style. PhoneConfirmContainer}>
        <Link exact to='/invite' className={style.backBtn}>
            <img src='https://www.svgrepo.com/show/49353/backward-arrow.svg' />
        </Link> 
        <div className='text-center'>
           <h1 style={{width: '100%', maxWidth: '200px', marginBottom: '1em'}}>
              Enter the code we just texted you
           </h1> 
           <input type='text' style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                textAlign: 'center'
           }}/>
           <p className='mt-2'>Didn't receive it? <span>Tap to resend</span></p>
        </div>
        <Link exact to='/allow_notifications' className='primaryBtn d-flex align-items-center'>
            Next<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY4HPNAavQaZKaHDfPAPyCqHMRGR_ZfeezFjDQ9LhnU8axTjah038Hxnjle5OpxJ23d7g&usqp=CAU' className='ml-1' style={{width: '20px'}}/>
        </Link>
    </div>
  )
}

export default CodeConfirm