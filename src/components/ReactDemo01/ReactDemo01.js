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
				<h1>react demo01 </h1>
				<ul>
					<li>react jsx 语法</li>
					<li>
						条件判断 三种 1. 在render 函数中写if 2. 在return 中写 三目运算 3.
						使用 && 进行判断，为真则返回后值{" "}
					</li>
					<li>
						通过props传递值或者回调函数，可以通过回调函数进行父子或兄弟组件之间的通信，注意如果要在回调函数中使用函数所在组件的this请使用
						函数名=箭头函数进行定义(此方法为实验性的语法)、另一种方法就是通过构造函数进行对
						方法进行 bind绑定this，各个组件之间也是如此
					</li>
					<li>
						react 复杂组件的三大属性 props state ref ,props
						负责组件之间的通信和传值或回调; state
						状态控制，会影响组件的重新渲染; ref 当前组件中被ref 对象修饰的
						对象，并可对其 dom 对象进行操作
					</li>
				</ul>
				<Parent />
			</>
		);
	}
}
