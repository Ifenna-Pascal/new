import { useRef, useState } from 'react';
import { contributions } from '../../../__mock_data__/dex-info'
import Slider from 'react-slick';
import { images } from '../../../assets/images';


const Contributions = () => {
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
    <div className='bg-transparent relative pb-24 w-full'> 
    {/* <div className=" absolute w-full h-full bg-no-repeat bottom"></div> */}
        <div className='flex     w-full pr-6 gap-x-4 items-center justify-end'>
            <button disabled={currentSlide === 0} onClick={() => clickButton(false)}   className={`${currentSlide === 0 ? 'bg-[#111623]' : 'bg-primary-gradient'} border-none  h-[40px] flex items-center justify-center rounded-[40px]  w-[40px]`}>
                <img alt='arrow-left' className='w-[20px] h-[20px]' src={images.arrowLeft} />
            </button>
            <button disabled={currentSlide === contributions.length - 1} onClick={() => clickButton(true)} className={`${currentSlide === contributions.length - 1 ? 'bg-[#111623]': 'bg-primary-gradient'} border-none  h-[40px] flex items-center justify-center rounded-[40px] w-[40px]`}>
                <img alt='arrow-left'  className='w-[15px] h-[15px]' src={images.arrowRight} />
            </button>
        </div>        
        <div className='mt-8 px-6 w-full '>
           <Slider ref={sliderRef} {...settings}>
           {
                contributions.map((info, index) => {
                    return (
                        <div 
                        data-aos="fade-up"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        key={index} className='px-6 border rounded-[14px] border-[#302E2E] h-[147px] py-6 flex items-center flex-col justify-between bg-[#010510]'>
                            <p className='font-montserrat text-[16px] text-[#A9A9A9] pb-6'>{info.header}</p>
                            <h2 className='text-white text-[24px] w-[395px] font-montserrat'>{info.content}</h2>
                        </div>
                    )
                })
            }
           </Slider>
        </div>
           </div>
  )
}

export default Contributions