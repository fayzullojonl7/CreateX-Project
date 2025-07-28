import { useRef, useState } from 'react'
import { PlayIcon, StopIcon } from '@heroicons/react/24/solid'
import { Modal } from 'antd'
import companyAdd from "../pages/Home/Media/Video/Имиджевый_ролик_строительной_компании.mp4"

export default function RoundButton() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [ripple, setRipple] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const videoRef = useRef(null)

    const handleClick = () => {
        setIsPlaying(!isPlaying)
        setRipple(true)
        showModal()
        setTimeout(() => setRipple(false), 500)
    }

    const showModal = () => {
        setIsModalOpen(true)

        // Даем модалке чуть времени открыться, потом играем видео
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play().catch((e) => {
                    console.warn("Не удалось запустить видео:", e)
                })
            }
        }, 200) // 200–300 мс — оптимально
    }

    const handleOk = () => {
        setIsModalOpen(false)
        stopVideo()
    }

    const handleCancel = () => {
        setIsModalOpen(false)
        stopVideo()
    }

    const stopVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
        }
    }

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={handleClick}
                className="relative w-[52px] h-[52px] rounded-full bg-[#7772F1] flex items-center justify-center focus:outline-none"
            >
                {ripple && (
                    <span className="absolute w-full h-full rounded-full bg-[#7772F1] animate-ping z-0" />
                )}
                <span className="z-10 text-white w-[20px] h-[20px]">
                    {isPlaying ? <StopIcon /> : <PlayIcon />}
                </span>
            </button>

            <Modal
            
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={1100}
            >
                <video
                    ref={videoRef}
                    src={companyAdd}
                    muted
                    loop
                    controls
                    style={{ width: '100%', borderRadius: '12px' }}
                />
            </Modal>
        </div>
    )
}
