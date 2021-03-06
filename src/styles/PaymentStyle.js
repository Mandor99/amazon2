import styled from 'styled-components'
import {MainBtn, media} from './GlobalStyle'

export const Section = styled.section``;

export const StripeForm = styled.form`
    margin-top: 20px;
    padding: 12px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;

    ${media.mobile} {
        width: 100%;
    }
`;

export const ErrorMsg = styled.p`
    color: red;
    margin: 10px;
`;

export const PayBox = styled.div`
    border: 1px solid #ddd;
    margin-top: 25px;
    padding: 30px;
    display: flex;
    flex-direction: column;
`;

export const PayBtn = styled(MainBtn)``;

export const TotalPrice = styled.h3`
    font-size: 1.3rem;

    ${media.mobile} {
        font-size: 1.2rem;
    }

    ${media.mobileSm} {
        font-size: 1.1rem;
    }
`;