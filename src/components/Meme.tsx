import React from 'react'

function Meme() {
    return (
        <div className='p-5'>
            <form className='flex text-sm justify-between'>
                <div className=' flex flex-col'>
                    <label className='text-gray-500 pb-2 text-sm'>Top Text</label>
                    <input type='text' className=' outline-none bg-transparent border-1 border-gray-300 rounded-md py-1 px-3' placeholder='Top Text' />
                </div>
                <div className=' flex flex-col'>
                    <label className='text-gray-500 pb-2 text-sm'>Bottom Text</label>
                    <input type='text' className=' outline-none bg-transparent border-1 border-gray-300 rounded-md py-1 px-3' placeholder='Bottom Text' />
                </div>
            </form>
        </div>
    )
}

export default Meme