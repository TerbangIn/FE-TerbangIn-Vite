// import Header from '../components/header'
import ResetPasswordBaru from '../components/resetPasswordBaru';
import Logo from './tiketku.png'
// import { Image } from 'primereact/image';

function ResetPasswordBaruPage(){
    return(
        <div className="flex items-center overflow-y-hidden h-screen">
            <div className='max-xl:w-[90%] xl:w-10/12 lg:w-8/12 hidden lg:block'>
                <img src={Logo} alt="Image" />
            </div>
            <div className='flex flex-col w-full'>
                <label className="text-3xl lg:text-left text-center xl:px-40 lg:px-40 md:px-20 sm:px-0 px-0 font-extrabold text-gray-900 ">Reset Password</label>
                <div className='xl:px-40 lg:px-40 md:px-20 sm:px-0 px-0'>
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