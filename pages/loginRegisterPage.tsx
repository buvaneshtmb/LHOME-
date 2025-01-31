import React from 'react';
import leftvector from './components/loginRegister/leftvector.png';
import rightvector from './components/loginRegister/rightvector.png';
import Image from 'next/image';
import css from '../styles/loginRegister.module.scss';
import ReactFlagsSelect from "react-flags-select";
import { TbReload } from "react-icons/tb";
function LoginRegisterPage() {

    const [showLogin, setShowLogin] = React.useState(true);
    const [isChecked, setIsChecked] = React.useState<boolean>(false);

    const [select, setSelect] = React.useState("IN");
    const onSelect = (code) => setSelect(code)

    const toggleForm = () => {
        setShowLogin(!showLogin);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const [otpForm, setOtpForm] = React.useState(true);
    const handleClick = () =>{
        setOtpForm(!otpForm);
    }

    return (
        <>

            <div className={css.formLR}>
                <div className={css.loginLeftImage}>
                    <div className={css.emptybubble}></div>
                    <Image src={leftvector} alt='leftvector' className={css.Left_vector} />
                </div>
                {showLogin ? (<div className={css.formsofmodel}>

                    <form className={css.form_content}>
                    {otpForm ?
                        (<div className={css.mainContent}>
                            <h2>Login</h2>
                            <p>Enter your register mobile number</p>
                            <div className={css.inputAndbtn}>
                                <div className={css.dropdown_login_icon}>
                                    <ReactFlagsSelect
                                        selected={select}
                                        onSelect={onSelect}
                                        fullWidth={false}
                                        countries={["", "IN", "fi", "GB", "IE", "IT", "NL", "SE"]}
                                        className={css.number_dropdown}
                                    />
                                </div>

                                <input type='number' inputMode='text' className={css.LRInput} placeholder='00000 00000' />
                                <button className={css.LoginButton} onClick={handleClick}>LOGIN</button>
                            </div>
                            <p>Or Login With</p>
                            <div className={css.mainVal}>
                                <Image src={require("../public/assets/icons/Gicon.png")} className={css.G_icon} alt='g_icon' />
                            </div>
                            <p style={{marginTop:'unset'}}>First time user? <span className={css.signupbtn} onClick={toggleForm} style={{ fontWeight: 'bold', cursor: 'pointer' }}>Sign up</span> here</p>   
                        </div>)
                         : (<div>
                            <div className={css.Otp_heading}>Verify your number</div>
                            <div className={css.otp_Box}>
                                <p className={css.otp_box_content} style={{padding:0}}>Phone Number: 6379649524</p>
                                <p className={css.otp_box_content}>One Time Password</p>
                                <input type='text' className={css.otp_input} placeholder='Enter OTP'/>
                                <p className={css.otp_box_content}>Your OTP will expire in <span style={{color:'#F44336'}}> 00.10</span></p>
                                <button className={css.otp_button}>Submit</button><br/>
                                <button className={css.otp_resend_button}><TbReload /> Resend</button>
                            </div>
                            <div className={css.otp_Verify_content}>We have sent OTP to your number, please verify</div>
                            </div>
                         )} 
                    </form>
                </div>) :
                    (
                        <div className={css.formsofmodel}>

                            <form className={css.form_content}>
                                <div className={css.mainContent}>
                                    <h2>Sign Up</h2>
                                    <div>
                                        <input type='text' className={css.SInput1} placeholder='Enter your name' />
                                        <div className={css.InputContainer}>
                                            <div className={css.dropdown_icon}>
                                                <ReactFlagsSelect
                                                    selected={select}
                                                    onSelect={onSelect}
                                                    fullWidth={false}
                                                    countries={["", "IN", "fi", "GB", "IE", "IT", "NL", "SE"]}
                                                    className={css.number_dropdown}
                                                />
                                            </div>
                                            <input type='number' className={css.SInput2} placeholder='00000 00000' />
                                        </div>
                                        <div className={css.whatsapplabel}>
                                            <div className='w-full flex flex-col justify-center items-right pe-2'>
                                                <span className={css.label1}>you can reach me on whatsApp</span>
                                                <span className={css.label2}>opt for meeting and offer updates on WhatsApp</span>
                                            </div>
                                            <div className={css.whatsappcheckbox}>
                                                <input type="checkbox" className={css.SInput3} checked={isChecked} onChange={handleCheckboxChange} id="customCheckbox" />
                                                <label htmlFor="customCheckbox" className={css.checkmark}></label>
                                            </div>
                                        </div>
                                        <input type='text' className={css.SInput1} placeholder='Enter your email' />
                                        <input type='text' className={css.SInput0} placeholder='Enter your current residence pincode' />

                                        <button className={css.SignButton}>REGISTER</button>
                                    </div>
                                    <p>Or Login With</p>
                                    <div className={css.mainVal}>
                                        <Image src={require("../public/assets/icons/Gicon.png")} className={css.G_icon} alt='g_icon' />
                                    </div>
                                    <p style={{marginTop:'unset'}}>First time user? <span onClick={toggleForm} style={{ fontWeight: 'bold', cursor: 'pointer' }}>Log in </span> here</p>
                                </div>
                            </form>
                        </div>
                    )}

            </div>
        </>
    )
}

export default LoginRegisterPage;