import React, { useState } from 'react';

const HoverSquare = ({ backgroundImage, logo ,title, description}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`shadow-lg rounded-[5px] w-[300px] h-[300px] transition-all duration-500 bg-white bg-cover bg-center`}
            style={{
                backgroundImage: isHovered ? `url(${backgroundImage})` : 'none',
            }}
        >
            <img src={logo} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <div className='flex gap-[5px]'>
            </div>
        </div>
    );
};

export default HoverSquare;
