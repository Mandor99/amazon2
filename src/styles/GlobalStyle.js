import { createGlobalStyle } from 'styled-components';

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
        height: 200vh; //test
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
`;
