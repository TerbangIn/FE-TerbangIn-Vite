// import Header from '../components/header';
import ResetPassword from '../components/resetPassword';
import Gambar from './tiketku.png'
import { Image } from 'primereact/image';

function ResetPasswordPage() {
    return (
        <div className="flex items-center">
            <div className='w-5/6 hidden lg:block h-screen'>
                <Image src={Gambar} alt="Image" width='502' />
            </div>
            <div className='flex flex-col w-full '>
                <label className="text-3xl lg:text-left text-center xl:px-40 lg:px-40 md:px-20 sm:px-0 px-0 font-extrabold text-gray-900 ">Reset Password</label>
                <div className='xl:px-40 lg:px-40 md:px-20 sm:px-0 px-0 '>
                    <ResetPassword />
                </div>
                {/* <Header
                heading="Masuk"
                labelText="aaaaaaaaaaaa"
                paragraph="Belum punya akun? "
                linkName="Daftar di sini"
                linkUrl="/signup"
                /> */}

            </div>
        </div>
    )
}

export default ResetPasswordPage