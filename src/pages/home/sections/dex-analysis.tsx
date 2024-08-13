import { useRef, useState } from 'react';
import { DexInfo } from '../../../__mock_data__/dex-info'
import { CardLayout } from '../../../ui'
import Slider from 'react-slick';
import { images } from '../../../assets/images';


const DexAnalysis = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
        ],
        beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
      };
      
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sliderRef = useRef<any>(null);
    const clickButton = (isNext: boolean) => {
        if(sliderRef.current === null) return;   
        if(isNext) {
            sliderRef.current.slickNext()
        }else {
            sliderRef.current.slickPrev()   
        }
    }

  return (
    <div className='bg-black-100 pt-12 lg:pt-24 relative pb-12 lg:pb-24 w-full'>
        <div className='flex-col  flex mx-auto items-center justify-center'>
            <h1 className='text-white lg:w-[960px] font-semibold text-center font-montserrat text-[24px]  lg:text-[40px]/[50px]'>
            Using DEX LP Tokens as Collateral

            </h1>
            <p className='text-[14px] lg:text-[18px] lg:w-[936px] px-4 lg:px-0 pt-3 lg:pt-5 font-montserrat text-center text-gray-100'>
            Nebula Protocol supports the use of DEX LP tokens as collateral. Allowing users to leverage their liquidity pool positions without having to withdraw from the pool, thus continuing to earn trading fees and liquidity rewards while also accessing additional liquidity through borrowing.

            </p>
        </div> 
        <div className='hidden lg:flex mt-8 w-full pr-16 gap-x-4 items-center justify-end'>
            <button disabled={currentSlide === 0} onClick={() => clickButton(false)}   className={`${currentSlide === 0 ? 'bg-[#111623]' : 'bg-primary-gradient'} border-none  h-[50px] flex items-center justify-center rounded-[50px]  w-[50px]`}>
                <img alt='arrow-left' src={images.arrowLeft} />
            </button>
            <button disabled={currentSlide === DexInfo.length - 1} onClick={() => clickButton(true)} className={`${currentSlide === DexInfo.length - 1 ? 'bg-[#111623]': 'bg-primary-gradient'} border-none  h-[50px] flex items-center justify-center rounded-[50px] w-[50px]`}>
                <img alt='arrow-left' src={images.arrowRight} />
            </button>
        </div>
        {/* <div className='bg-elipse-img absolute bottom-40 left-0 bg-no-repeat  w-full h-full'></div> */}
        
        <div className='mt-10 px-6 w-full '>
           <Slider ref={sliderRef} {...settings}>
           {
                DexInfo.map((info, index) => {
                    return (
                        <CardLayout key={index} className='px-6 py-8 lg:py-16 w-full rounded-[10px] min-h-[200px]'  variant={index === 0 ? 'cardGradient' : 'cardGradient'}>
                            <h2 className='font-montserrat font-semibold text-[16px] lg:text-[20px] text-white pb-4'>{info.header}</h2>
                            <span className='text-gray-100 text-[13px] lg:text-[16px] lg:w-[395px] font-montserrat'>{info.content}</span>
                        </CardLayout>
                    )
                })
            }
           </Slider>
        </div>
           </div>
  )
}

export default DexAnalysis