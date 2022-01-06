import React from "react";

export default class Bro extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.textInput = React.createRef();

		//bind methods
		this.refEventTest = this.refEventTest.bind(this);
	}

	refEventTest() {
		console.log(this.textInput);
		// { current:'element' } 获取到当前ref dom 的对象，可以对这个对象进行一系列dom 操作
		this.textInput.current.focus();
	}

	render() {
		const { sonMessage } = this.props;
		if (sonMessage === "") {
			return null;
		}
		return (
			<>
				<div onClick={this.refEventTest.bind(this)}>{sonMessage}</div>
				<div>
					<input type="text" ref={this.textInput} />
				</div>
			</>
		);
	}
}
