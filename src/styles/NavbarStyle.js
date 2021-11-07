import styled from 'styled-components';
import { colors, gaps } from './GlobalStyle';

export const Nav = styled.nav`
	height: 60px;
	background-color: ${colors.color1};
	color: ${colors.white};
	display: flex;
	align-items: center;
	gap: ${gaps.gap1};
	position: sticky;
	top: 0;
	z-index: 9999;
`;

export const Fig = styled.figure`
	width: 95px;
	margin: 5px 15px 0;
	height: 40px;
	.nav__logo {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}
`;
const radius = '5px';
export const Form = styled.form`
	background-color: ${colors.white};
	flex: 1 1;
	display: flex;
	border-radius: ${radius};

	.nav__search {
		border: none;
		width: 100%;
		border-radius: ${radius} 0px 0 ${radius};
		outline: none;
		width: 100%;
		padding: 10px 5px;
		font-size: 1rem;
		font-weight: 600;

		&--icon {
			background: ${colors.color2};
			border-radius: 0 ${radius} ${radius} 0px;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0.3rem;
			border: none;

			&-search {
				fill: ${colors.color3};
				font-size: 1.9rem;
				padding: 1px;
			}
		}
	}
`;

export const UserOptions = styled.div`
	display: flex;
	gap: ${gaps.gap1};
	color: ${colors.white};

	.user__cart {
		color: ${colors.white};
		display: flex;
		/* justify-content: center; */
		align-items: center;
		/* height: 100%; */
	}
`;

export const Option = styled.div`
	display: flex;
	flex-direction: column;
	text-transform: capitalize;
	cursor: pointer;

	.user__msg {
		font-size: 0.8rem;
	}

	.order__note {
		font-size: 0.8rem;
	}
`;

export const ItemsBasket = styled.div`
	display: flex;
	align-items: center;
	margin-right: 15px;
	gap: 5px;
	color: ${colors.white};

	.basket__icon {
		font-size: 1.9rem;
		fill: ${colors.white};
	}
	.basket__count {
		color: ${colors.white};
	}
`;
