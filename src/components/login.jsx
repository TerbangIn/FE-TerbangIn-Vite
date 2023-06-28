import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginFields } from "../constants/formFields";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import Cookies from 'universal-cookie';
import FormAction from "./formAction";
import Input from "./input";

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

const Login = () => {
    let nav = useNavigate()
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginState, setLoginState] = useState(fieldsState);
    const handleChange = (e) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value })
        if (e.target.name === "email") {
            setUsername(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    }

    //Handle Login API Integration here
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(
                "https://be-tiketku-production.up.railway.app/api/v1/user/login",
                {
                    email: email,
                    password: password
                }
            ).then(
                async function (res) {
                    const cookies = new Cookies()
                    const token = res.data.data.token
                    cookies.set("token", token, { path: "/" })
                    console.log(token);
                    // toast.success(`${res.data.message}, redirect in 3s...`, {
                    await toast.success('Login Success, redirect in 3s...', {
                        position: "bottom-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })

                    setTimeout(() => {
                        nav('/beranda')
                    },1000);
                    
                }
            ).catch(
                function (err) {
                    toast.error(`${err}`, {
                        position: "bottom-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                }
            )
            // console.log(username, password);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className="mt-8 space-y-6 w-screen px-20  md:px-0 md:w-full " onSubmit={handleSubmit}>
            <div className="space-y-px">
                {
                    fields.map(field =>
                        <Input
                            isLogin={field.isLogin}
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    )
                }
                <ToastContainer
                    position="bottom-center"
                    autoClose={2000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
            <FormAction onSubmit={handleSubmit} text="Masuk" />
        </form>
    )
}

export default Login;