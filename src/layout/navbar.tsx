import { Link } from 'react-router-dom'
import { images } from '../assets/images'
import { navLinks } from '../utilities/nav-links'
import { useEffect, useState } from 'react';

const NavigationBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const toggle = () => setIsMobile(!isMobile)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
  
        setLastScrollY(window.scrollY);
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }, [controlNavbar, lastScrollY]);

    const MobileDropdown = ({isMobile}: {isMobile: boolean}) => {
      useEffect(() => {
        if (isMobile) {
          document.body.classList.add('overflow-hidden');
        } else {
          document.body.classList.remove('overflow-hidden');
        }
        return () => {
          document.body.classList.remove('overflow-hidden');
        };
      }, [isMobile]);
    
      if (!isMobile) return null;
    
      return (
        <div className={`md:hidden bg-black-100  absolute top-0 right-0 left-0 h-screen flex-col  space-y-10 pt-8 flex px-6 duration-300 ${isMobile ? 'translate-x-0' : '-translate-x-[100%]'}`}>
            <div className='flex items-center justify-between'>
            <Link to={'/#'}>
                <img src={images.logoMarkWhite} alt="logo-image"  height={38} className=' h-[38px]' />
              </Link>
              <img src={images.closeIcon} width={20} className='w-[16px]' onClick={() => setIsMobile(false)}   />
            </div>
      <ul className={`md:hidden flex-col space-y-12 flex `}>
           
           
           {
               navLinks.map((link, index) => {
                   return (
                       <Link onClick={() => setIsMobile(false)} className='text-white font-semibold font-montserrat text-[18px] capitalize' key={index} to={'#'}> {link.name} </Link>
                   )
               })
           }
       </ul>

      </div>
      )
    }
    
  return (
    <nav className={`${lastScrollY > 1000 ? 'fixed' : 'sticky'} left-0 right-0 top-0 z-50  flex items-center justify-between px-[25px] lg:px-[60px] py-[20px] ${isVisible ? 'bg-transaprent' : 'bg-primary-gradient'}`}>
        <Link to={'/'}>
            <img alt='logo-image' className='w-[35px] lg:w-[45px]' src={images.logoMarkWhite} />
        </Link>
        <div onClick={toggle}>
          <img src={images.menuIcon} className='w-[34px] lg:hidden' alt="menu-icon" />
        </div>
        <ul className='hidden lg:flex gap-x-[15px] items-center'>
            {
                navLinks.map((link, index) => {
                    return (
                        <li key={index} className='list-none px-[12px] capitalize font-poppins font-[16px] py-2 text-white'>
                            <Link className='no-underline' to={link.link}>{link.name}</Link>
                        </li>
                    )
                })
            } 
        </ul>
        {/* <Button>Launch Daap</Button> */}

        <div className='hidden lg:block'></div>
        <MobileDropdown isMobile={isMobile} />

    </nav>
  )
}

export default NavigationBar