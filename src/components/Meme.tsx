import React from 'react'
import memeData from '../memeData'

function Meme() {
    // display random url images of the memes
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        const { data: { memes } } = memeData
        e.preventDefault()
        console.log(memes[Math.floor(Math.random() * memes.length)].url)
    }
    return (
        <div className='p-5'>
            <form className='grid gap-5 grid-cols-2 text-sm ' >
                <div className='flex flex-col col-span-1 '>
                    <label htmlFor='top-text' className='text-gray-500 pb-2 text-sm'>Top Text</label>
                    <input id='top-text' type='text' className=' outline-none bg-transparent border-1 border-gray-300 rounded-md py-2 px-3' placeholder='shut up' />
                </div>
                <div className='col-span-1 flex flex-col'>
                    <label htmlFor='bottom-text' className='text-gray-500 pb-2 text-sm'>Bottom Text</label>
                    <input id='bottom-text' type='text' className=' outline-none bg-transparent border-1 border-gray-300 rounded-md py-2 px-3' placeholder='and take my money' />
                </div>
                <button onClick={handleClick} className=' col-span-2 rounded-md w-full  text-white  font-bold text-base tracking-tighter py-2 bg-gradient-to-r from-secondary to-linear-purple'>Get a new meme image  🖼</button>
            </form>
        </div>
    )
}

export default Meme