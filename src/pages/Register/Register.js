import React from 'react'
import "./Register.css"
import { FaUser } from "react-icons/fa"
import { IoMdLock } from "react-icons/io"
import { AiOutlineMessage } from "react-icons/ai"
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <div className='Login'>
            <img className='logo' src="/images/logo-2-dark.png" alt="" />
            <div className="container">
                <h4>Registration</h4>

                <form action="">
                    <div class="wrap-input100 validate-input">
                        <input type="email" placeholder="Login" class="input100 valid ng-dirty ng-valid ng-touched" />
                        <span class="symbol-input100">
                            <FaUser />
                        </span>
                    </div>
                    <div class="wrap-input100 validate-input">
                        <input type="text" placeholder="Jabber" class="input100 valid ng-dirty ng-valid ng-touched" />
                        <span class="symbol-input100">
                            <AiOutlineMessage />
                        </span>
                    </div>

                    <div class="wrap-input100 validate-input">
                        <input type="url" placeholder="Telegram" class="input100 valid ng-dirty ng-valid ng-touched" />
                        <span class="symbol-input100">
                            <FaUser />
                        </span>
                    </div>
                    <div class="wrap-input100 validate-input">
                        <input type="password" placeholder="Password" class="input100 valid ng-dirty ng-valid ng-touched" />
                        <span class="symbol-input100">
                            <IoMdLock />
                        </span>
                    </div>
                    <div class="wrap-input100 validate-input">
                        <input type="password" placeholder="Confirm Password" class="input100 valid ng-dirty ng-valid ng-touched" />
                        <span class="symbol-input100">
                            <IoMdLock />
                        </span>
                    </div>
                    <label class="custom-control custom-checkbox mt-4">
                        <input type="checkbox" class="custom-control-input ng-valid ng-dirty ng-touched" />
                        <span class="custom-control-label">
                            Agree the
                        </span>
                    </label>

                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn btn-primary login-button" disabled>Register </button>
                    </div>
                    <div class="text-center pt-3">
                        <p class="text-dark mb-0">Already have account?
                            <Link class="text-primary ml-1" to="/login">Sign In</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Register