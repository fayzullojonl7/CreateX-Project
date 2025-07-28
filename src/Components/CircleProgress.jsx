import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const CircularProgress = ({ percentage = 75, duration = 1.5, color = "#3b82f6" }) => {
  const radius = 70
  const strokeWidth = 6
  const normalizedRadius = radius - strokeWidth * 0.5
  const circumference = normalizedRadius * 2 * Math.PI

  const [progress, setProgress] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (inView) {
      let start = 0
      const step = () => {
        if (start <= percentage) {
          setProgress(start)
          start += 1
          setTimeout(step, (duration * 1000) / percentage)
        }
      }
      step()
    }
  }, [inView, percentage, duration])

  const dashOffset = circumference - (circumference * progress) / 100

  return (
    <div ref={ref} className="relative flex items-center justify-center">
      <svg width={radius * 2} height={radius * 2} className="rotate-[-90deg]">
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-in-out"
        />
      </svg>
      <div className="absolute text-[35px] font-bold text-black dark:text-white">{progress}</div>
    </div>
  )
  
}



export default CircularProgress
