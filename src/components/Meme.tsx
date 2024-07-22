import React, { ChangeEvent, useState } from 'react'
import memeData from '../memeData'
import { AllMemeImagesType, MemeType } from '../types'


function Meme() {
    // display random url images of the memes
    const [meme, setMeme] = useState<MemeType>({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    })

    const [allMemeImages,] = useState<AllMemeImagesType>(memeData)
    function handleSubmit(e: React.MouseEvent<HTMLFormElement>) {
        const { data: { memes } } = allMemeImages
        e.preventDefault()
        setMeme(prevMeme => ({ ...prevMeme, randomImage: memes[Math.floor(Math.random() * memes.length)].url }))
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <div className='p-5'>
            <form className='grid gap-5 grid-cols-2 text-sm ' onSubmit={handleSubmit} >
                <div className='flex flex-col col-span-1 '>
                    <label htmlFor='top-text' className='text-gray-500 pb-2 text-sm'>Top Text</label>
                    <input id='top-text' type='text' className=' outline-none bg-transparent border-1 border-gray-300 rounded-md py-2 px-3' placeholder='shut up' name='topText' value={meme.topText} onChange={handleChange} />
                </div>
                <div className='col-span-1 flex flex-col'>
                    <label htmlFor='bottom-text' className='text-gray-500 pb-2 text-sm'>Bottom Text</label>
                    <input id='bottom-text' type='text' className=' outline-none bg-transparent border-1 border-gray-300 rounded-md py-2 px-3' placeholder='and take my money' name='bottomText' value={meme.bottomText} onChange={handleChange} />
                </div>
                <button type='submit' className=' col-span-2 rounded-md w-full  text-white  font-bold text-base tracking-tighter py-2 bg-gradient-to-r from-secondary to-linear-purple'>Get a new meme image  🖼</button>
            </form>
            <div className='relative'>
                <img className='mt-5  max-w-sm m-auto w-full' src={meme.randomImage} alt='memeImage' />
                {meme.topText.length > 0 && <h2 className='absolute  font-bold text-white top-0 left-1/2 -translate-x-1/2 text-xl py-5 drop-shadow-custom'>{meme.topText}</h2>}
                {meme.bottomText.length > 0 && <h2 className='absolute  font-bold text-white bottom-0 left-1/2 -translate-x-1/2 text-xl py-5 drop-shadow-custom'>{meme.bottomText}</h2>}
            </div>

        </div>
    )
}

export default Meme