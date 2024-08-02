import { Link } from 'react-router-dom'
import { images } from '../assets/images'
import { navLinks } from '../utilities/nav-links'

const NavigationBar = () => {

  return (
    <nav className='sticky top-0 z-50 bg-black-100 flex items-center justify-between px-[60px] py-[20px]'>
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