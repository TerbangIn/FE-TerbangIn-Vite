import Header from "../components/header";
import Register from "../components/register";
// import { Image } from 'primereact/image';
import Logo from './tiketku.png'

function RegisterPage() {
    return (
        <div className="flex items-center overflow-y-hidden h-screen">
            <div className='max-xl:w-[90%] xl:w-10/12 lg:w-8/12 hidden lg:block'>
                <img src={Logo} alt="Image" />
            </div>
            <div className='flex flex-col w-full'>
                <label className="text-3xl lg:text-left text-center xl:px-40 lg:px-40 md:px-20 sm:px-0 px-0 font-extrabold text-gray-900 ">Daftar</label>
                <div className='xl:px-40 lg:px-40 md:px-20 sm:px-0 px-0'>
                    <Register />
                </div>
                <Header
                    paragraph="Sudah punya akun? "
                    linkName="Masuk di sini"
                    linkUrl="/login"
                />

            </div>
        </div>
    )
}

export default RegisterPage;