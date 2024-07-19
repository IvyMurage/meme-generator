import React from 'react'
import TrollFace from '../assets/images/troll-Face.svg'

function Header() {
    return (
        <header className=' p-5 flex items-center text-primary h-16 bg-gradient-to-r from-secondary to-linear-purple'>
            <img src={TrollFace} alt='troll face' />
            <h2 className='text-xl font-bold tracking-tighter'>Meme Generator</h2>
        </header>
    )
}

export default Header