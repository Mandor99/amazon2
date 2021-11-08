import styled from 'styled-components';
import {media} from './GlobalStyle'

export const HeaderTag = styled.header``;

export const Helper = styled.div`
	.carousel.carousel-slider .control-arrow {
		height: 50%;

		${media.mobile} {
			height: 40%;
		}
	}
	.carousel .control-arrow:before,
	.carousel.carousel-slider .control-arrow:before {
		border-top: 30px solid transparent;
		border-bottom: 30px solid transparent;

		${media.mobile} {
			border-top: 15px solid transparent;
			border-bottom: 15px solid transparent;
		}
	}
	.carousel .control-arrow:before,
	.carousel.carousel-slider .control-arrow:before {
		border-top: 30px solid transparent;
		border-bottom: 30px solid transparent;

		${media.mobile} {
			border-top: 15px solid transparent;
			border-bottom: 15px solid transparent;
		}
	}
	.carousel .control-next.control-arrow:before {
		border-left: 30px solid #fff;

		${media.mobile} {
			border-left: 15px solid #fff;
		}
	}
	.carousel .control-prev.control-arrow:before {
		border-right: 30px solid #fff;

		${media.mobile} {
		border-right: 15px solid #fff;

		}
	}
	.header__img {
		mask-image: linear-gradient(180deg, #000, transparent);
	}
`;
