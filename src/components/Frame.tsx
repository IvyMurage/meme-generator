import React from 'react'
import Header from './Header'
import Meme from './Meme'

function Frame() {
    return (
        <div className='  bg-primary shadow-lg mx-auto max-w-550'>
            <Header />
            <Meme />
        </div>
    )
}

export default Frame