import { useEffect } from 'react';
import { useState } from 'react';
import { resetPasswordFields } from "../constants/formFields";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import FormAction from "./formAction";
import axios from "axios"
import Input from "./input";

const fields = resetPasswordFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

function ResetPasswordPage() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [resetPassState, setResetPassState] = useState(fieldsState);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setResetPassState({ ...resetPassState, [e.target.id]: e.target.value })
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
    }

    //Handle Reset Password API Integration here
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await axios.post('https://be-tiketku-production.up.railway.app/api/v1/user/otp', {
                email: email
            }).then(res => {
                toast.success(`${res.data.message}, redirect in 3s...`, {
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
                    setLoading(false)
                    setTimeout(() => {
                        navigate("/otp-reset-password", {
                            state: email
                        })
                    }, 1000);
                }, 2000);
            }).catch(error => {
                toast.error(`${error.response.data.message}`, {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            })
        } catch (error) {
            // console.log(error);
        }
    }

    return (
        <form className="mt-8 space-y-6 w-screen px-20  md:px-0 md:w-full " onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={resetPassState[field.id]}
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
            <FormAction loading={loading} handleSubmit={handleSubmit} text="Kirim" />
        </form>
    )
}


export default ResetPasswordPage;