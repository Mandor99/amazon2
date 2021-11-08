import styled, { createGlobalStyle } from 'styled-components';

export const colors = {
	color1: '#131921',
	color2: '#febd69',
	color3: '#011',
    color4: '#0F1111',
    color5: '#f7a330',
    color6: '#e17d2c',
    color7: '#232f3e',
	white: '#fff',

};

export const gaps = {
	gap1: '1rem',
};

export const bp = {
	mobileSm: '370px',
	mobile: '570px',
	tab: '768px',
	lap: '992px',
	desk: '1200px',
};

export const media = {
	mobileSm: `@media only screen and (max-width: ${bp.mobileSm})`,
	mobile: `@media only screen and (max-width: ${bp.mobile})`,
	tab: `@media only screen and (max-width: ${bp.tab})`,
	lap: `@media only screen and (max-width: ${bp.lap})`,
	desk: `@media only screen and (max-width: ${bp.desk})`,
	// bigDesk: `@media only screen and (min-width: ${bp.desk})`,
};

export const Container = styled.div`
	width: 90%;
	margin-left: auto;
	margin-right: auto;
	max-width: 1700px;
`;
export const GlobalStyle = createGlobalStyle`
    *, *::before, *:after {
        padding: 0;
        margin: 0;
        box-sizing: inherit
    }
    html, body {
        box-sizing: border-box
    }
    html {
        font-size: 100%;
    }
    body {
        /* height: 200vh; //test */
        overflow-x: hidden;
        line-height: 1.5;
        color: ${colors.color4};
        background-color: rgb(234, 237, 237);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    }
    li {
		list-style: none;
	}
	a {
		text-decoration: none;
	}

    .App {
        overflow-x: hidden;
    }
`;

export const UnderNav = styled.div`
    margin-top: 60px;
`;

export const MainBtn = styled.button`
    margin-top: 12px;
    border-radius: 3px;
    cursor: pointer;
    text-transform: uppercase;
    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
    background-color: #FFA41C;
    border: 1px solid #FF8F00;
    padding: 10px;
    outline: none;
    font-size: 1rem;
    font-weight: 500;

    &:hover {
        background: #FA8900;
        border-color: #E3931E;
    }
`;