import React from 'react'

const Marquee = ({ logos }) => {
  const doubledLogos = [...logos, ...logos]

  return (
    <div className="relative w-full overflow-hidden py-2">
      <div
        className="flex items-center gap-6 sm:gap-8 h-full animate-marquee"
        style={{
          animation: 'marquee 30s linear infinite',
          whiteSpace: 'nowrap',
        }}
      >
        {doubledLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-8 sm:h-14 md:h-16 w-auto object-contain"
          />
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
        }
      `}</style>
    </div>
  )
}

export default Marquee
