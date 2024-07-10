import React from 'react';
import { FaUsers, FaLightbulb, FaHandsHelping } from 'react-icons/fa'; // Importing icons

const WhyChooseUsCard = ({ icon: Icon, title, description }) => {
  return (
    <div className='bg-[#040036] p-6 rounded-xl text-center transform transition-transform duration-500 hover:scale-105'>
      <Icon className='mx-auto mb-4 text-[#ffffff] w-16 h-16'/>
      <h3 className='text-[#f50bc2] font-bold text-[22px] lg:text-[26px] mb-3'>{title}</h3>
      <p className='text-gray-300 text-[14px] md:text-base'>{description}</p>
    </div>
  );
};

export default WhyChooseUsCard;
