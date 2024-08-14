import Slider from "react-slick";
import { CardLayout } from "../../../ui"
import { FC } from "react";
import { stakingOption } from "../../../__mock_data__/dex-info";

interface IProp {
  icon: string;
  marketVolume: string;
  tokenName: string
}

const CardFlow:FC<IProp> = ({icon, marketVolume, tokenName}) => {
  
  return (
    <CardLayout variant={'cardGradient'}  size={'md'}>
      <div className="flex mb-5 items-center">
        <img src={icon} alt="dollar-img" className="mr-2 w-[40px] lg:w-[50px]" />
        <span className="text-white font-montserrat text-[14px] lg:text-[16px] ">{tokenName}</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
        <span className='text-gray-100 text-[14px] lg:text-[16px] mb-3 font-montserrat'>Market Volume</span>
        <h2 className='font-montserrat font-semibold text-[14px] lg:text-[20px] text-white pb-4'> $ {marketVolume}</h2>
        </div>
        <div className="flex flex-col">
        <span className='text-gray-100  text-[14px] lg:text-[16px] mb-3 font-montserrat'>Market Volume</span>
        <h2 className='font-montserrat font-semibold text-[14px] lg:text-[20px] text-[#8D8FF9] pb-4'> $ {marketVolume}</h2>
        </div>

      </div>
    </CardLayout>
  )
}

const Staking = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    rtl: false,
    slidesToShow: 3.5,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0px',
    slidesToScroll: 2,

    responsive: [
      {
          breakpoint: 1600,
          settings: {
            slidesToShow: 2.5,
            centerPadding: '20px',
            slidesToScroll: 1,
            autoPlay: true,
            infinite: true,
          }
        },
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 2,
            centerPadding: '20px',
            slidesToScroll: 1,
            autoPlay: true,

          }
        },
      {
          breakpoint: 600,
          settings: {
            autoPlay: true,
            slidesToShow: 1,
            centerPadding: '20px',
            slidesToScroll: 1
          }
        }
  ],
  };

  const settingsTwo = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    rtl: true,
    slidesToShow: 3.5,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0px',
    slidesToScroll: 1,
    responsive: [
      {
          breakpoint: 1600,
          settings: {
            slidesToShow: 2.5,
            centerPadding: '20px',
            slidesToScroll: 1,
            autoPlay: true,
            infinite: true,
          }
        },
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 1,
            centerPadding: '20px',
            slidesToScroll: 1,
            autoPlay: true,

          }
        },
      {
          breakpoint: 600,
          settings: {
            autoPlay: true,
            slidesToShow: 1,
            centerPadding: '20px',
            slidesToScroll: 1
          }
        }
  ]
  };

  return (
    <div className='lg:pt-10 pt-6 relative  w-full'>
        <div className='items-end mb-12 flex mx-auto px-4 flex-col lg:flex-row lg:px-10  justify-center'>
            <h1 className='text-white text-center lg:w-[725px] font-semibold lg:text-left font-montserrat text-[24px] lg:text-[40px]/[50px]'>
            Liquid Staking Derivatives (LSD) & Yield Bearing Stablecoins 
            </h1>
            <p className='text-[18px]  lg:w-[936px] pt-5 font-montserrat text-center text-gray-100'>
            Yield Generation & Staking,  Stablecoin Issuance
            </p>
        </div> 
        <div>
          <div className="mb-8">
          <Slider {...settings} >
            {
              stakingOption.map((option, index) => {
                return (
                  <CardFlow tokenName={option.tokenName} icon={option.logo} marketVolume={option.marketVolumne} key={index} />
                )
              }) 
            }
          </Slider>
          </div>
          <div>
          <Slider {...settingsTwo} >
            {
              stakingOption.map((option, index) => {
                return (
                  <CardFlow tokenName={option.tokenName} icon={option.logo} marketVolume={option.marketVolumne} key={index} />
                )
              }) 
            }
          </Slider>
          </div>
        </div>
    </div>
  )
}

export default Staking