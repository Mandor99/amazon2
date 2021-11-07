import React, {useState} from 'react'
import {Form, Fig, FormWrapper, InputWrapper, FormBtn, Input} from '../styles/FormStyle'
import LogoDark from '../images/amazon-logo.png'
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


function SignUp() {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const handleInput = (setter) => (e) => setter(e.target.value)

    const validatePasswords = () => {
        if(confirmPassword !== password ) {
            alert("passwords doesn't match")
            return false
        } else {
            return true
        }
    }

    const validateUsername = () => {
        if(username === '' ) {
            alert('username is required')
            return false
        }else{
            return true
        }
    }

        const handleSubmit = async (e) => {
        e.preventDefault()
        if(validatePasswords() === true && validateUsername() === true) {
            try {
                await createUserWithEmailAndPassword(auth, email, password)
                updateProfile(auth.currentUser, {
                    displayName: username
                })
                setUsername('')
                setEmail('')
                setPassword('')
                history.push('/')
            } catch(err) {
                alert(err.message)
            }
        } 
    }

    const redirectToLogIn = (e) => {
        e.preventDefault()
        history.push('/login')
    }

    return (
        <>
            <Fig>
                <Link to='/'><img src={LogoDark} alt="amazon logo" className='logo'/></Link>
            </Fig>
            <FormWrapper>
                <h3 className="form__title">create account</h3>
                <Form>
                    <InputWrapper>
                        <label className="form__label" htmlFor="username">Your username</label>
                        <Input value={username} onChange={handleInput(setUsername)} type="text" name="username" id="username" placeholder="your username" required maxLength="12" className="form__input" />
                    </InputWrapper>
                    <InputWrapper>
                        <label className="form__label" htmlFor="email">Your Email</label>
                        <Input value={email} onChange={handleInput(setEmail)} type="email" name="email" id="email" placeholder="your email like: xyz@gmail.com" required className="form__input" />
                    </InputWrapper>
                    <InputWrapper>
                        <label className="form__label" htmlFor="password">Your password</label>
                        <Input value={password} onChange={handleInput(setPassword)} type="password" name="password" id="password" placeholder="your password" required className="form__input" />
                    </InputWrapper>
                    <InputWrapper>
                        <label className="form__label" htmlFor="password">Your password</label>
                        <Input value={confirmPassword} onChange={handleInput(setConfirmPassword)} type="password" name="confirm_password" id="confirm_password" placeholder="re-enter your password" required className="form__input" />
                    </InputWrapper>
                    <FormBtn type="submit" onClick={handleSubmit}>sign up</FormBtn>
                    <small className="form__conditions">by signing-in you agree to amazon conditions of USE &amp; SAFE. please see our privacy notice. our cookies notice and our interest. based ADs notice</small>
                    <small className="form__new-user sm-width">already have an account!</small>
                    <Link to='/login'><FormBtn type="submit" onClick={redirectToLogIn}>log in</FormBtn></Link>
                </Form>
            </FormWrapper>
        </>
    )
}

export default SignUp
