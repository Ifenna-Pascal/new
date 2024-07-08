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
        slidesToShow: 2.5,
        centerMode: true,
        centerPadding: '0px',
        slidesToScroll: 1,
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
    <div className='bg-black-100   pt-10 relative pb-24 w-full'>
        <div className='flex-col  flex mx-auto items-center justify-center'>
            <h1 className='text-white w-[960px] font-semibold text-center font-montserrat text-[40px]/[50px]'>
                DEX LP Tokens as Collateral 
            </h1>
            <p className='text-[18px] w-[936px] pt-5 font-montserrat text-center text-gray-100'>
                Power up your portfolio by Borrowing, Lending and Multiplying your favorite assets. Made Safe and Easy by industry leading automation tools.
            </p>
        </div> 
        <div className='flex mt-8 w-full pr-16 gap-x-4 items-center justify-end'>
            <button disabled={currentSlide === 0} onClick={() => clickButton(false)}   className={`${currentSlide === 0 ? 'bg-[#111623]' : 'bg-primary-gradient'} border-none  h-[50px] flex items-center justify-center rounded-[50px]  w-[50px]`}>
                <img alt='arrow-left' src={images.arrowLeft} />
            </button>
            <button disabled={currentSlide === DexInfo.length - 1} onClick={() => clickButton(true)} className={`${currentSlide === DexInfo.length - 1 ? 'bg-[#111623]': 'bg-primary-gradient'} border-none  h-[50px] flex items-center justify-center rounded-[50px] w-[50px]`}>
                <img alt='arrow-left' src={images.arrowRight} />
            </button>
        </div>
        {/* <div className='bg-elipse-img absolute bottom-40 left-0 bg-no-repeat  w-full h-full'></div> */}
        
        <div className='mt-8 px-6 w-full '>
           <Slider ref={sliderRef} {...settings}>
           {
                DexInfo.map((info, index) => {
                    return (
                        <CardLayout key={index} className='px-6 py-16' size={'lg'} variant={index === 0 ? 'gradientDark' : 'gradientLight'}>
                            <h2 className='font-montserrat font-semibold text-[20px] text-white pb-4'>{info.header}</h2>
                            <span className='text-gray-100 text-[16px] w-[395px] font-montserrat'>{info.content}</span>
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