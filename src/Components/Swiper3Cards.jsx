import React from 'react'

const Swiper3Cards = ({info,avatar,name,email}) => {
  return (
    <div className='lg:w-[800px] px-[70px] py-[50px] lg:h-[250px] bg-white rounded-[5px] dark:bg-black dark:border-[1px] shadow-[#d6d6d6] dark:shadow-none dark:border-[#797979] shadow-lg'>
        <p>{info}</p>
        <div className='flex'>
            <img src={avatar} alt="" />
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    </div>
  )
}

export default Swiper3Cards
