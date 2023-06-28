import Header from "../components/header";
import Register from "../components/register";
import { Image } from 'primereact/image';
import Logo from './tiketku.png'

function RegisterPage() {
    return (
        <div className="flex items-center h-screen w-screen">
            <div className='w-5/6 hidden md:block h-screen'>
                <Image className="image object-cover " src={Logo} alt="Image" width='' />
            </div>
            <div className='flex flex-col w-screen '>
                <label className="text-3xl md:text-left text-center md:px-32 font-extrabold text-gray-900 ">Daftar</label>
                <div className='md:px-32 '>
                    <Register />
                </div>
                <Header
                    paragraph="Sudah punya akun? "
                    linkName="Masuk di sini"
                    linkUrl="/"
                />

            </div>
        </div>
    )
}

export default RegisterPage;