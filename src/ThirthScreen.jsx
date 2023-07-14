import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";



export const ThirthScreen = () => {
  return (
    <div className='lg:h-screen bg-[#1A1A1A]'>
      <div className='grid lg:grid-cols-2 gap-x-8 text-white xl:mx-24 mx-8'>
        <div className='mt-12'>
          <div className='border-2 border-yellow-600 inline-block p-4 rounded-full'>
            <BsPerson color="white" size="50px" />
          </div>
          <p className='text-3x lg:text-5xl mt-5'>Who am I?</p>
          <p className='text-gray-400 mt-5 text-xs md:text-sm'>Hello there! My name is Gözde, and I am a junior frontend developer with a passion for creating engaging and user-friendly websites. Welcome to my personal website, where I aim to showcase my skills, experiences, and creative journey in the world of web development. </p>
          <p className='text-gray-400 mt-5 text-xs md:text-sm'>With a background in both freelancing and corporate environments, I have gained valuable insights and practical knowledge that have shaped me into the developer I am today. Throughout my career, I have had the opportunity to work on various projects, collaborating with diverse teams and clients. These experiences have not only honed my technical abilities but also sharpened my communication and problem-solving skills.</p>
          <p className='text-gray-400 mt-5 text-xs md:text-sm'>Apart from technical skills, I also bring a strong work ethic, adaptability, and a collaborative mindset to every project I undertake. I believe in continuous learning and improvement, always seeking new challenges to expand my knowledge and expertise. I thrive in dynamic environments, where I can contribute to a team and learn from others.</p>
          <p className='text-gray-400 mt-5 text-xs md:text-sm'>Outside of coding, I enjoy exploring new technologies, experimenting with design concepts, and staying inspired by the ever-evolving web development landscape. I find immense satisfaction in creating innovative solutions and pushing the boundaries of what is possible on the web.</p>
        </div>
        <div className='my-12 '>
          <div className='border-2 border-yellow-600 inline-block p-4 rounded-full'>
            <HiOutlineDesktopComputer color="white" size="50px" />
          </div>
          <p className='text-3x lg:text-5xl mt-5'>Technologies I use</p>
          <p className='text-gray-400 text-xs md:text-sm mt-5'>I am a junior frontend developer with expertise in HTML, CSS, JavaScript, React, Strapi, Firebase, and other related technologies. With HTML, I structure the content of web pages, ensuring a well-organized layout. CSS allows me to define the appearance and layout of elements, bringing designs to life. JavaScript enables me to enhance interactivity and handle dynamic functionality on websites. </p>
          <p className='text-gray-400 text-xs md:text-sm mt-5'>I also work with React, building reusable and modular components, managing state efficiently, and creating dynamic user interfaces. Additionally, I utilize CSS frameworks such as Tailwind CSS and Bootstrap to expedite development and maintain a consistent design system. For navigation and seamless user experiences in single-page applications, I use React Router DOM. To manage global state efficiently, I employ the Context API. </p>
          <p className='text-gray-400 text-xs md:text-sm mt-5'> When it comes to data fetching and handling HTTP requests, I rely on Axios. With Git, I ensure version control and collaboration in my projects. Moreover, I have a foundational knowledge of UX/UI design principles and utilize Adobe XD and Figma for wireframing and creating visually appealing designs. Furthermore, I have experience working with Strapi, a headless CMS that enables me to build customizable and content-rich applications. Additionally, I leverage Firebase for real-time databases, application hosting, and user authentication. With this wide range of technologies and skills, I am excited to create exceptional web experiences that are both functional and visually appealing.</p>
        </div>
      </div>
    </div>
  )
}
