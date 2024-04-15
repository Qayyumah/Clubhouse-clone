import React from 'react'
import exploreStyle from '../style/explore.module.css'
import style from '../style/Profile.module.css'
import { Link } from 'react-router-dom'
import { BsAt, BsPlus, BsUpload } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from 'react-icons/ai'

const Profile = () => {
  return (
    <div>
        <div className={style.profileContainer}>
            <div className={exploreStyle.header}>
                <div className={`${exploreStyle.head} text-right mb-0`}>
                    <Link to='/home'>
                        <img src='https://www.svgrepo.com/show/49353/backward-arrow.svg' className={exploreStyle.arrow_icon}/>
                    </Link>
                    <div className={style.actionBtn}>
                        <BsAt/>
                        <BsUpload/>
                        <AiOutlineSetting/>
                    </div>
                </div>
            </div>

            <img src='https://thumbs.dreamstime.com/b/close-up-side-profile-photo-handsome-him-his-guy-yell-loud-assistant-telephone-rage-outraged-mad-furious-bad-quality-new-151415275.jpg' className={style.Profile_img}/>
            <h4>Rafeh Qazi</h4>
            <p>@cleverQazi</p>
            <div className={style.follow}>
                <p>
                <span>0</span> followers
                </p>
                <p>
                <span>51</span> Following
                </p>
            </div>
            <button>Add a bio</button>
                <div className='mb-4'>
                    <button className='mb-0'>
                        <AiOutlineTwitter/>Add Twitter
                    </button>
                    <button className='mb-0'>
                        <AiOutlineInstagram/>Add Instagram
                    </button>
                </div> 
                <div className={style.nominated}>
                    <img src='https://thumbs.dreamstime.com/b/close-up-side-profile-photo-handsome-him-his-guy-yell-loud-assistant-telephone-rage-outraged-mad-furious-bad-quality-new-151415275.jpg'/>
                    <div>
                        <p>Joined 14-July-2020</p>
                        <p>Nominated by <span>Anton Alarcon</span></p>
                    </div>
                </div>
                <p>Member of</p>
                <button className={style.addMemberButton}>
                <BsPlus/>
                </button>
        </div>
    </div>
  )
}

export default Profile