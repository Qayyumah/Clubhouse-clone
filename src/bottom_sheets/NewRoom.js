import React, {useState} from 'react'
import style from '../style/roomDetail.module.css'
import { AiOutlineFile, AiOutlinePlus } from 'react-icons/ai'
import { BsMicMuteFill, BsMicFill } from 'react-icons/bs'
import newRoomData from '../data/newRoom.json'

const NewRoom = (props) => {
    const [micMuteVisible, setMicMuteVisible] = useState(false)
    const [itemsVisible, setItemsVisible] = useState(true)
    const card = props.cardDetail
  return (
    <div>
        <div className={style.roomDetailContainer}>
            <div className={style.head}>
                <div className={'d-flex align-items-center'}>
                    <a href='#' onClick={()=>{
                        props.setSheetVisible(false)
                    }}>
                        <img src='https://www.svgrepo.com/show/49353/backward-arrow.svg' className={style.arrow_icon}/>
                    </a>
                    <span>Hallway</span>
                </div>
                <div>
                    <AiOutlineFile/>
                    <img src='https://thumbs.dreamstime.com/b/close-up-side-profile-photo-handsome-him-his-guy-yell-loud-assistant-telephone-rage-outraged-mad-furious-bad-quality-new-151415275.jpg' className={style.profile_img}/>
                </div>
            </div>
            <div className={style.roomDetailCard}>
                    <div className='d-flex align-items-center justify-content-between flex-wrap' style={{padding:'0.5em 1em'}}>
                        {card.members.map((item)=>{
                            return(
                                <div className={style.memberContainer}>
                                    {micMuteVisible ? (
                                        <div className={style.audio_icon}>
                                            <BsMicMuteFill/>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    <img src='https://thumbs.dreamstime.com/b/close-up-side-profile-photo-handsome-him-his-guy-yell-loud-assistant-telephone-rage-outraged-mad-furious-bad-quality-new-151415275.jpg'/>
                                    <p>
                                        <span>*</span>
                                        {item.fist_name}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
            </div>
            <div className={style.footer}>
                <button
                    onClick={()=>{
                        props.setSheetVisible(false)
                    }}
                >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIgdP9P1o9DdRkZxef4wGDw8AH31t0lcJI8vwVM-gQw&s'/>
                Leave Quietly
                </button>
                <div>
                    <button>
                        <AiOutlinePlus/>
                    </button>
                    <button>
                        <img src='https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-hand-icon-png-image_927399.jpg'/>
                    </button>
                    <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
                        {micMuteVisible ? <BsMicMuteFill/> : <BsMicFill/>}
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewRoom