import styled from 'styled-components';

export const HeaderTag = styled.header``;

export const Helper = styled.div`
	.carousel.carousel-slider .control-arrow {
		height: 50%;
	}
	.carousel .control-arrow:before,
	.carousel.carousel-slider .control-arrow:before {
		border-top: 30px solid transparent;
		border-bottom: 30px solid transparent;
	}
	.carousel .control-arrow:before,
	.carousel.carousel-slider .control-arrow:before {
		border-top: 30px solid transparent;
		border-bottom: 30px solid transparent;
	}
	.carousel .control-next.control-arrow:before {
		border-left: 30px solid #fff;
	}
	.carousel .control-prev.control-arrow:before {
		border-right: 30px solid #fff;
	}
	.header__img {
		mask-image: linear-gradient(180deg, #000, transparent);
	}
`;
