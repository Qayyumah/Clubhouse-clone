import React, { useState } from 'react'
import DailyInfoCard from '../components/DailyInfoCard'
import style from '../style/home.module.css'

import Header from '../components/Header'
import RoomInfoCard from '../components/RoomInfoCard'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsGrid3X3Gap } from 'react-icons/bs'
import data from '../data/roomCard.json'
import BottomSheet from '../components/BottomSheet'
import newRoomData from '../data/newRoom.json'


const Home = () => {
  const [itemsVisible, setItemsVisible] = useState(true)
  const [sheetVisible, setSheetVisible] = useState(false)
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false)
  const [loaderVisibility, setLoaderVisibility] = useState(false)
  const [cardId, setCardId] = useState(1)

  return (
    <div>
      {loaderVisibility ? (
        <div 
        style={{
          position: 'fixed',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <img src='https://assets-v2.lottiefiles.com/a/31b6eec0-1171-11ee-a93a-c70638485918/KmNL43wi3g.gif' style={{width: '100px'}}/>
        </div>
      ) : (
        " "
      )}
      <Header />
      <div className={style.home_container}>
        <DailyInfoCard />
        <RoomInfoCard />
      </div>
      <div className={style.action_btn}>
        <button onClick={() => setSheetVisible(true)}>
          <AiOutlinePlus className='mr-2' />
          Start a room
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </div>
      <BottomSheet sheetTitle="start room" setSheetVisible={(item) => setSheetVisible(item)}
        sheetVisible={sheetVisible}
        cardDetail={data.find((item) => item.id == cardId)}
        setItemsVisible={(item) => setItemsVisible(item)}
        setSheetCreateRoom={(item) => {
          setLoaderVisibility(true)
          setTimeout(() => {
            setSheetCreateRoom(item)
            setLoaderVisibility(false)
          }, 1000)
        }} />

        <BottomSheet
          sheetTitle = "new room"
          setSheetVisible = {(item) => setSheetCreateRoom(item)}
          sheetVisible={sheetCreateRoom}
          cardDetail = {newRoomData}
          setItemsVisible={(item)=>setItemsVisible(item)} />
    </div>
  )
}

export default Home