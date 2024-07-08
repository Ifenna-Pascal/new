import { Link } from 'react-router-dom'
import { images } from '../assets/images'
import { navLinks } from '../utilities/nav-links'
import { Button } from '../ui'

const NavigationBar = () => {

  return (
    <nav className='bg-transparent sticky top-0 bg-black-100 flex items-center justify-between px-[60px] py-[25px]'>
        <Link to={'/'}>
            <img alt='logo-image' src={images.logo} />
        </Link>
        <ul className='flex gap-x-[10px] items-center'>
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
        <Button>Launch Daap</Button>
    </nav>
  )
}

export default NavigationBar