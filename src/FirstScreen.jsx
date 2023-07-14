import React from 'react'

export const FirstScreen = () => {
    return (
        <div className='md:h-screen cover'>
            <div className='md:h-screen firstScreen justify-center items-center flex-col flex py-8'>
                <div>
                    <p className='text-white text-2xl'>Hello,</p>
                    <p className='text-white md:text-5xl text-xl font-medium'>I am <span className='text-yellow-600'>Gözde Altuntaş,</span> </p>
                    <p className='text-white md:text-6xl border-yellow-600 border-2 mt-3 p-3'>Frontend Developer</p>
                </div>
                <div>
                    <p className='text-white mt-8'>Please feel free to visit my <a className='underline text-yellow-600' href="https://github.com/altuntasgozde">GitHub</a> page to see my projects.</p>
                </div>
            </div>
        </div>
    )
}
