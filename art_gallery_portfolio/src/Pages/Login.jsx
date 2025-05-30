import { useState } from "react"
import LoginModal from "../Components/LoginModal"
import SignUpModal from "../Components/SignUpModal"
import API from "../api/API"
import { useNavigate } from "react-router-dom"
import { isFormValid } from "../Utilities/helpers"
const api = new API()

const Login = () => {
    const [modal, setModal] = useState('Login')
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const router = useNavigate()
    const switchModals = (modal) => {
        switch (modal) {
            case "Login":
                setModal("Login")
                setFormData({
                    username: '',
                    password: ''
                })
                break;
            case "Signup":
                setModal("Signup")
                setFormData({
                    username: '',
                    password: ''
                })
                break;
            default:
                console.log("Please choose a modal.")
        }
    }
    const handleLogin = async (e, formData) => {
        e.preventDefault()
        try {
            const response = await api.login(formData)
            if (response.status !== 200) {
                alert("Could not sign you in.")
            }
            alert("Login successful. Now heading to main menu.")
            router('/')
            setFormData({
                username: '',
                password: ''
            })
        } catch (e) {
            console.log(e)
        }

    }
    const handleSignup = async (e, formData) => {
        e.preventDefault()
        try {
            console.log(formData)
            const formValidationResponse = isFormValid(formData)
            console.log(formValidationResponse.message)
            if (!formValidationResponse.isValid) {
                alert("Form data is not valid. Message: ", formValidationResponse.message)
                return;
            }
            const response = await api.register(formData)
            if (response.status !== 200) {
                alert("Could not sign you up.")
                return;
            }
            alert("Sign up successful. Now heading to login page.")
            setFormData({
                username: '',
                password: ''
            })
            router('/Login')
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div className="p-5">
            {modal === 'Login' ?
                <LoginModal
                    handleLogin={handleLogin}
                    switchModals={switchModals}
                    formData={formData}
                    setFormData={setFormData}
                /> :
                <SignUpModal
                    handleSignup={handleSignup}
                    switchModals={switchModals}
                    formData={formData}
                    setFormData={setFormData}
                />
            }
        </div>
    )
}
export default Login