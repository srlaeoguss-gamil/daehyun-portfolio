
//import "./header.scss";
import Link from "next/link";
import Image from 'next/image';
import logoImage from './logo.png';
import './css/header.scss'; 
export default function Header({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <header className='header'>
      <h1>
        <Image src={logoImage} alt="Daehyun.Dev"   />
      </h1>
      <nav >
        <Link href="#intro" className='icon-info-circle'>INTRO</Link>
        <Link href="#profile" className='icon-user-search'>PROFILE</Link>
        <Link href="#projects" className='icon-file-bookmark'>PROJECTS</Link>
        {/* <Link href="#code">CODE</Link> */}
      </nav>
      
    </header>
  );
}
