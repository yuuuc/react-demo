import React from "react";
import throttle from "../../utils/throttle";
export default class ReactDemo02 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.throttle = throttle(() => {
			console.log(123);
		}, 1000);
	}

	render() {
		return (
			<>
				<div>react demo 02</div>
				<div>
					<button onClick={this.throttle}>节流</button>
				</div>
			</>
		);
	}
}
