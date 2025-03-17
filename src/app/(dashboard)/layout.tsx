import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Menu from '../../components/Menu';
import Navbar from '@/components/Navbar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full flex text-lg font-sm">
      {/*Left */}
      <div className="w-[15%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-teal-500 p-4">
        <Link href="/" className='flex items-center justify-center gap-2 lg:justify-start'>
          <Image src={Logo} alt="logo" width={30} height={30} />
          <span className='hidden lg:block'>Alpine School</span>
        </Link>
        <Menu />
      </div>

      {/*Right */}
      <div className="w-[85%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200 overflow-scroll">
        <Navbar />
        {children}

      </div>
    </div>
  );
}