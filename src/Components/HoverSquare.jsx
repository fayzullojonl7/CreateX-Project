import React, { useState } from 'react';
import chartMini1 from "../pages/Home/Media/Photo/chart2.png"
import chartMini2 from "../pages/Home/Media/Photo/chart3Gr.png"
const HoverSquare = ({ backgroundImage, logo, title, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div data-aos='zoom-in'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`dark:bg-black  overflow-hidden shadow-lg rounded-[5px] w-[300px] h-[300px] transition-all duration-500 bg-white bg-cover bg-center`}
            style={{
                backgroundImage: isHovered ? ` url(${backgroundImage})` : 'none',
            }}
        >
            <div className='flex flex-col justify-between px-[20px] py-[20px] w-[100%] h-[100%]'>
                <div className='w-[80px]'>
                    <img className='' src={logo} alt="" />
                </div>
                <h1 className='dark:text-white pb-[5px] border-b-[1px] border-[#9c9c9c7f] text-black'>{title}</h1>
                <p className='text-[#787A80]'>{description}</p>
                <div className='flex justify-between'>
                    <div className='flex items-center  text-black gap-[10px]  dark:text-gray-400'>
                        <img className='w-[40px] h-[40px]' src={chartMini1} alt="" />
                        <div className='text-[10px]'>
                            <p>90%</p>
                            <p>Engagement</p>
                        </div>
                    </div>
                    <div className='flex items-center text-black gap-[10px]  dark:text-gray-400'>
                        <img className='w-[40px] h-[40px]' src={chartMini2} alt="" />
                        <div className='text-[10px]'>
                            <p>100%</p>
                            <p>Engagement</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HoverSquare;
