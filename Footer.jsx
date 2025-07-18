import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaFacebook} from "react-icons/fa";
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
        
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
         
        </li>
        
        <a href="https://linkedin.com">
        <li className="flex gap-1 items-center">
          <CiLinkedin  size={20}/>
        </li>
        </a>
       <a href="https://github.com/lingx-1">
        <li className="flex gap-1 items-center">
          <FaGithub  size={20}/>
        </li>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100088876775640">
        <li className="flex gap-1 items-center">
        <FaFacebook size={20}/>
        </li>
        </a>
          <li className ="flex gap-1 items-center p-4 md:p-12">
          #&copy; 
          </li>
      </ul>
    </div>
  );
};
export default Footer;
//davidcody