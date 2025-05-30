export const isFormValid = (formData) => {
    console.log(formData)
    const regex = '^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$'

    if(!formData.username || !formData.password){
        return {message: "Username or password is missing.", isValid: false};
    }
    else if(formData.password.length < 8){
        return {message: "Password must be at least 8 characters.", isValid: false};
    }
    else if(!formData.password.match(regex)){
        return {message: "Password must have at least 8 characters, one special character and one number.", isValid: false};
    }
    else{
        return {message: "Form data validated", isValid: true};
    }
}