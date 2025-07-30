import React, { useState, useRef } from 'react';

const ExpandableDiv = ({ title, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);

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
                ref={contentRef}
                className={`transition-all duration-500 ease-in-out overflow-hidden
                ${isExpanded ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}
                transform`}>
                <p className="p-2 text-[#787A80] dark:text-gray-400">{description}</p>
            </div>
        </div>
    );
};

export default ExpandableDiv;
