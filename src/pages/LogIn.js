import React, {useState} from 'react'
import {Form, Fig, FormWrapper, InputWrapper, FormBtn, Input} from '../styles/FormStyle'
import LogoDark from '../images/amazon-logo.png'
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";

function LogIn() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleInput = (setter) => (e) => setter(e.target.value)
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(email, password)
        try{
            await signInWithEmailAndPassword(auth, email, password)
            setEmail('')
            setPassword('')
            history.push('/')
        } catch (err) {
            alert(err.message)
        }
    }
    const redirectToSignUp = (e) => {
        e.preventDefault()
        history.push('/signup')
    }
    return (
        <>
            <Fig>
                <Link to='/'><img src={LogoDark} alt="amazon logo" className='logo'/></Link>
            </Fig>
            <FormWrapper>
                <h3 className="form__title">sign in</h3>
                <Form>
                    <InputWrapper>
                        <label className="form__label" htmlFor="email">Your Email</label>
                        <Input type="email" name="email" id="email" placeholder="your email like: xyz@gmail.com" required className="form__input" value={email} onChange={handleInput(setEmail)} />
                    </InputWrapper>
                    <InputWrapper>
                        <label className="form__label" htmlFor="password">Your password</label>
                        <Input type="password" name="password" id="password" placeholder="your password" required className="form__input" value={password} onChange={handleInput(setPassword)}/>
                    </InputWrapper>
                    <FormBtn type="submit" onClick={handleSubmit}>sign in</FormBtn>
                    <small className="form__conditions">by signing-in you agree to amazon conditions of USE &amp; SAFE. please see our privacy notice. our cookies notice and our interest. based ADs notice</small>
                    <small className="form__new-user">new to amazon?</small>
                    <Link to='/signup'><FormBtn type="submit" onClick={redirectToSignUp}>create your amazon account</FormBtn></Link>
                </Form>
            </FormWrapper>
        </>
    )
}

export default LogIn
