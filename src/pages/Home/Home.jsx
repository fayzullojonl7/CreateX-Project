import React, { useEffect } from 'react'
import Clutch from "./Media/Icons/TopSeo.png"
import UpCity from "./Media/Icons/UpCity.png"
import Forbes from "./Media/Icons/Forbes.png"
import TopDev from "./Media/Icons/TopDevelopers.png"
////////////////////////////////////////////
import inDepthLogo from "./Media/Icons/InDepthLogo.png"
import higherFitLogo from "./Media/Icons/HigherFitLogo.png"
import sentialLogo from "./Media/Icons/SentinaConsultingLogo.png"
import happyHomeLogo from "./Media/Icons/HappyHomeLogo.png"
import ForSaleLogo from "./Media/Icons/ForSaleLogo.png"
import sunsetSealityLogo from "./Media/Icons/SunsetRealtyLogo.png"
////////////////////////////////////////////
import HeroN2 from "./Media/Photo/HeroesN2.png"
import BlueButton from '../../Components/BlueButton'
import Aos from 'aos'
import "./Home.css"
import CircularProgress from '../../Components/CircleProgress'
import SelectableButtons from '../../Components/SelectableBtns'
import { ArrowLeftIcon, ArrowRightCircleIcon, ArrowRightIcon, CheckIcon, TicketIcon } from '@heroicons/react/24/solid'
import BlueTransparentBtn from '../../Components/BlueTransParentBtn'
import chartN1 from "./Media/Photo/chart.png"
import HeroN3 from "./Media/Photo/HeroN3.png"
import ExpandableDiv from '../../Components/ExpandebleDiv'
import HeroN4 from "./Media/Photo/HeroN4.png"
import HoverSquare from '../../Components/HoverSquare'
import HoverSquareBg from "./Media/Photo/hoverSquareBg.png"
import HeroN5 from "./Media/Photo/HeroN5.png"
////////////////////////////////////////////
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Marquee from '../../Components/Marque'

const Home = () => {
  const logos = [inDepthLogo, higherFitLogo, sentialLogo, happyHomeLogo, ForSaleLogo, sunsetSealityLogo]
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className='dark:bg-black dark:text-white'>
      <section className='px-[20px] py-[20px] lg:px-[150px] lg:py-[80px]'>
        <div className='flex mb-[40px] lg:mb-[100px] flex-wrap lg:justify-between'>
          <p data-aos='zoom-in' className='lg:w-[420px] text-[20px] font-bold mb-[20px]'>Createx SEO Agency is a full-service digital marketing agency. We-help businesses make more money through a-wealth of-performance data and market research. Wecreate science-based SEO strategies toempower our clients.</p>
          <div className='flex flex-wrap lg:w-[550px] gap-[15px] justify-center'>
            <div data-aos='zoom-in' className='flex items-center gap-[10px] h-[80px]'>
              <img className='w-[75px] h-[75px]' src={Clutch} alt="" />
              <p className='w-[150px]'>Top SEO Companies 2020 by Clutch</p>
            </div>
            <div data-aos='zoom-in' className=' flex items-center gap-[10px] h-[80px]'>
              <img className='w-[75px] h-[75px]' src={UpCity} alt="" />
              <p className='w-[150px]'>Top Digital Marketing Agency 2019 by UpCity</p>
            </div>
            <div data-aos='zoom-in' className='flex items-center gap-[10px] h-[80px]'>
              <img className='w-[75px] h-[75px]' src={Forbes} alt="" />
              <p className='w-[150px]'>Official Member 2020 by Forbes Agency Council</p>
            </div>
            <div data-aos='zoom-in' className='flex items-center gap-[10px] h-[80px]'>
              <img className='w-[75px] h-[75px]' src={TopDev} alt="" />
              <p className='w-[150px]'>Top SEO Companies 2020 by Top Developers</p>
            </div>
          </div>
        </div>
        <Marquee logos={logos} />
      </section>
      <section className='Section2'>
        <div className='flex items-center flex-wrap px-[20px] py-[20px] lg:px-[150px] justify-between'>
          <div className='w-[400px] mb-[20px]'>
            <h1 data-aos='zoom-in' data-aos-duration='5000' className='font-bold text-[45px] mb-[40px]'>Createx Agency </h1>
            <p data-aos='zoom-in' className='dark:text-white text-[#787A80] mb-[40px]'>Lacus acmollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper midui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eunisi sed augue odio. Etsenectus risus, pharetra, tristique libero. Dolor risus acquam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eusociis etquis hendrerit. Cras atacmagna ultricies orci.</p>
            <BlueButton enterence="More about us" />
          </div>
          <img data-aos="zoom-in" className='lg:w-[500px] rounded-[4px]' src={HeroN2} alt="" />
        </div>
        <div data-aos='zoom-in' className='flex flex-wrap justify-center gap-[30px] py-[50px] mt-[30px]'>
          <div className='text-center flex flex-col gap-[20px]'>
            <CircularProgress percentage="10" color='#F89828' />
            <p className='text-[#424551]  dark:text-gray-400'>Years of experience</p>
          </div>
          <div className='text-center flex flex-col gap-[20px]'>
            <CircularProgress percentage="45" color='#F52F6E' />
            <p className='text-[#424551]  dark:text-gray-400'>Awards</p>
          </div>
          <div className='text-center flex flex-col gap-[20px]'>
            <CircularProgress percentage="540" color='#5A87FC' />
            <p className='text-[#424551]  dark:text-gray-400'>Projects</p>
          </div>
          <div className='text-center flex flex-col gap-[20px]'>
            <CircularProgress percentage="100" color='#03CEA4' />
            <p className='text-[#424551]  dark:text-gray-400'>Happy clients</p>
          </div>
        </div>
        <section className='lg:px-[150px] px-[20px] py-[40px]'>
          <h1 className='text-[50px] font-bold text-center mb-[30px]'>Our service</h1>
          <SelectableButtons labels={["Social Media", "SEO", "Research", "Content & PR", "Payed Traffic"]} />
          <div className='flex flex-wrap items-center lg:justify-between justify-center'>
            <div className='lg:w-[400px] flex flex-col gap-[30px] mt-[50px]'>
              <h1 className='text-[28px] font-bold'>Complete Worflow For Any SEO Professional</h1>
              <div className='flex flex-col gap-[20px]'>
                <div data-aos='zoom-in' className='flex gap-[10px] '>
                  <CheckIcon className='w-[20px] text-[#7772F1]' />
                  <p className='text-[#424551]  dark:text-gray-400'>Aenean enim tellus morbi nisl vulputate dictumst.</p>
                </div>
                <div data-aos='zoom-in' className='flex gap-[10px] '>
                  <CheckIcon className='w-[20px] text-[#7772F1]' />
                  <p className='text-[#424551]  dark:text-gray-400'>Vel in amet, placerat adipiscing est pharetra.</p>
                </div>
                <div data-aos='zoom-in' className='flex gap-[10px] '>
                  <CheckIcon className='w-[20px] text-[#7772F1]' />
                  <p className='text-[#424551]  dark:text-gray-400'>Gravida ornare sit in et ut sit sem id.</p>
                </div>
                <div data-aos='zoom-in' className='flex gap-[10px] '>
                  <CheckIcon className='w-[20px] text-[#7772F1]' />
                  <p className='text-[#424551]  dark:text-gray-400'>Ultrices pellentesque dictum enim egestas ac diam.</p>
                </div>

                <div data-aos='zoom-in' className='flex gap-[10px] '>
                  <CheckIcon className='w-[20px] text-[#7772F1]' />
                  <p className='text-[#424551]  dark:text-gray-400'>Sit semper enim senectus integer ut turpis et.</p>
                </div>
                <div data-aos='zoom-in' className='flex gap-[10px] '>
                  <CheckIcon className='w-[20px] text-[#7772F1]' />
                  <p className='text-[#424551]  dark:text-gray-400'>Nibh sapien volutpat lacus augue.</p>
                </div>
              </div>
              <div data-aos='zoom-in' className='flex gap-[20px]'>
                <BlueTransparentBtn enterence={"Learn more"} />
                <BlueButton enterence={"Try SEO toolkit"} />
              </div>
            </div>
            <img data-aos='zoom-in' className='lg:w-[500px] lg:h-[320px] mt-[20px]' src={chartN1} alt="" />
          </div>
        </section>
        <section className='py-[50px] px-[20px] lg:px-[150px] bg-[#1E212C] flex flex-wrap  lg:justify-between'>
          <img data-aos='zoom-in' className='mb-[20px]' src={HeroN3} alt="" />
          <div className='lg:w-[500px] flex flex-col gap-[50px] text-white'>
            <h1 data-aos='zoom-in' className='text-[35px] font-bold'>Get a Free SEO Analysis!</h1>
            <div className='flex flex-wrap gap-[25px] lg:w-[500px]'>
              <label htmlFor="inp1" className='flex lg:hidden'>Name</label>
              <input data-aos='zoom-in' placeholder='Your name' type="text" className='inp1 pl-[10px] w-[100%] lg:w-[47%] h-[40px] border-[#FFFFFF33] border-[1px] rounded-[5px] bg-[#FFFFFF1F]' name="" id="" />
              <label htmlFor="inp2" className='flex lg:hidden'>Email</label>
              <input data-aos='zoom-in' placeholder='Your working email' type="text" className='inp2 w-[100%] pl-[10px] lg:w-[47%] h-[40px] border-[#FFFFFF33] border-[1px] rounded-[5px] bg-[#FFFFFF1F]' name="" id="" />
              <label htmlFor="inp3" className='flex lg:hidden'>Your website URL</label>
              <input data-aos='zoom-in' placeholder='http://yoursite.com' type="text" className='inp3 w-[100%] pl-[10px] lg:w-[100%]  h-[40px] border-[#FFFFFF33] border-[1px] rounded-[5px] bg-[#FFFFFF1F]' name="" id="" />
            </div>
            <div className='flex flex-wrap gap-[15px] lg:gap-[5px] justify-between'>
              <div className='flex gap-[15px] items-center'>
                <input data-aos='zoom-in' type="checkbox" className='w-[20px] h-[20px]' />
                <p data-aos='zoom-in' className='lg:w-[250px]'>I agree to receive communications from Createx SEO Agency</p>
              </div>
              <BlueButton enterence={"Get a free analysis"} />
            </div>
          </div>
        </section>
        <section className='lg:py-[100px] px-[20px] py-[20px] lg:px-[150px] flex flex-wrap justify-between items-center'>
          <div className='flex flex-col gap-[40px]'>
            <h1 data-aos='zoom-in' className='text-[35px] font-bold'>Freequently Ask Questions</h1>
            <div>
              <ExpandableDiv title={"Aliquet lectus urna viverra in odio?"} description={"Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."} />
              <ExpandableDiv title={"Orci commodo, viverra orci mollis ut euismod?"} description={"Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."} />
              <ExpandableDiv title={"Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?"} description={"Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."} />
              <ExpandableDiv title={"In id dolor quis nunc, urna hendrerit pharetra?"} description={"Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."} />
            </div>
            <BlueButton enterence={"Discover more"} />
          </div>
          <img data-aos='zoom-in' src={HeroN4} className='mt-[20px] lg:w-[400px]' alt="" />
        </section>
        <section className=' dark:bg-[#1E212C] bg-[#E5E8ED] px-[20px] lg:px-[150px]'>
          <div className='flex justify-between items-center  pt-[30px] lg:pt-[80px] pb-[30px]'>
            <h1 className=' font-bold text-[25px] lg:text-[35px]'>
              Read our clients' case studies
            </h1>
            <div className='hidden lg:flex'>
              <button classNlame='w-[45px] h-[45px] rounded-full active:bg-[#7772F1] active:text-[white] flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>

              </button>
              <button className='w-[45px] h-[45px] rounded-full active:bg-[#7772F1] active:text-[white] flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>

            </div>
          </div>
          <div className='flex flex-wrap lg:justify-between justify-center gap-[20px] py-[30px]'>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <HoverSquare logo={sentialLogo} title={"Charity organisation"} description={"Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%."} />
              </SwiperSlide>
              <SwiperSlide>
                <HoverSquare backgroundImage={HoverSquareBg} logo={ForSaleLogo} title={"Oil and natural resources"} description={"With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del Mar see a 400% increase in conversion rate."} />
              </SwiperSlide>
              <SwiperSlide>
                <HoverSquare logo={sunsetSealityLogo} title={"Personal care"} description={"We helped Sunset company break through a noisy industry and better understand their buyer's journey."} />
              </SwiperSlide>
              <SwiperSlide>
                <HoverSquare logo={sentialLogo} title={"Charity organisation"} description={"Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%."} />
              </SwiperSlide>
              <SwiperSlide>
                <HoverSquare backgroundImage={HoverSquareBg} logo={ForSaleLogo} title={"Oil and natural resources"} description={"With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del Mar see a 400% increase in conversion rate."} />
              </SwiperSlide>
              <SwiperSlide>
                <HoverSquare logo={sunsetSealityLogo} title={"Personal care"} description={"We helped Sunset company break through a noisy industry and better understand their buyer's journey."} />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className='px-[20px] lg:px-[150px] py-[50px]'>
          <h1 className='text-[35px] text-center mb-[30px] font-bold'>Our benefits</h1>
          <div className='flex flex-wrap justify-center items-center lg:justify-between'>
            <div className='flex flex-col gap-[20px]'>
              <article className='text-center px-[40px] py-[40px] items-center flex flex-col justify-between w-[300px] hover:shadow-lg dark:shadow-[#ffffff38] shadow-gray-600  h-[200px] rounded-[4px] border-[1px] dark:border-gray-700 border-[#E5E8ED]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#7772F1]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>
                <h1 className='font-bold'>Social Advertising Experts</h1>
                <p className='text-[#787A80] text-[12px]'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
              </article>
              <article className='text-center px-[40px] py-[40px] items-center flex flex-col justify-between w-[300px] hover:shadow-lg dark:shadow-[#ffffff38] shadow-gray-600  h-[200px] rounded-[4px] border-[1px] dark:border-gray-700 border-[#E5E8ED]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#7772F1]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>

                <h1 className='font-bold'>Social Advertising Experts</h1>
                <p className='text-[#787A80] text-[12px]'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
              </article>
              <article className='text-center px-[40px] py-[40px] items-center flex flex-col justify-between w-[300px] hover:shadow-lg dark:shadow-[#ffffff38] shadow-gray-600  h-[200px] rounded-[4px] border-[1px] dark:border-gray-700 border-[#E5E8ED]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#7772F1]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>

                <h1 className='font-bold'>Social Advertising Experts</h1>
                <p className='text-[#787A80] text-[12px]'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
              </article>
            </div>
            <img src={HeroN5} className='w-[300px] h-[400px]' alt="" />
           <div className='flex flex-col gap-[20px]'>
              <article className='text-center px-[40px] py-[40px] items-center flex flex-col justify-between w-[300px] hover:shadow-lg dark:shadow-[#ffffff38] shadow-gray-600  h-[200px] rounded-[4px] border-[1px] dark:border-gray-700 border-[#E5E8ED]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#7772F1]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                </svg>
                <h1 className='font-bold'>Social Advertising Experts</h1>
                <p className='text-[#787A80] text-[12px]'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
              </article>
              <article className='text-center px-[40px] py-[40px] items-center flex flex-col justify-between w-[300px] hover:shadow-lg dark:shadow-[#ffffff38] shadow-gray-600  h-[200px] rounded-[4px] border-[1px] dark:border-gray-700 border-[#E5E8ED]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#7772F1]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>

                <h1 className='font-bold'>Social Advertising Experts</h1>
                <p className='text-[#787A80] text-[12px]'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
              </article>
              <article className='text-center px-[40px] py-[40px] items-center flex flex-col justify-between w-[300px] hover:shadow-lg dark:shadow-[#ffffff38] shadow-gray-600  h-[200px] rounded-[4px] border-[1px] dark:border-gray-700 border-[#E5E8ED]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#7772F1]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
                <h1 className='font-bold'>Social Advertising Experts</h1>
                <p className='text-[#787A80] text-[12px]'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
              </article>
            </div>
          </div>
        </section>
      </section>

    </div>
  )
}

export default Home
