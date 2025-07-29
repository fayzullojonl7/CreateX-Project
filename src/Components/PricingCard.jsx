import React from 'react';

const PricingCard = ({ plan, price, isActive }) => {
  const featuresIncluded = [
    'Advanced Analytics',
    'Change Management',
    'Corporate Finance',
    'One Way Link Building',
    'Social Media Marketing',
  ];
  const featuresExcluded = ['Strategy & Marketing', 'Information Technology'];

  const baseCard = 'w-full h-full lg:w-[320px] lg:h-[536px] rounded-xl shadow-md flex flex-col justify-between px-[30px] lg:px-[60px] py-[50px] transition-all duration-500';
  const hoverCard = 'lg:hover:bg-[#1E212C]';
  const activeCard = isActive ? 'bg-[#1E212C]' : 'bg-white dark:bg-[#1E212C]';

  const conditionalText = isActive ? 'text-white' : 'text-black dark:text-white lg:group-hover:text-white';
  const conditionalAccent = isActive ? 'text-[#03CEA4]' : 'text-[#624DE3] lg:group-hover:text-[#03CEA4]';
  const conditionalSub = isActive ? 'text-[#03CEA4]' : 'text-gray-500 lg:group-hover:text-[#03CEA4]';
  const conditionalIcon = isActive ? 'text-[#03CEA4]' : 'text-[#7772F1] lg:group-hover:text-[#03CEA4]';
  const conditionalButton = isActive
    ? 'bg-[#624DE3] text-white'
    : 'bg-white dark:bg-gray-500 text-[#624DE3] lg:group-hover:bg-[#624DE3] lg:group-hover:text-white';

  return (
    <div className={`group ${baseCard} ${hoverCard} ${activeCard}`}>
      <h1 className={`text-center text-[30px] font-bold transition-colors duration-500 ${conditionalText}`}>
        {plan}
      </h1>

      <p className={`text-3xl font-bold transition-colors duration-500 ${conditionalAccent}`}>
        ${price}
        <span className={`text-base font-normal transition-colors duration-500 ${conditionalSub}`}>
          /mon
        </span>
      </p>

      <ul className="mt-8 space-y-4">
        {featuresIncluded.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 transition-all duration-500">
            <svg
              className={`size-6 transition-colors duration-500 ${conditionalIcon}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span className={`transition-colors duration-500 ${conditionalText}`}>
              {item}
            </span>
          </li>
        ))}

        {featuresExcluded.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-[#9A9CA5]">
            <svg
              className="size-6 transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button className={`mt-8 py-3 w-full rounded-md border border-[#624DE3] font-medium transition-all duration-500 ${conditionalButton}`}>
        Choose plan
      </button>
    </div>
  );
};

export default PricingCard;
