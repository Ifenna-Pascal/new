import Slider from "react-slick";
import { images } from "../../../assets/images"
import { CardLayout } from "../../../ui"

const CardFlow = () => {
  
  return (
    <CardLayout variant={'cardGradient'}  size={'md'}>
      <div className="flex mb-5 items-center">
        <img src={images.dollar} alt="dollar-img" className="mr-1" />
        <span className="text-white font-montserrat text-[18px] ">USDC</span>
        <span className="text-gray-100 font-semibold text-[16px] font-montserrat">|Arbitrum</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
        <span className='text-gray-100 text-[16px] mb-3 font-montserrat'>Market Volume</span>
        <h2 className='font-montserrat font-semibold text-[20px] text-white pb-4'> $ 1,706,447.45</h2>
        </div>
        <div className="flex flex-col">
        <span className='text-gray-100 text-[16px] mb-3 font-montserrat'>Market Volume</span>
        <h2 className='font-montserrat font-semibold text-[20px] text-[#8D8FF9] pb-4'> $ 1,706,447.45</h2>
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
    slidesToScroll: 1,
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
  };

  return (
    <div className='pt-10 relative  w-full'>
        <div className='items-end mb-12 flex mx-auto px-10  justify-center'>
            <h1 className='text-white w-[725px] font-semibold text-left font-montserrat text-[40px]/[50px]'>
            Liquid Staking Derivatives (LSD) & Yield Bearing Stablecoins 
            </h1>
            <p className='text-[18px] w-[936px] pt-5 font-montserrat text-center text-gray-100'>
            Yield Generation & Staking,  Stablecoin Issuance
            </p>
        </div> 
        <div>
          <div className="mb-8">
          <Slider {...settings} >
            {
              [1,2,3,4].map((_, index) => {
                return (
                  <CardFlow key={index} />
                )
              }) 
            }
          </Slider>
          </div>
          <div>
          <Slider {...settingsTwo} >
            {
              [1,2,3,4].map((_: number, index) => {
                return (
                  <CardFlow key={index} />
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