import Header from '../components/header'
import Login from '../components/login'
import Logo from './tiketku.png'
import { Image } from 'primereact/image';

export default function LoginPage() {
    return (
        <div className="flex items-center">
            <div className='w-9/12 hidden lg:block'>
                <Image src={Logo} alt="Image" width='502' />
            </div>
            <div className='flex flex-col w-full'>
                <label className="text-3xl lg:text-left text-center xl:px-40 lg:px-40 md:px-20 sm:px-0 px-0 font-extrabold text-gray-900 ">Masuk</label>
                <div className='xl:px-40 lg:px-40 md:px-20 sm:px-0 px-0'>
                    <Login />
                </div>
                <Header
                    paragraph="Belum punya akun? "
                    linkName="Daftar di sini"
                    linkUrl="/register"
                />
            </div>
        </div>
    )
}