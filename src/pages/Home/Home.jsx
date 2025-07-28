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
////////////////////////////////////////////


const Home = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className='dark:bg-black dark:text-white'>
      <section className='px-[20px] py-[20px] lg:px-[150px] lg:py-[80px]'>
        <div className='flex flex-wrap lg:justify-between'>
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
        <div className='flex flex-wrap lg:justify-between justify-center mt-[30px] lg:mt-[200px]'>
          <img data-aos='zoom-in' src={inDepthLogo} alt="" />
          <img data-aos='zoom-in' src={higherFitLogo} alt="" />
          <img data-aos='zoom-in' src={sentialLogo} alt="" />
          <img data-aos='zoom-in' src={happyHomeLogo} alt="" />
          <img data-aos='zoom-in' src={ForSaleLogo} alt="" />
          <img data-aos='zoom-in' src={sunsetSealityLogo} alt="" />
        </div>
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
            <p className='text-[#424551]'>Years of experience</p>
          </div>
          <div className='text-center flex flex-col gap-[20px]'>
            <CircularProgress percentage="45" color='#F52F6E' />
            <p className='text-[#424551]'>Awards</p>
          </div>
          <div className='text-center flex flex-col gap-[20px]'>
            <CircularProgress percentage="540" color='#5A87FC' />
            <p className='text-[#424551]'>Projects</p>
          </div>
          <div className='text-center flex flex-col gap-[20px]'>
            <CircularProgress percentage="100" color='#03CEA4' />
            <p className='text-[#424551]'>Happy clients</p>
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
                  <p className='text-[#424551]'>Aenean enim tellus morbi nisl vulputate dictumst.</p>
                </div>
                <div data-aos='zoom-in' className='flex gap-[10px] '>
                  <CheckIcon className='w-[20px] text-[#7772F1]' />
                  <p className='text-[#424551]'>Vel in amet, placerat adipiscing est pharetra.</p>
                </div>
                <div data-aos='zoom-in' className='flex gap-[10px] '>
                  <CheckIcon className='w-[20px] text-[#7772F1]' />
                  <p className='text-[#424551]'>Gravida ornare sit in et ut sit sem id.</p>
                </div>
                <div data-aos='zoom-in' className='flex gap-[10px] '>
                  <CheckIcon className='w-[20px] text-[#7772F1]' />
                  <p className='text-[#424551]'>Ultrices pellentesque dictum enim egestas ac diam.</p>
                </div>

                <div data-aos='zoom-in' className='flex gap-[10px] '>
                  <CheckIcon className='w-[20px] text-[#7772F1]' />
                  <p className='text-[#424551]'>Sit semper enim senectus integer ut turpis et.</p>
                </div>
                <div data-aos='zoom-in' className='flex gap-[10px] '>
                  <CheckIcon className='w-[20px] text-[#7772F1]' />
                  <p className='text-[#424551]'>Nibh sapien volutpat lacus augue.</p>
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
      </section>
      <section className='py-[50px] px-[20px] lg:px-[150px] bg-[#1E212C] flex flex-wrap  lg:justify-between'>
        <img data-aos='zoom-in' className='mb-[20px]' src={HeroN3} alt="" />
        <div className='lg:w-[500px] flex flex-col gap-[50px] text-white'>
          <h1 data-aos='zoom-in' className='text-[35px] font-bold'>Get a Free SEO Analysis!</h1>
          <div className='flex flex-wrap gap-[25px] lg:w-[500px]'>
            <input data-aos='zoom-in' type="text" className='w-[100%] lg:w-[47%] border h-[40px] border-[#FFFFFF33] border-[1px] rounded-[5px] bg-[#FFFFFF1F]' name="" id="" />
            <input data-aos='zoom-in' type="text" className='w-[100%] lg:w-[47%] border h-[40px] border-[#FFFFFF33] border-[1px] rounded-[5px] bg-[#FFFFFF1F]' name="" id="" />
            <input data-aos='zoom-in' type="text" className='w-[100%] lg:w-[100%] border h-[40px] border-[#FFFFFF33] border-[1px] rounded-[5px] bg-[#FFFFFF1F]' name="" id="" />
          </div>
          <div className='flex flex-wrap justify-between'>
            <div className='flex gap-[15px]'>
              <input data-aos='zoom-in' type="checkbox" />
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
      <section className=' dark:bg-[#1E212C] bg-[#E5E8ED] lg:px-[150px]'>
        <div className='flex justify-between pt-[80px] pb-[30px]'>
          <h1 className='font-bold text-[35px]'>
            Read our clients' case studies
          </h1>
          <div className='flex'>
            <button className='w-[45px] h-[45px] rounded-full active:bg-[#7772F1] active:text-[white] flex justify-center items-center'>
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
        <div className='flex flex-wrap justify-between'>
          <HoverSquare />
          <HoverSquare backgroundImage={HoverSquareBg} />
          <HoverSquare />
        </div>
      </section>
    </div>
  )
}

export default Home
