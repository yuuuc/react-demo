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
	activeSon = (e, obj) => {
		this.choiceRecord = obj;
		const recordList = this.state.recordList.map((item) => {
			item.isChoice = false;
			if (item.id === obj.id) {
				item.isChoice = true;
			}
			return item;
		});
		this.setState({ recordList });
	};
	// 删除选中的字段
	delRecord(e) {
		if (this.choiceRecord == null) {
			return;
		}
		const recordList = this.state.recordList.filter((item) => {
			return item.id !== this.choiceRecord.id;
		});
		this.setState({ recordList });
	}

	getSonMessage = (e, msg) => {
		this.setState({ sonMessage: msg });
	};

	render() {
		const { recordList, sonMessage } = this.state;
		/* 使用三目运算进行条件渲染
      使用双&&进行条件渲染
    */
		return (
			<>
				<div>
					<span onClick={() => this.delRecord()}>delete</span>
				</div>
				<ul>
					{recordList == null ? null : (
						<Son recordList={recordList} activeSon={this.activeSon} />
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
