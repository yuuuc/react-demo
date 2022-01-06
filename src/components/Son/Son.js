import React from "react";
import "./Son.css";

export default class Son extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { activeSon, sendMessagetoBro, recordList } = this.props;
		//在render方法中使用if进行条件判断
		if (this.props.recordList == null) {
			return null;
		}
		return (
			<>
				{recordList.map((item) => {
					return (
						<li
							key={item.id}
							className={item.isChoice ? "active" : " "}
							onClick={activeSon.bind(this, item)}
						>
							{item.text}
						</li>
					);
				})}
				<li onClick={sendMessagetoBro.bind(this, "hello this is message")}>
					send message to bro
				</li>
			</>
		);
	}
}
