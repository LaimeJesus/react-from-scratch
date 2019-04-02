import React, {Component} from 'react';
import EmptyBlock from './EmptyBlock';
import MachineBlock from './MachineBlock';
import MachineDraggable from './MachineDraggable';

// const COLUMNS = [0, 1, 2, 3, 4, 5];

const ROWS0 = [
	{ id: 0, type: 'EmptyBlock'},
	{ id: 1, type: 'EmptyBlock'},
	{ id: 2, type: 'EmptyBlock'},
	{ id: 3, type: 'EmptyBlock'},
	{ id: 4, type: 'EmptyBlock'},
	{ id: 5, type: 'EmptyBlock'},
];
const ROWS1 = [
	{ id: 0, type: 'EmptyBlock'},
	{ id: 1, type: 'EmptyBlock'},
	{ id: 2, type: 'EmptyBlock'},
	{ id: 3, type: 'EmptyBlock'},
	{ id: 4, type: 'EmptyBlock'},
	{ id: 5, type: 'EmptyBlock'},
];
const ROWS2 = [
	{ id: 0, type: 'EmptyBlock'},
	{ id: 1, type: 'EmptyBlock'},
	{ id: 2, type: 'EmptyBlock'},
	{ id: 3, type: 'EmptyBlock'},
	{ id: 4, type: 'EmptyBlock'},
	{ id: 5, type: 'EmptyBlock'},
];
const ROWS3 = [
	{ id: 0, type: 'EmptyBlock'},
	{ id: 1, type: 'EmptyBlock'},
	{ id: 2, type: 'EmptyBlock'},
	{ id: 3, type: 'EmptyBlock'},
	{ id: 4, type: 'EmptyBlock'},
	{ id: 5, type: 'EmptyBlock'},
];
const ROWS4 = [
	{ id: 0, type: 'EmptyBlock'},
	{ id: 1, type: 'EmptyBlock'},
	{ id: 2, type: 'EmptyBlock'},
	{ id: 3, type: 'EmptyBlock'},
	{ id: 4, type: 'EmptyBlock'},
	{ id: 5, type: 'EmptyBlock'},
];
// const ROWS = [ROWS1, ROWS2, ROWS3];

const MACHINES = [{id: 0, type: 'MachineBlock'}];

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentTick: 0,
			ratio: 2000,
			interval: null,
			rows: {
				0: ROWS0,
				1: ROWS1,
				2: ROWS2,
				3: ROWS3,
				4: ROWS4,
			}
		};
	}

	// updateTick() {
	// 	let previousTick = this.state.currentTick;
	//
	// 	this.setState({currentTick: previousTick + 1});
	// }

	componentWillMount() {
		// const ratio = this.state.ratio;
		/*
        const interval = setInterval(() => {
            this.updateTick()
        }, ratio);

        this.setState({interval: interval});
*/
	}

	componentWillUnmount() {
		clearInterval(this.state.interval);
	}

	// onDragOver = (ev) => {
	//     console.log('dragging over');
	//     ev.preventDefault();
	// };

	onDrop = (block) => {
		// const elem = e.dataTransfer.getData("machine");
		// console.log(block);
		const rows = this.state.rows;

		if (rows[block.x][block.y].type === 'EmptyBlock') {
			rows[block.x][block.y] = {
				id: rows[block.x][block.y].id,
				type: 'MachineBlock'
			};

			this.setState({...this.state, rows});
			// alert(`are you sure you want to move ${block.machine.id} to ${block.x}-${block.y}`);
		}
	};

	onDragStart = (e, machine) => {
		const machineString = JSON.stringify(machine, undefined, 2);

		// console.log(`sending ${machine.id}`);
		e.dataTransfer.setData('machine', machineString);
	};

	render() {
		const tableStyling = {
			margin: '0px auto',
			padding: '10px',
			borderCollapse: 'collapse'
		};
		const {currentTick, rows} = this.state;
		const ROWS = Object.keys(rows);

		return (
			<section>
				<aside>
					<ul>
						{MACHINES.map(m => {
							if (m.type === 'MachineBlock') {
								return <li key={`${m.id}`} draggable onDragStart={(e) => this.onDragStart(e, m)}><MachineDraggable key={`${m.id}`}/></li>;
							}
							return <li key={`${m.id}`}><MachineDraggable key={`${m.id}`}/></li>;
						})}
					</ul>
				</aside>
				<main>
					<table style={tableStyling}>
						{/*<thead>*/}
						{/*{COLUMNS.map(column  => <th>{column }</th>)}*/}
						{/*</thead>*/}
						<tbody>
							{ROWS.map((row, xIndex) => {
								// return (<tr key={`${xIndex}`} onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => {this.onDrop(e, `${row}`)}}>
								return (<tr key={`${xIndex}`}>
									{
										this.state.rows[row].map((elem, yIndex) => {
											if (elem.type === 'MachineBlock') {
												return <MachineBlock key={`${xIndex}-${yIndex}`} x={xIndex} y={yIndex} tick={currentTick}/>;
											}
											return <EmptyBlock key={`${xIndex}-${yIndex}`} x={xIndex} y={yIndex} tick={currentTick} onDrop={this.onDrop}/>;
										})
									}
								</tr>);}
							)}
						</tbody>
					</table>
				</main>
			</section>
		);
	}
}

