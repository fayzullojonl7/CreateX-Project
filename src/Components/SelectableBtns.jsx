import React, { useState } from "react";

const SelectableButtons = ({ labels = [] }) => {
  const [activeLabel, setActiveLabel] = useState(null);

  return (
    <div className="flex flex-wrap  mx-auto">
      {labels.map((label) => (
        <button
          key={label}
          onClick={() => setActiveLabel(label)}
          className={`flex-1 text-sm py-2 px-4 transition border-[2px]
            ${activeLabel === label
              ? "border-[#7772F1] text-[#7772F1] font-semibold"
              : "border-transparent text-[#9A9CA5] font-semibold hover:border-gray-300"}
            rounded-md`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default SelectableButtons;
