import React from 'react'
import API from "../api/API"
const api = new API()

const LoginModal = ({ handleLogin, switchModals, formData, setFormData }) => {
    const testAPI = async () => {
        await api.test()
    }
    return (
        <div>
            <div className="container mt-5">
                <h2> Sign in </h2>
                <form className="form d-flex flex-column justify-content-center gap-2" method="POST">
                    <label className="form-label" htmlFor="user"> Username </label>
                    <input className="form-control" id="user" name="user" value={formData.username} placeholder="Enter your username" onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))} />
                    <label className="form-label" htmlFor="pass"> Password </label>
                    <input type="password" className="form-control" id="pass" name="pass" value={formData.password} placeholder="Enter your password" onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))} />
                    <div className="nav gap-3">
                        <input type="submit" className="btn btn-dark" value="Sign in" onClick={(e) => handleLogin(e, formData)} />
                        <button className="btn btn-dark" onClick={() => switchModals("Signup")}> Sign up </button>
                    </div>
                </form>
                <button className="btn btn-dark" onClick={() => testAPI()}> Test API</button>
            </div>
        </div>
    )
}

export default LoginModal