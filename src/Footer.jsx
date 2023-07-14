import React from 'react'
import { AiFillLinkedin, AiFillTwitterSquare, AiFillGithub } from "react-icons/ai";


export const Footer = () => {
    return (
        <div>
            <footer className="bg-black">
                <div className='text-center py-4'>
                    <div className="text-sm text-gray-500">© 2023 Gözde Altuntaş. All Rights Reserved. </div>
                    <div className="text-sm text-gray-300 mt-2">altuntasgozde@gmail.com </div>
                    <div className="text-2xl text-gray-300 mt-2 flex justify-center">
                        <a href="https://www.linkedin.com/in/g%C3%B6zde-altunta%C5%9F-871007190/">
                            <AiFillLinkedin />
                        </a>
                        <a href="https://twitter.com/gozdeinwonder" className='ml-2'>
                            <AiFillTwitterSquare />
                        </a>
                        <a href="https://github.com/altuntasgozde" className='ml-2'>
                            <AiFillGithub />
                        </a>
                    </div>

                </div>
            </footer>
        </div>
    )
}
