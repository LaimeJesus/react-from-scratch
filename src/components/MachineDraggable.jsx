import React from 'react';

export default class MachineDraggable extends React.Component {
	render() {
		const imageStyle = {
			width: '100px',
			height: '100px',
			display: 'block'
		};
		const imageSource = 'https://banner2.kisspng.com/20180420/rrq/kisspng-pixel-art-sprite-2d-computer-graphics-futuristic-flyer-5ad9fdab517849.1216775615242356913337.jpg';

		return <img style={imageStyle} src={imageSource}/>;
	}
}
