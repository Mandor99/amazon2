import styled from 'styled-components'


export const Main = styled.main`
    display: flex;
    gap: 1rem
`;

export const Items = styled.section`
    flex: 1 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
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
    }

    .total__gift {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .total__btn {
        text-transform: capitalize;
    }

