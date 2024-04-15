import React from 'react'
import data from '../data/roomCard.json'
import style from '../style/roomCard.module.css'
import {BsChatDots, BsChatDotsFill, BsFillPersonFill} from 'react-icons/bs'

const RoomInfoCard = () => {
  return (
    <div>
      {
        data.map((item)=>{
          return(
            <div>
              <div>
                <div className={style.roomCardContainer}>
                  <h6>{item.title}</h6>
                  <h2>{item.sub_title}</h2>
                  <div className={style.roomMembers}>
                    <div>
                      <img src='https://thumbs.dreamstime.com/b/close-up-side-profile-photo-handsome-him-his-guy-yell-loud-assistant-telephone-rage-outraged-mad-furious-bad-quality-new-151415275.jpg'/>
                      <img src='https://www.shutterstock.com/image-photo/portrait-smiling-confident-businessman-employee-260nw-1903210795.jpg'/>
                    </div>
                    <div>
                      {
                        item.members.map((person)=>{
                          return(
                            <p>
                              {person.first_name} {person.last_name}<BsChatDots/>
                            </p>
                          )
                        })
                      }
                      <p className='d-flex align-items-center'>
                        <span className='mr-2'>1.8</span>
                        <BsFillPersonFill/>
                        <span className='mx-2'></span>{" "}
                        <span className='mr-2'>5</span><BsChatDotsFill/>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default RoomInfoCard