import Logo from '../assets/images/Logo2.jpeg'
import Image from 'next/image';
import Hero from './home/hero/hero'

export default function Home() {
  return (
    <>
    <Hero/>
      {/* <Image src={Logo} className=' rounded-full'/> */}
    </>
  );
}
