import styled from 'styled-components'

export const Title = styled.h2`
    background-color: #fff;
    padding: 1rem;
    font-size: 2rem;
    margin-bottom: 10px;
`;

export const OrderStyle = styled.main`
    &:not(:last-child) {
        margin-bottom: 1rem;
    }

    & .order__total {
        display: block;
        text-align: end;
        padding: 0 12px;
        font-size: 1.3rem;
        font-weight: 500;
        margin-top: 1.5rem;
    }
`;

export const AllOrdersStyles = styled.main`
`