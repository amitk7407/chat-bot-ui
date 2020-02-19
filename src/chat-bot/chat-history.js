import React from 'react'

export default (props) => {
    console.log(props)
    return (
        props.chatHistory.map((chat, key) => {
            return <p key={key}>{chat}</p>
        })
    )
}