import Image from 'next/image';
import Link from 'next/link';



const Header = () => {
  return (
    <header> 
        <nav className='flex justify-between items-center'>
          <Image 
            src="/icons/logo.png" 
            width={90}
            height={90}
            className='ml-0' 
          />
            <ul className='flex justify-between w-72'>
                <li><Link className="hover:underline decoration-4 transition duration-300 hover:rounded-lg" href="#">Home</Link></li>
                <li><Link className="hover:underline decoration-4 transition duration-300 hover:rounded-lg" href="#">About us</Link></li>
                <li><Link className="hover:underline decoration-4 transition duration-300 hover:rounded-lg" href="#">Portfolio</Link></li>
                <li><Link className="hover:underline decoration-4 transition duration-300 hover:rounded-lg" href="#">News</Link></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;