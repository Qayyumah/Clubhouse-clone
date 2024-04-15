import React from 'react'
import style from '../style/explore.module.css'
import {DownOutlined, FireOutlined} from '@ant-design/icons'
import data from '../data/Explore.json'
import {Input} from 'antd'
import SubHeader from '../components/SubHeader'

const Explore = () => {
    const{people, conversation} = data
  return (
    <div className={style.exploreContainer}>
        <div className={style.header}>
            <SubHeader pageTitle='Explore'/>
            <Input style={{
                backgroundColor:'#f4f4f4',
                borderRadius:'0.8em',
                padding:'0.3em 1em',
                border:'none',
                boxShadow:'none'
            }}
            size='large'
            placeholder='Find people and clubs'
            prefix={<img src='/images/icons8-search-50.png' width='15px'/>}></Input>
        </div>
        <h6>PEOPLE TO FOLLOW</h6>
        <div className={style.peopleContainer}>
            {people.map((item)=>{
                return(
                    <div>
                        <div className='d-flex align-items-center'>
                            <img src='https://thumbs.dreamstime.com/b/close-up-side-profile-photo-handsome-him-his-guy-yell-loud-assistant-telephone-rage-outraged-mad-furious-bad-quality-new-151415275.jpg'/>
                            <div className='ml-2' style={{marginLeft:'0.8em'}}>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                )
            })}
            <button className={style.showMore}>
                Show more people <DownOutlined/>
            </button>
        </div>
        <h6>FIND CONVERSATIONS ABOUT...</h6>
            <div className='row mx-0'>
                {conversation.map((item)=>{
                    return(
                        <div className='col-6 px-2 mb-3'>
                            <div className={style.conversationCard}>
                                <h6>
                                    <FireOutlined/>
                                    {item.title}
                                </h6>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
    </div>
  )
}

export default Explore