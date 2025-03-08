import React from 'react';
import { FaGithub } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className='flex justify-evenly  items-center'>
      <div>
      <ul className=' pl-4 text-sm mt-2'>
          <li className='text-lg'>EMAIL:</li>
          <li>khaledbalok@gmail.com</li>
          <li className='text-lg'>PHONE: </li>
          <li>+880 1515 241413</li>
        </ul>
      </div>
      <div className="divider divider-horizontal"></div>
      <div>
      <ul className=' pl-4 text-sm mt-2'>
          <li><FaGithub /> Github</li>
          <li><span className='font-semibold'>PHONE:</span> +880 1515 241413 </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;