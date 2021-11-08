import styled from "styled-components";
import {media} from './GlobalStyle'


export const ProductsSection = styled.section`
    margin-top: -15%;
    z-index: 2;
    position: relative;

    ${media.mobile} {
        margin-top: -10%;
    }
`;

export const ProductsContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-flow: dense;
    gap: 1rem;

    ${media.mobile} {
        justify-items: center;
    }
`;

