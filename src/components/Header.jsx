import Image from 'next/image';
import Link from 'next/link';
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"



const Header = () => {
  return (
    <header> 
        <nav className='flex justify-between items-center'>
          <Link href="/">
            <Image 
              src="/icons/logo.png" 
              width={90}
              height={90}
              className='ml-0' 
            />
          </Link>
          <div className='flex justify-between items-center gap-3'>
            <Switch id="dark-mode" />
            <Label htmlFor="dark-mode">Темная тема</Label>
          </div>
        </nav>
    </header>
  );
};

export default Header;