import React from 'react'

const SignUpModal = ({ handleSignup, switchModals, formData, setFormData }) => {
    return (
        <div>
            <div className="container mt-5">
                <h2> Sign up </h2>
                <form className="form d-flex flex-column justify-content-center gap-2" method="POST">
                    <label className="form-label" htmlFor="user"> Username </label>
                    <input className="form-control" id="user" name="user" value={formData.username} placeholder="Enter your username" onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))} />
                    <label className="form-label" htmlFor="pass"> Password </label>
                    <input type="password" className="form-control" id="pass" name="pass" value={formData.password} placeholder="Enter your password" onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))} />
                    <small className="form-text"> Password must be at least 8 characters long and include at least one special character and a number. </small>
                    <div className="nav gap-3">
                        <input type="submit" className="btn btn-dark" value="Sign up" onClick={(e) => handleSignup(e, formData)} />
                        <button className="btn btn-dark" onClick={() => switchModals('Login')}> Login </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUpModal