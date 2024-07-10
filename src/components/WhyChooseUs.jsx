import React from 'react';
import WhyChooseUsCard from './WhyChooseUsCard';
import { FaUsers, FaLightbulb, FaHandsHelping } from 'react-icons/fa'; // Importing icons

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Our team of experts brings extensive industry experience and cutting-edge skills to deliver top-notch solutions.'
    },
    {
      icon: FaLightbulb,
      title: 'Innovative Solutions',
      description: 'We leverage the latest technologies and innovative approaches to create unique solutions tailored to your needs.'
    },
    {
      icon: FaHandsHelping,
      title: 'Customer Focused',
      description: 'We prioritize our clients\' needs and ensure that we provide solutions that exceed expectations.'
    }
  ];

  return (
    <div className='bg-[#02001A] py-14'>
      <div className='px-8 mx-auto max-w-7xl'>
        <h2 className='text-white text-center font-extrabold text-[38px] lg:text-[50px] mb-10 animate-fadeIn'>Why Choose Us</h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {reasons.map((reason, index) => (
            <WhyChooseUsCard
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
