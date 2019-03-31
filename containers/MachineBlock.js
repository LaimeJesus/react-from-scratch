import React from "react";

export default class MachineBlock extends React.Component {
    constructor(props) {
        //  x position, y position
        super(props);
    }

    // componentWillUpdate()

    render() {
        const blockStyle = {
            // borderStyle: 'solid',
            // padding: '15px'
        };
        const imageStyle = {
            width: '100px',
            height: '100px',
            display: 'block'
        };
        const {x: xPosition, y: yPosition, tick} = this.props;
        const imageSource = "https://banner2.kisspng.com/20180420/rrq/kisspng-pixel-art-sprite-2d-computer-graphics-futuristic-flyer-5ad9fdab517849.1216775615242356913337.jpg";

        return (
            <td style={blockStyle}>
                {/*<h5>EmptyBlock: {xPosition}-{yPosition} t: {tick}</h5>*/}
                <img style={imageStyle} src={imageSource}></img>
            </td>
        );
    }
}
