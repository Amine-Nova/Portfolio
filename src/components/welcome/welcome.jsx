import React from 'react'

const welcome = () => {
    return (
        <div className='flex item-baseline group cursor-default relative gap-3'>
            <div>
                <p className='text-3xl sm:text-5xl transition-all ease-in-out duration-1000 absolute group-hover:opacity-0'>🌑</p>
                <p className='text-3xl sm:text-5xl group-hover:scale-90 transition-all ease-in-out duration-1000 group-hover:rotate-25 inset-0 opacity-0 group-hover:opacity-100'>🌒</p>
            </div>
            <div className='txt text-2xl font-bold tracking-wide bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:tracking-widest transition-all ease-in-out duration-500 group-hover:from-slate-800 group-hover:via-slate-700 group-hover:to-amber-400 group-hover:bg-clip-text group-hover:text-transparent  hidden sm:flex items-center '>
                Greetings
                <p className='txt w-0 overflow-hidden group-hover:w-[4rem] transition-all ease-in-out duration-700'>ssss</p><p className='pl-0.5'>!</p>
            </div>
        </div>
    )
}

export default welcome