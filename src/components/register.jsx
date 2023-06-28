import React, { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./formAction";
import axios from "axios"
import Input from "./input";
// import { authService, storageService } from "../services";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id] = '');

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [telepon, setTelepon] = useState("");
  const [password, setPassword] = useState("");
  const [signupState, setSignupState] = useState(fieldsState);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value })
    if (e.target.name === "email") {
      setEmail(e.target.value);
      // username = e.target.value;
    } else if (e.target.name === "username") {
      setUsername(e.target.value);
      // password = e.target.value;
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
      // username = e.target.value;
    } else if (e.target.name === "telepon") {
      setTelepon(e.target.value);
      // password = e.target.value;
    }
  };

  //handle Register API Integration here
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        "https://be-tiketku-production.up.railway.app/api/v1/user/register",
        {
          first_name: username,
          email,
          phone_number: telepon,
          password,
        }
      ).then(
        function (res) {
          console.log(res);
          const cookies = new Cookies()
          const token = res.data.data.token
          cookies.set("token", token, { path: "/" })
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
          navigate("/otp-register", {
            state: email
          })
        }
      ).catch(
        function (error) {
          console.log(error);
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
        }
      )

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
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            // isRequired={field.isRequired}
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
      <FormAction handleSubmit={handleSubmit} text="Daftar" />
    </form>
  )
}

export default Signup