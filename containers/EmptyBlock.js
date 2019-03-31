import React from "react";

export default class EmptyBlock extends React.Component {
    constructor(props) {
        //  x position, y position
        super(props);
    }

    // componentWillUpdate()

    onDragOver = (e) => {
        e.preventDefault();
    };

    onDrop = (e) => {
        const machineString = e.dataTransfer.getData("machine");
        const machine = JSON.parse(machineString);

        console.log('on dropping block ' + this.props.x + ' ' + this.props.y);
        console.log(machine);
        if (machine.type === 'MachineBlock') {
            const currentBlock = {
                x: this.props.x,
                y: this.props.y,
                machine
            };
            this.props.onDrop(currentBlock);
        }
    };

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
        const imageSource = "http://xoxlabs.com/x/unity/2D_Mario_Clone/2D%20Mario%20Clone/Assets/2D%20Mario%20Assets/Textures/tile_brick_1_breakable.png";

        return (
            <td style={blockStyle} onDragOver={this.onDragOver} onDrop={(e) => this.onDrop(e, "machine")}>
                {/*<h5>EmptyBlock: {xPosition}-{yPosition} t: {tick}</h5>*/}
                <img style={imageStyle} src={imageSource}></img>
            </td>
        );
    }
}
