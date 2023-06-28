// import Header from '../components/header'
import ResetPasswordBaru from '../components/resetPasswordBaru';
import Logo from './tiketku.png'
import { Image } from 'primereact/image';

function ResetPasswordBaruPage(){
    return(
        <div className="flex items-center h-screen w-screen">
            <div className='w-5/6 hidden md:block h-screen'>
                <Image className="image object-cover " src={Logo} alt="Image" width='' />
            </div>
            <div className='flex flex-col w-screen '>
                <label className="text-3xl md:text-left text-center md:px-32 font-extrabold text-gray-900 ">Reset Password</label>
                <div className='md:px-32 '>
                    <ResetPasswordBaru />
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

export default ResetPasswordBaruPage