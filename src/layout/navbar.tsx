import { Link } from 'react-router-dom'
import { images } from '../assets/images'
import { navLinks } from '../utilities/nav-links'
import { useEffect, useState } from 'react';

const NavigationBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 140) {
          // Scroll Down
          setIsVisible(false);
        } else {
          // Scroll Up
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
  return (
    <nav className={`${lastScrollY > 1000 ? 'fixed' : 'sticky'} left-0 right-0 top-0 z-50  flex items-center justify-between px-[60px] py-[20px] ${isVisible ? 'bg-transaprent' : 'bg-black-100'}`}>
        <Link to={'/'}>
            <img alt='logo-image' src={images.logoMarkWhite} />
        </Link>
        <ul className='flex gap-x-[15px] items-center'>
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
        <div></div>
    </nav>
  )
}

export default NavigationBar