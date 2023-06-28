/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
const Authmiddleware = ({component}) => {
  const Component = component
  const cookies = new Cookies()

  const token = cookies.get('token')
  // const navigate = useNavigate()

  useEffect(() => {
    if(!(token)) {
      console.log("NO TOKEN")
    }
  }, [token])

  return Component
    
}

export default Authmiddleware