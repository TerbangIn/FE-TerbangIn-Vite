import Header from '../components/header'
import Login from '../components/login'
import Logo from './tiketku.png'
import { Image } from 'primereact/image';

export default function LoginPage() {
    return (
        <div className="flex items-center h-screen w-screen">
            <div className='w-5/6 hidden md:block h-screen'>
                <Image className="image object-cover " src={Logo} alt="Image" width='' />
            </div>
            <div className='flex flex-col w-screen '>
                <label className="text-3xl md:text-left text-center md:px-32 font-extrabold text-gray-900 ">Masuk</label>
                <div className='md:px-32 '>
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