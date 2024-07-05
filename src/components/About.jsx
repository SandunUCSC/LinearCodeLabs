import React from "react";

function About() {
  return (
    <div className="bg-white bg-center bg-cover">
      <h1 className="text-[#A40C67] pt-10 pb-7 md:pt-16 md:pb-16 text-center font-extrabold text-[38px] md:text-[54px]">
        About Us...
      </h1>

      <div className="flex flex-col items-center mx-auto md:flex-row" >
        <div className="w-[90%] md:w-[40%] mx-auto mb-10">
          <img
            className="mx-auto h-[300px] rounded-lg"
            src="https://images.stockcake.com/public/0/8/8/088bfd94-1865-4afd-a2c1-1641cd96af0f_large/colorful-abstract-art-stockcake.jpg"
            alt="Abstract Art"
          />
        </div>

        <div className="w-[96%] md:w-[60%] px-3 md:px-10 mb-6 mx-auto">
          <p className="px-3 py-2 mb-6 text-justify bg-gray-100">
            At Linear CodeLabs, we're not just a team of developers; we're architects of digital excellence. With a passion for precision and a commitment to innovation, we specialize in creating bespoke software solutions tailored to your unique needs.
          </p>

          <div className="flex flex-col gap-3 mx-auto md:flex-row">
            <p className="bg-[#A40C67] text-justify text-white px-4 py-4 mx-auto rounded-lg flex-grow">
              Transform ideas into seamless, user-centric experiences, driving your success in the digital landscape.
            </p>

            <p className="bg-[#A40C67] text-justify text-white px-4 py-4 mx-auto rounded-lg flex-grow">
              Be at the forefront of this digital evolution, empowering businesses with cutting-edge solutions that transcend expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
