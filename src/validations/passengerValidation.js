const PassengerValidation = (values) =>{
    const errors = [];

    if(!values.first_name || values.first_name === ""){
        errors.first_name = "Nama lengkap harus diisi";
    }



    return errors;
}

export default PassengerValidation;