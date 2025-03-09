import React from 'react';
import image from '../../public/profile-image.jpeg';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
    <Helmet><title>Khaled </title></Helmet>
    {/* Divider - Show only on Desktop */}
    <div className="hidden lg:block">
        <div className="divider"></div>
      </div>
    <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 md:px-8 lg:px-16 py-6 text-sm'>
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={image}
          alt="Profile"
          className="shadow-lg"
        />
      </div>
      {/* Text Section */}
      <div className='w-full lg:w-1/2'>
        <h1 className=' text-lg md:text-xl mb-4'>Biography</h1>
        <p className='text-justify leading-relaxed text-sm '>
          Molla Khaled Hossain is a passionate software engineer with expertise in front-end and back-end development. With a strong foundation in React, Node.js, and MongoDB, he specializes in creating scalable, efficient, and user-friendly web applications. His work revolves around building innovative solutions, continuously expanding his technical skills, and contributing to dynamic development projects.
          Khaled completed his BSc in Computer Science and Engineering from the University of Asia Pacific, where he honed his skills in JavaScript, TypeScript, React, Next.js, and Express.js. He also pursued Bachelor’s and Master’s degrees in Education from National University, Bangladesh, reflecting his commitment to both technology and academia.
          His professional journey includes an internship at Grameenphone Ltd., where he gained industry exposure, and multiple full-stack projects that demonstrate his technical acumen. As a skilled MERN stack developer, he is proficient in React.js, Node.js, Express.js, MongoDB, Firebase, and Tailwind CSS. He is currently working on ArtsenseBD, an art marketplace, and is preparing to host the platform online.
        </p>

        <h1 className=' text-lg md:text-xl mt-6'>Professional Summary</h1>
        <p className='text-justify leading-relaxed text-sm mt-2'>
          Molla Khaled Hossain is a skilled MERN stack developer with over 2 years of experience specializing in front-end and back-end development. His expertise includes React.js, Next.js, Node.js, Express.js, and MongoDB, along with TypeScript, Firebase, Tailwind CSS, and Bootstrap. He has worked on multiple full-stack projects, including e-commerce, restaurant management, and art gallery platforms.
        </p>

        <h1 className=' text-lg md:text-xl mt-6'>Technical Skills</h1>
        <ul className='list-disc pl-4 text-sm mt-2'>
          <li>Front-End: React.js, Next.js, JavaScript, TypeScript, Redux, Context API, Tailwind CSS, Bootstrap</li>
          <li>Back-End: Node.js, Express.js, MongoDB, REST APIs, JWT Authentication</li>
          <li>Database: MongoDB, MySQL</li>
          <li>DevOps & Deployment: Firebase, Vercel, Netlify, Hostinger</li>
          <li>Tools & Technologies: Git, GitHub, VS Code, Postman, Axios, React Query</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Home;