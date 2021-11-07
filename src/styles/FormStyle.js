import styled from 'styled-components'
import { colors } from './GlobalStyle';

export const Fig = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    /* margin-bottom: 20px; */

    .logo {
        width: 250px;
        height: 120px;
        object-fit: cover;
    }
`;

export const FormWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    min-height: 65vh;
    width: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${colors.white};
    box-shadow: 0 5px 5px rgb(0 0 0 / 20%);
    border-radius: 5px;
    padding: 20px 26px;
    border: 1px solid #ddd;

    .form__title {
        width: 100%;
        text-transform: capitalize;
        font-size: 2rem;
        margin-bottom: 15px;
    }
`;

export const Form = styled.form`
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;

        .form__new-user {
            color: #767676;
            text-align: center;
            position: relative;
            text-transform: capitalize;

            &::before, &::after {
                content: '';
                width: 30%;
                height: 1.5px;
                position: absolute;
                top: 50%;
                background-color: #ddd;
            }

            &::before {
                right: 0
            }

            &::after {
                left: 0;
            }

            &.sm-width {
                &::before, &::after {
                    width: 20%;
                }
            }
        }
`;

export const InputWrapper = styled.div`
        display: flex;
        flex-direction: column;
        gap: 5px;

        .form__label {
            font-size: .8rem;
            text-transform: capitalize;
        }
`;

export const Input = styled.input`
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 5px;
        outline: none;
        font-size: 1rem;
`;

export const FormBtn = styled.button`
        background: linear-gradient(to bottom,#f7dfa5,#f0c14b);
        width: 100%;
        outline: none;
        border: 0;
        padding: 5px;
        border-radius: 5px;
        font-size: 1rem;
        border: 1px solid;
        border-color: #a88734 #9c7e31 #846a29;
        box-shadow: 0 1px 0 rgb(255 255 255 / 40%) inset;
        cursor: pointer;
        text-transform: capitalize;
`;