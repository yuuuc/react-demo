import React from "react";

export default class Bro extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { sonMessage } = this.props;
		if (sonMessage === "") {
			return null;
		}
		return (
			<>
				<div>{sonMessage}</div>
			</>
		);
	}
}
