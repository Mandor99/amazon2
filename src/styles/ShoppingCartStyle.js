import styled from 'styled-components'
import { colors, MainBtn, media } from './GlobalStyle';
import { Rating, ProductPrice } from './ProductStyle';


export const Main = styled.main`
    display: flex;
    gap: 1rem;

    ${media.mobile} {
        flex-direction: column;
    }
`;

export const Items = styled.section`
    flex: 1 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    ${media.mobile} {
        order: 1;
    }
`;

export const Ad = styled.figure`
    padding: 2rem 1rem;
    width: 100%;
    background-color: ${colors.white};

    .ad__img {
        width: 100%;
    }
`;

export const ItemProducts = styled.section`
    background-color: ${colors.white};
    padding: 2rem 1rem;

    .items__title {
        text-transform: capitalize;
        font-weight: bold;
        font-size: 1.5rem;
        
        &.add-border {
            border-bottom: 1px solid #ddd;
        }
    }

    ${media.mobile} {
        margin: 1rem;
    }
`;

export const Total = styled.section`
    height: max-content;
    flex: 1 1 30%;
    background-color: ${colors.white};
    padding: 1rem;
    display: flex;
    margin: 1rem;
    flex-direction: column;
    gap: .5rem;

    .total__title {
        text-transform: capitalize;

        ${media.tab} {
            font-size: .8rem;
        }
    }

    .total__gift {
        display: flex;
        align-items: center;
        gap: 8px;

        ${media.tab} {
            font-size: .6rem;
        }
    }

    .total__btn {
        text-transform: capitalize;

        ${media.tab} {
            font-size: .7rem;
        }
    }
`;

export const ProductDiv = styled.div`
    border: 1px solid #E7E7E7;
    margin-top: 12px;
    padding: 12px;
    display: flex;
    gap: 12px;
    /* align-items: center; */

    &:first-of-type {
        margin-top: 20px;
    }

    ${media.mobile} {
        flex-direction: column;
    }
`;

/* const figSize = '280px'; */
export const ProductImage = styled.figure`

    img {
        width: 280px;
        height: 200px;
        object-fit: contain;
        max-width: 100%;
    }

    ${media.mobile} {
        text-align: center;
    }
`;

export const ProductDetails = styled.div`

`;

export const ProductDesc = styled.p``

export const ProductRate = styled(Rating)`
    padding-left: 0;
    padding-right: 0;
`;
export const ProductCartPrice = styled(ProductPrice)`
    padding-left: 0;
    padding-right: 0;
`;

export const DeleteBtn = styled(MainBtn)`
    text-transform: capitalize;
    padding: 8px;
    margin-top: 40px;

    ${media.mobile} {
        width: 100%;
    }
`