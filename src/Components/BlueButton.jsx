import React from 'react'

const BlueButton = ({ enterence }) => {
    return (
        <button data-aos='zoom-in' className='rounded-[4px] px-[40px] h-[50px] bg-[#7772F1] text-white'>
            {enterence}
        </button>
    )
}

export default BlueButton
