import React from 'react'
import TrollFace from '../assets/images/troll-Face.svg'

function Header() {
    return (
        <header className=' p-5 flex items-center text-primary h-16 bg-gradient-to-r from-secondary to-linear-purple'>
            <img src={TrollFace} alt='troll face' className='mr-1' />
            <h2 className='text-xl mr-auto font-bold tracking-tighter'>Meme Generator</h2>
            <p className=' font-medium'>React Course - Project 3</p>
        </header>
    )
}

export default Header