import React from 'react'

function Meme() {
    return (
        <div className='p-5'>
            <form >
                <div className='flex text-sm justify-between'>
                    <div className=' flex flex-col'>
                        <label className='text-gray-500 pb-2 text-sm'>Top Text</label>
                        <input type='text' className=' outline-none bg-transparent border-1 border-gray-300 rounded-md py-1 px-3' placeholder='Top Text' />
                    </div>
                    <div className=' flex flex-col'>
                        <label className='text-gray-500 pb-2 text-sm'>Bottom Text</label>
                        <input type='text' className=' outline-none bg-transparent border-1 border-gray-300 rounded-md py-1 px-3' placeholder='Bottom Text' />
                    </div>
                </div>
                <button className=' mt-4 rounded-md w-full  text-white  font-bold text-base tracking-tighter py-2 bg-gradient-to-r from-secondary to-linear-purple'>Get a new meme image  🖼</button>
            </form>
        </div>
    )
}

export default Meme