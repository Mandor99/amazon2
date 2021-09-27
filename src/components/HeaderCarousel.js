// import React from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';

// function HeaderCarousel() {
// 	return (
// 		<div>
// 			<Carousel>
// 				<div>
// 					<img
// 						src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'
// 						alt='offer img'
// 					/>
// 					{/* <p className="legend">Legend 1</p> */}
// 				</div>
// 				<div>
// 					<img
// 						src='https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg'
// 						alt='offer img'
// 					/>
// 					{/* <p className="legend">Legend 2</p> */}
// 				</div>
// 				0{' '}
// 				<div>
// 					<img
// 						src='https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg'
// 						alt='offer img'
// 					/>
// 					<p className='legend'>Legend 3</p>
// 				</div>
// 			</Carousel>
// 		</div>
// 	);
// }

// export default HeaderCarousel;

import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Helper } from '../styles/HeaderStyle';

class HeaderCarousel extends Component {
	render() {
		return (
			<Helper>
				<Carousel
					showThumbs={false}
					showStatus={false}
					showIndicators={false}
					emulateTouch={true}
					infiniteLoop={true}
					autoPlay
					interval={5000}
				>
					<div>
						<img
							className='header__img'
							src='https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'
							alt='offers'
						/>
					</div>
					<div>
						<img
							className='header__img'
							src='https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg'
							alt='offers'
						/>
					</div>
					<div>
						<img
							className='header__img'
							src='https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg'
							alt='offers'
						/>
					</div>
				</Carousel>
			</Helper>
		);
	}
}

export default HeaderCarousel;
