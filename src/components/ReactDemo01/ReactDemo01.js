import React from "react";
import Parent from "../Parent/Parent";

export default class ReactDemo01 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<>
				<div>react demo01 </div>
				<ul>
					<li>react jsx 语法</li>
					<li>
						条件判断 三种 1. 在render 函数中写if 2. 在return 中写 三目运算 3.
						使用 && 进行判断，为真则返回后值{" "}
					</li>
					<li></li>
				</ul>
				<Parent />
			</>
		);
	}
}
