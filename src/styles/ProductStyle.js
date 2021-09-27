import styled from 'styled-components'
import { colors, MainBtn } from './GlobalStyle'

export const CartProduct = styled.section`
    background-color: ${colors.white};
    border-radius: 5px;
    max-width: 400px;
    padding: 20px 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

export const ProductImg = styled.figure`
    padding: 10px;

    .product-img {
        width: 100%;
        height: 200px;
        object-fit: contain;
    }
`;

export const Desc = styled.p`
    display: -webkit-box;
    overflow: hidden;
	-webkit-line-clamp: 3; //one line
	-webkit-box-orient: vertical;
    max-height: 172.8px;
    padding-right: 10px;
    padding-left: 10px;
`;

export const Rating = styled.p`
    cursor: pointer;
    margin-top: 5px;
    padding-left: 8px;
    padding-right: 8px;
    display: flex;
    /* gap: 2px; */

    span {
        color: ${colors.white};

        &.gold {
            color: ${colors.color5};
        }
    }

    .rateIcon {
        font-size: 1.3rem;
    }
`;

export const ProductPrice = styled.p`
    margin-top: 8px;
    padding-left: 10px;
    padding-right: 10px;

    & .price {
        font-size: 21px;
    }

    & .dot {
        opacity: 0;
        position: absolute;
    }
    & .decimal, & .sign {
        position: relative;
        top: -.5em;
        font-size: 12px;
    }
`;

export const CartBtn = styled(MainBtn)`

`;