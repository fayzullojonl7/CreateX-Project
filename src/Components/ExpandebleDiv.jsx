import React, { useState } from 'react';

const ExpandableDiv = ({ title, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div data-aos='zoom-in' className='lg:w-[500px]'>
            <div
                onClick={toggleExpand}
                className="flex items-center cursor-pointer">
                <span className="mr-2 text-[35px] text-[#7772F1]">
                    {isExpanded ? '-' : '+'}
                </span>
                <span className='text-[20px] dark:text-[white] text-[#1E212C] font-bold'>{title}</span>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 transform ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'}`}>
                {isExpanded && <p className="p-2 text-[#787A80]  dark:text-gray-400">{description}</p>}
            </div>
        </div>
    );
};

export default ExpandableDiv;
