import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import "./Layout.css"
import logo from "./Media/Icons/Logo.png"
import BlueButton from '../Components/BlueButton'
import TransparentBtn from '../Components/transparentBtn'
import RoundButton from '../Components/RoundBtn'
import HeroN1 from "../pages/Home/Media/Photo/HeroN1.png"
import { ArrowRightIcon, ChartBarIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, HomeIcon, MegaphoneIcon } from '@heroicons/react/24/solid'
import { ArrowSmallRightIcon, PhoneIcon } from '@heroicons/react/20/solid'
import { Switch } from 'antd'
import useDarkSide from '../config/useDarkMode'

const Layout = () => {
    let [, toggleTheme] = useDarkSide()
    const location = useLocation()
    const path = location.pathname

    const renderHeaderContent = () => {
        if (path === '/services') {
            return (
                <div className='flex flex-col items-center'>
                    <div className='Navigation flex py-[30px]'>
                        <Link to={''}>
                            <HomeIcon className="text-white w-6 h-6" />
                        </Link>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <p className='text-gray-500'>Services</p>
                    </div>
                    <div className='text-center w-[700px]'>
                        <h1 className='text-[55px] text-white font-bold'>Our services</h1>
                        <p className='text-white'>We offer more than services. Our agency provides solutions to your top-priority concerns, involving customer targeting, email performance and sales growth. If there is no existing solution readily available, we create one, specifically to suit your business.</p>
                    </div>
                    <div className='flex gap-[50px] mt-[50px]'>
                        <TransparentBtn enterence="Start now" />
                        <div className='flex gap-[10px]'>
                            <DevicePhoneMobileIcon className='w-[40px] h-[50px] text-[#7772F1]' />
                            <div className='text-start'>
                                <p className='text-gray-600'>Call us</p>
                                <p>(405) 555-0128</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (path === '/about') {
            return (
                <div>
                    <div className='flex flex-col items-center'>
                        <div className='Navigation flex py-[30px]'>
                            <Link to={''}>
                                <HomeIcon className="text-white w-6 h-6" />
                            </Link>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6 text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                            <Link to={'/services'}>
                                <p className='text-white'>Services</p>
                            </Link>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6 text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                            <p className='text-gray-600'>About</p>
                        </div>
                        <div className='text-center w-[700px]'>
                            <h1 className='text-[55px] text-white font-bold'>About Us</h1>
                            <p className='text-white'>Our agency has been successfully operating indigital marketing since 2012. We are proud to offer you quality and exemplary service. We help our clients get better results with our creative and data-driven approach to online advertising. </p>
                        </div>
                        <div className='flex mt-[70px] '>
                            <div className='flex items-center gap-[10px] pr-[70px]'>
                                <ChartBarIcon className="w-6 h-6 text-[#7772F1]" />
                                <p className='text-white'>SEO Content Strategy</p>
                            </div>
                            <div className='flex items-center gap-[10px] px-[70px] border-l-[1px] border-r-[1px] border-[white]'>
                                <MegaphoneIcon className="w-6 h-6 text-[#7772F1]" />
                                <p className='text-white'>Content Marketing</p>
                            </div>
                            <div className='flex items-center gap-[10px] pl-[70px]'>
                                <ComputerDesktopIcon className="w-6 h-6 text-[#7772F1]" />
                                <p className='text-white'>Website & Social Media Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='w-[100%] h-[550px] mt-[120px] flex flex-col justify-between items-center'>
                    <div className='flex flex-wrap '>
                        <div className='text-start'>
                            <h1 className='text-[30px] lg:text-[55px] lf:text-[50px] font-bold lg:w-[600px] text-white'>Best <span className='text-[#645fed]'>SEO & Marketing</span> Solutions for You</h1>
                            <div className='flex gap-[20px] mt-[40px]'>
                                <TransparentBtn enterence="Get a free analysis" />
                                <div className='flex gap-[15px] items-center '>
                                    <RoundButton />
                                    <p className='text-white font-bold'>Play video</p>
                                </div>
                            </div>
                        </div>
                        <img src={HeroN1} className='w-[350px] mt-[30px]' alt="" />
                    </div>
                    <div className='hidden lg:flex'>
                        <div className='flex items-center gap-[10px] pr-[70px]'>
                            <ChartBarIcon className="w-6 h-6 text-[#7772F1]" />
                            <p className='text-white'>SEO Content Strategy</p>
                        </div>
                        <div className='flex items-center gap-[10px] px-[70px] lg:border-l-[1px] lg:border-r-[1px] border-[white]'>
                            <MegaphoneIcon className="w-6 h-6 text-[#7772F1]" />
                            <p className='text-white'>Content Marketing</p>
                        </div>
                        <div className='flex items-center gap-[10px] pl-[70px]'>
                            <ComputerDesktopIcon className="w-6 h-6 text-[#7772F1]" />
                            <p className='text-white'>Website & Social Media Marketing</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <>
            <header className='px-[20px] py-[20px] lg:px-[150px] lg:py-[50px]'>
                <nav className='flex justify-between items-center'>
                    <Link to={''}>
                        <img className='w-[110px] h-[20px]' src={logo} alt="" />
                    </Link>
                    <ul className='mr-[100px] text-[#FFFFFF] hidden lg:flex gap-[40px] text-[16px] '>
                        <Link to={'/services'}>
                            <p>Services</p>
                        </Link>
                        <Link to={''}>
                            <p>Case Studies</p>
                        </Link>
                        <Link to={'/about'}>
                            <p>About Us</p>
                        </Link>
                        <Link to={''}>
                            <p>Blog</p>
                        </Link>
                        <Link to={''}>
                            <p>Contacts</p>
                        </Link>
                    </ul>
                    <Switch defaultChecked onChange={toggleTheme} />
                    <BlueButton enterence={"Talk to a human"} />
                </nav>
                <div className='text-center'>
                    {renderHeaderContent()}
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className='py-[100px]'>
                <h1>
                    Car Configurator © 2023
                </h1>
            </footer>
        </>
    )
}

export default Layout
