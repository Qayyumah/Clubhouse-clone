import React, {useState} from 'react'
import style from '../style/bottomSheet.module.css'
import {FcGlobe} from 'react-icons/fc'

const StartRoom = (props) => {
  const [room, setRoom] = useState('open')
  return (
    <div>
        <div className={style.switch_line}></div>
        <div className='text-right'>
            <button className={style.addTopicBtn}>+ Add a Topic</button>
        </div>
        <div className={style.selectRoom}>
          <button 
            className={room == "open" ? style.active : ""}
            onClick={()=> setRoom('open')}
          >
            <div>
              <FcGlobe />
            </div>
            Open
          </button>

          <button 
            className={room == "social" ? style.active : ""}
            onClick={()=> setRoom('social')}
          >
            <div>
              <FcGlobe/>
            </div>
            Social
          </button>

          <button 
            className={room == "closed" ? style.active : ""}
            onClick={()=> setRoom('closed')}
          >
            <div>
              <FcGlobe/>
            </div>
            Closed
          </button>
        </div>
        <p>
          Start a room {" "}
          <span>
            {room == 'closed' 
            ? 'for people i chose' 
            : room == 'social'
            ? 'with people i follow'
            : 'open to everyone'}
          </span>
        </p>
        <div className={style.letGoBtn}>
          <button
              className={style.letGoBtn}
              onClick={()=>{
                props.setSheetCreateRoom(true)
                props.setSheetVisible(true)
              }}
          >
              Let's go
          </button>
        </div>
    </div>
  )
}

export default StartRoom