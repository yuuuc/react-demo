import React from "react";
import Son from "../Son/Son";
import Bro from "../Bro/Bro";

export default class Parent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recordList: [
				{ id: 1, text: "apple", isChoice: false },
				{ id: 2, text: "banana", isChoice: false },
				{ id: 3, text: "orange", isChoice: false },
			],
			sonMessage: "",
		};

		// 给事件回调函数绑定this
		this.activeSon = this.activeSon.bind(this);
		this.delRecord = this.delRecord.bind(this);
		this.getSonMessage = this.getSonMessage.bind(this);
	}

	componentDidCatch(error, errorInfo) {
		// console.log("didcatch");
		console.log(error);
		console.log(errorInfo);
		console.log("异常处理");
	}

	componentDidMount() {
		console.log("mounted");
	}

	componentDidUpdate() {
		console.log("update");
	}

	componentWillUnmount() {
		console.log("unmounted");
	}

	//选中的对象
	choiceRecord = null;

	//给子元素传递回调函数，返回要操作的值
	//obj 为传递参数  o 为触发者的元素或者事件
	activeSon(obj, o) {
		this.choiceRecord = obj;
		console.log(o);
		const recordList = this.state.recordList.map((item) => {
			item.isChoice = false;
			if (item.id === obj.id) {
				item.isChoice = true;
			}
			return item;
		});
		console.log(recordList);
		this.setState({ recordList });
	}
	// 删除选中的字段
	delRecord() {
		if (this.choiceRecord == null) {
			return;
		}
		const recordList = this.state.recordList.filter((item) => {
			return item.id !== this.choiceRecord.id;
		});
		this.setState({ recordList });
	}

	getSonMessage(msg) {
		this.setState({ sonMessage: msg });
	}

	render() {
		const { recordList, sonMessage } = this.state;
		/* 使用三目运算进行条件渲染
      使用双&&进行条件渲染
    */
		return (
			<>
				<div>
					<span onClick={this.delRecord.bind(this)}>delete</span>
				</div>
				<ul>
					{recordList == null ? null : (
						<Son
							recordList={recordList}
							activeSon={this.activeSon}
							sendMessagetoBro={this.getSonMessage}
						/>
					)}
					{recordList.length > 0 && (
						<Son
							recordList={recordList}
							activeSon={this.activeSon}
							sendMessagetoBro={this.getSonMessage}
						/>
					)}
				</ul>

				<Bro sonMessage={sonMessage} />
			</>
		);
	}
}
