import React from 'react'
import { HiOutlineDesktopComputer, HiOutlineDeviceMobile, HiOutlineGlobeAlt } from "react-icons/hi";


export const SecondScreen = () => {
  return (
    <div className='lg:h-screen bg-black flex justify-center items-center flex-col'>
      <p className='lg:text-5xl text-3xl text-white mt-4'>What I do</p>
      <div className='grid lg:grid-cols-3 lg:mt-16 lg:mx-24 mb-4'>
        <div>
          <div className='mx-8 border-2 border-yellow-600 inline-block p-4 rounded-full mt-3'>
          <HiOutlineDesktopComputer color="white" size="50px"/>
          </div>
          <p className='text-2xl mx-8 text-white mt-4'>Pixel Perfect Design</p>
          <p className='text-gray-500 text-sm  mx-8 mt-2'>I specialize in pixel perfect design, ensuring precise alignment and positioning of elements on web interfaces. With meticulous attention to detail, I create flawlessly crafted designs that deliver a seamless and visually appealing user experience. My dedication to pixel perfection guarantees a polished and professional look for every project.</p>
        </div>
        <div>
          <div className='mx-8 border-2 border-yellow-600 inline-block p-4 rounded-full mt-3'>
          <HiOutlineDeviceMobile color="white" size="50px"/>
          </div>
          <p className='text-2xl mx-8 text-white mt-4'>Responsive Design</p>
          <p className='text-gray-500 text-sm mx-8 mt-2'>I excel in responsive design, creating websites that seamlessly adapt to different screen sizes and devices. By utilizing flexible layouts, fluid grids, and media queries, I ensure that the user experience remains consistent and optimized across desktop, tablet, and mobile devices. My expertise in responsive design guarantees that your website will look and function flawlessly on any screen.</p>
        </div>
        <div>
          <div className='mx-8 border-2 border-yellow-600 inline-block p-4 rounded-full mt-3'>
          <HiOutlineGlobeAlt color="white" size="50px"/>
          </div>
          <p className='text-2xl mx-8 text-white mt-4'>Modern Web Pages with React</p>
          <p className='text-gray-500 text-sm  mx-8 mt-2'>I specialize in developing modern web pages using React, utilizing its component-based architecture and advanced features to create dynamic and interactive user interfaces. With my expertise, I ensure that the web pages I build are visually appealing, efficient, and deliver a seamless user experience across devices. Let's work together to bring your web project to life with the power of React and modern web technologies.</p>
        </div>
      </div>
    </div>
  )
}

