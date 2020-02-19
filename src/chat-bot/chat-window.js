import React, { useState, useRef } from 'react'
import { StyleSheet, css } from 'aphrodite'
import botImage from '../bot.jpg'
import ChatHistory from './chat-history'

export default () => {
    const styles = StyleSheet.create({
        botImage: {
            position: 'absolute',
            width: '70px',
            height: '10%',
            top: '0',
            left: '0'
        },
        chatWindow: {
            width: '35vh',
            height: '65vh',
            backgroundColor: 'white'
        },
        chats: {
            height: '78%'
        },
        input: {
            width: '90%',
            margin: '4%',
            height: '5%'
        },
        header: {
            height: '10%',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center'
        },
        headerText: {
            width: '100%'
        }
    })

    const [ chatHistory, setChatHistory ] = useState([])
    const ref = useRef(null)

    const onKeyUp = (evt) => {
        if(evt.keyCode === 13) {
            const chats = [...chatHistory]
            chats.push(evt.target.value)
            setChatHistory(chats)
            ref.current.value = ''
        }
        evt.preventDefault()
    }

    return (
        <div className={css(styles.chatWindow)}>
            <header className={css(styles.header)}>
                <img alt='bot' className={css(styles.botImage)} src={botImage} />
                <div className={css(styles.headerText)}>CHATBOT</div>
            </header>
            <div className={css(styles.chats)}>
                <ChatHistory chatHistory={chatHistory} />
            </div>
            <input className={css(styles.input)} onKeyUp={onKeyUp} ref={ref} type='text' placeholder='Type Something...' />
        </div>
    )
}