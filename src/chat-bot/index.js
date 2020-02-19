import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, css } from 'aphrodite'
import botImage from '../bot.jpg'
import ChatWindow from './chat-window'

export default () => {
    const styles = StyleSheet.create({
        chatBot: {
            position: 'absolute',
            bottom: '10px',
            right: '10px'
        },
        botImage: {
            width: '70px',
            height: '50px'
        },
        link: {
            cursor: 'pointer'
        }
    })

    const [ clicked, setClicked ] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              setClicked(false)
            }
          }
          
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside)
        // return () => {
        //   // Unbind the event listener on clean up
        //   document.removeEventListener("mousedown", handleClickOutside)
        // }
      })
      
    return (
        <div className={css(styles.chatBot)} ref={ref} >
            {!clicked ? 
                <a className={css(styles.link)} onClick={() => setClicked(true)}>
                    <img alt='bot' className={css(styles.botImage)} src={botImage} />
                </a> :
                <ChatWindow />
            }
        </div>
    )
}