import styled from 'styled-components'
import { colors } from './GlobalStyle';

export const FooterTag = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${colors.white};
    margin-top: 2rem;
    background-color: ${colors.color7};
`;

export const Rights = styled.div`
    .bold {
        text-transform: uppercase;
        font-weight: 600;
    }
`;

export const Fig = styled.figure`
    width: 75px;
    img {
        width: 100%;
        object-fit: contain;
        padding-top: 20px;
    }
`