import React, { useState } from 'react'
import memeData from '../memeData'

type MemeType = {
    topText: string
    bottomText: string
    randomImage: string
}

type MemeImageType = {
    "id": string,
    "name": string,
    "url": string,
    "width": number,
    "height": number,
    "box_count": number
}

type AllMemeImagesType = {
    "success": boolean,
    "data": {
        "memes": MemeImageType[]
    }
}
function Meme() {
    // display random url images of the memes
    const [meme, setMeme] = useState<MemeType>({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages,] = useState<AllMemeImagesType>(memeData)
    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        const { data: { memes } } = allMemeImages
        e.preventDefault()
        setMeme(prevMeme => ({ ...prevMeme, randomImage: memes[Math.floor(Math.random() * memes.length)].url }))
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
            <img className='mt-5 max-w-sm m-auto w-full' src={meme.randomImage} alt='memeImage' />
        </div>
    )
}

export default Meme