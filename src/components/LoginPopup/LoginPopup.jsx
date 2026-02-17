import React, { useContext, useState, useEffect } from 'react'
import './LoginPopup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const LoginPopup = ({ setShowLogin }) => {
    const { setToken, url, loadCartData } = useContext(StoreContext)
    const [currState, setCurrState] = useState("Sign Up");
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [step, setStep] = useState(1); // 1: Enter email, 2: Enter OTP, 3: Reset password

    // Password visibility states
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [forgotPasswordData, setForgotPasswordData] = useState({
        email: "",
        otp: "",
        newPassword: "",
        confirmPassword: ""
    })

    const [timer, setTimer] = useState(0);
    const [otpSent, setOtpSent] = useState(false);

    // Timer for OTP expiry
    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const onForgotPasswordChange = (event) => {
        const { name, value } = event.target;
        setForgotPasswordData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (e) => {
        e.preventDefault()

        let new_url = url;
        if (currState === "Login") {
            new_url += "/api/user/login";
        }
        else {
            new_url += "/api/user/register"
        }
        
        try {
            const response = await axios.post(new_url, data);
            if (response.data.success) {
                setToken(response.data.token)
                localStorage.setItem("token", response.data.token)
                loadCartData({token: response.data.token})
                setShowLogin(false)
                toast.success(currState === "Login" ? "Login successful!" : "Account created successfully!")
            }
            else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!")
        }
    }

    // Step 1: Send OTP
    const handleSendOTP = async (e) => {
        e.preventDefault();
        
        if (!forgotPasswordData.email) {
            toast.error("Please enter your email");
            return;
        }

        try {
            const response = await axios.post(`${url}/api/user/forgot-password`, {
                email: forgotPasswordData.email
            });
            
            if (response.data.success) {
                toast.success("OTP sent to your email!");
                setOtpSent(true);
                setStep(2);
                setTimer(600); // 10 minutes timer
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Error sending OTP");
        }
    }

    // Step 2: Verify OTP
    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        
        if (!forgotPasswordData.otp || forgotPasswordData.otp.length !== 6) {
            toast.error("Please enter a valid 6-digit OTP");
            return;
        }

        try {
            const response = await axios.post(`${url}/api/user/verify-otp`, {
                email: forgotPasswordData.email,
                otp: forgotPasswordData.otp
            });
            
            if (response.data.success) {
                toast.success("OTP verified successfully!");
                setStep(3);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Invalid OTP");
        }
    }

    // Step 3: Reset Password
    const handleResetPassword = async (e) => {
        e.preventDefault();
        
        if (!forgotPasswordData.newPassword) {
            toast.error("Please enter new password");
            return;
        }
        
        if (forgotPasswordData.newPassword.length < 8) {
            toast.error("Password must be at least 8 characters");
            return;
        }
        
        if (forgotPasswordData.newPassword !== forgotPasswordData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post(`${url}/api/user/reset-password`, {
                email: forgotPasswordData.email,
                otp: forgotPasswordData.otp,
                password: forgotPasswordData.newPassword
            });
            
            if (response.data.success) {
                toast.success("Password reset successful! Please login with new password.");
                // Reset all states
                setForgotPasswordData({
                    email: "",
                    otp: "",
                    newPassword: "",
                    confirmPassword: ""
                });
                setShowForgotPassword(false);
                setStep(1);
                setCurrState("Login");
                setTimer(0);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Error resetting password");
        }
    }

    const handleBackToLogin = () => {
        setShowForgotPassword(false);
        setForgotPasswordData({
            email: "",
            otp: "",
            newPassword: "",
            confirmPassword: ""
        });
        setStep(1);
        setTimer(0);
    }

    const handleResendOTP = async () => {
        if (!forgotPasswordData.email) {
            toast.error("Email is required");
            return;
        }

        try {
            const response = await axios.post(`${url}/api/user/forgot-password`, {
                email: forgotPasswordData.email
            });
            
            if (response.data.success) {
                toast.success("New OTP sent!");
                setTimer(600); // Reset timer to 10 minutes
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Error resending OTP");
        }
    }

    return (
        <div className='login-popup'>
            {showForgotPassword ? (
                // Forgot/Reset Password Form with OTP
                <form onSubmit={
                    step === 1 ? handleSendOTP : 
                    step === 2 ? handleVerifyOTP : 
                    handleResetPassword
                } className="login-popup-container">
                    <div className="login-popup-title">
                        <h2>
                            {step === 1 && "Forgot Password"}
                            {step === 2 && "Verify OTP"}
                            {step === 3 && "Reset Password"}
                        </h2>
                        <FontAwesomeIcon 
                            icon={faTimes} 
                            onClick={() => {
                                handleBackToLogin();
                                setShowLogin(false);
                            }} 
                            className="close-icon"
                        />
                    </div>
                    
                    {step === 1 && (
                        // Step 1: Enter email
                        <>
                            <div className="login-popup-inputs">
                                <input 
                                    name="email" 
                                    onChange={onForgotPasswordChange} 
                                    value={forgotPasswordData.email} 
                                    type="email" 
                                    placeholder="Enter your registered email" 
                                    required 
                                />
                            </div>
                            <button type="submit">Send OTP</button>
                            <p style={{fontSize: '12px', textAlign: 'center'}}>
                                A 6-digit OTP will be sent to your email. Valid for 10 minutes.
                            </p>
                            <div className="forgot-password-navigation">
                                <p>Remember your password? <span onClick={handleBackToLogin}>Login here</span></p>
                                <p>Don't have an account? <span onClick={() => {
                                    handleBackToLogin();
                                    setCurrState("Sign Up");
                                }}>Sign up here</span></p>
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        // Step 2: Enter OTP
                        <>
                            <div className="otp-info">
                                <p>OTP sent to: <strong>{forgotPasswordData.email}</strong></p>
                                {timer > 0 ? (
                                    <p className="timer">Expires in: {formatTime(timer)}</p>
                                ) : (
                                    <p className="timer-expired">OTP expired</p>
                                )}
                            </div>
                            <div className="login-popup-inputs">
                                <input 
                                    name="otp" 
                                    onChange={onForgotPasswordChange} 
                                    value={forgotPasswordData.otp} 
                                    type="text" 
                                    placeholder="Enter 6-digit OTP" 
                                    required 
                                    maxLength="6"
                                    pattern="\d{6}"
                                    inputMode="numeric"
                                />
                            </div>
                            <button type="submit">Verify OTP</button>
                            <div className="otp-actions">
                                <p>Didn't receive OTP? <span onClick={handleResendOTP}>Resend OTP</span></p>
                                <p>Change email? <span onClick={() => setStep(1)}>Go back</span></p>
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        // Step 3: Reset Password
                        <>
                            <div className="login-popup-inputs">
                                <div className="password-input-wrapper">
                                    <input 
                                        name="newPassword" 
                                        onChange={onForgotPasswordChange} 
                                        value={forgotPasswordData.newPassword} 
                                        type={showNewPassword ? "text" : "password"} 
                                        placeholder="Enter new password (min 8 characters)" 
                                        required 
                                        minLength="8"
                                    />
                                    <span 
                                        className="password-toggle-icon"
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                    >
                                        <FontAwesomeIcon icon={showNewPassword ? faEyeSlash : faEye} />
                                    </span>
                                </div>
                                <div className="password-input-wrapper">
                                    <input 
                                        name="confirmPassword" 
                                        onChange={onForgotPasswordChange} 
                                        value={forgotPasswordData.confirmPassword} 
                                        type={showConfirmNewPassword ? "text" : "password"} 
                                        placeholder="Confirm new password" 
                                        required 
                                        minLength="8"
                                    />
                                    <span 
                                        className="password-toggle-icon"
                                        onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                                    >
                                        <FontAwesomeIcon icon={showConfirmNewPassword ? faEyeSlash : faEye} />
                                    </span>
                                </div>
                            </div>
                            <button type="submit">Reset Password</button>
                            <div className="forgot-password-navigation">
                                <p>Back to <span onClick={handleBackToLogin}>Login</span></p>
                            </div>
                        </>
                    )}
                </form>
            ) : (
                // Login/Signup Form
                <form onSubmit={onLogin} className="login-popup-container">
                    <div className="login-popup-title">
                        <h2>{currState}</h2> 
                        <FontAwesomeIcon 
                            icon={faTimes} 
                            onClick={() => setShowLogin(false)} 
                            className="close-icon"
                        />
                    </div>
                    <div className="login-popup-inputs">
                        {currState === "Sign Up" ? 
                            <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required /> 
                            : <></>
                        }
                        <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
                        
                        {/* Password Field with Toggle */}
                        <div className="password-input-wrapper">
                            <input 
                                name='password' 
                                onChange={onChangeHandler} 
                                value={data.password} 
                                type={showPassword ? "text" : "password"} 
                                placeholder='Password' 
                                required 
                            />
                            <span 
                                className="password-toggle-icon"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>
                    </div>
                    
                    {currState === "Login" && (
                        <p className="forgot-password-link">
                            Forgot password? <span onClick={() => setShowForgotPassword(true)}>Click here</span>
                        </p>
                    )}
                    
                    <button type="submit">{currState === "Login" ? "Login" : "Create account"}</button>
                    
                    <div className="login-popup-condition">
                        <input type="checkbox" name="" id="" required />
                        <p>By continuing, I agree to the terms of use & privacy policy.</p>
                    </div>
                    
                    {currState === "Login"
                        ? <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
                        : <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
                    }
                </form>
            )}
        </div>
    )
}

export default LoginPopup