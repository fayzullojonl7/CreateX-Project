import React from 'react'

const PricingCard = ({ plan, price, isActive }) => {
  const bgColor = isActive ? 'bg-[#1E212C]' : 'bg-white dark:bg-[#1E212C]'
  const titleColor = isActive ? 'text-white' : 'text-black dark:text-white'
  const priceColor = isActive ? 'text-[#03CEA4]' : 'text-[#624DE3]'
  const spanColor = isActive ? 'text-[#03CEA4]' : 'text-gray-500'
  const iconColor = isActive ? 'text-[#03CEA4]' : 'text-[#7772F1]'
  const textColor = isActive ? 'text-white' : 'text-black dark:text-white'
  const buttonBg = isActive ? 'bg-[#624DE3] text-white' : 'bg-white dark:bg-gray-500 text-[#624DE3]'
  const buttonHover = isActive ? '' : 'hover:bg-[#624DE3] hover:text-white'

  return (
    <div
      className={`w-[100%] h-[100%] lg:w-[320px] lg:h-[536px] ${bgColor} transition-all duration-300 rounded-xl shadow-md flex flex-col justify-between px-[30px] lg:px-[60px] py-[50px]`}
    >
      <div>
        <h1 className={`text-center text-[30px] font-bold ${titleColor}`}>{plan}</h1>
        <p className={`text-3xl font-bold ${priceColor} transition`}>
          ${price}
          <span className={`text-base font-normal ${spanColor}`}>/mon</span>
        </p>

        <ul className={`mt-8 space-y-4 ${textColor}`}>
          {[
            'Advanced Analytics',
            'Change Management',
            'Corporate Finance',
            'One Way Link Building',
            'Social Media Marketing',
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-6 ${iconColor}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span>{item}</span>
            </li>
          ))}

          {[
            'Strategy & Marketing',
            'Information Technology'
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2 text-[#9A9CA5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`mt-8 py-3 w-full rounded-md border border-[#624DE3] font-medium transition ${buttonBg} ${buttonHover}`}
      >
        Choose plan
      </button>
    </div>
  )
}

export default PricingCard
