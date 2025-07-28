import { useState } from 'react'
import { PlayIcon, StopIcon } from '@heroicons/react/24/solid'

export default function RoundButton() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [ripple, setRipple] = useState(false)

    const handleClick = () => {
        setIsPlaying(!isPlaying)
        setRipple(true)
        setTimeout(() => setRipple(false), 500) // Время волны
    }

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={handleClick}
                className="relative w-[52px] h-[52px] rounded-full bg-[#7772F1] flex items-center justify-center focus:outline-none"
            >
                {/* Ripple Animation */}
                {ripple && (
                    <span className="absolute w-full h-full rounded-full bg-[#7772F1] animate-ping z-0" />
                )}

                {/* Icon */}
                <span className="z-10 text-white w-[20px] h-[20px]">
                    {isPlaying ? <StopIcon /> : <PlayIcon />}
                </span>
            </button>
        </div>
    )
}
