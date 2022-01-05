import React from "react";
import ReactDemo01 from "./components/ReactDemo01/ReactDemo01";
import ReactDemo02 from "./components/ReactDemo02/ReactDemo02";

import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";

const Home = <div>hello,home</div>;
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	reactDemoList = [
		{ id: 1, to: "/reactDemo01", text: "componentSendData" },
		{ id: 2, to: "/reactDemo02", text: "reactDemo02" },
	];

	render() {
		return (
			<>
				<h1>hello world!</h1>
				<div className="container">
					<Router>
						<div className="left">
							<ul>
								{this.reactDemoList.map((item) => {
									return (
										<li key={item.id}>
											<Link to={item.to}>{item.text}</Link>
										</li>
									);
								})}
							</ul>
						</div>
						<div className="right">
							<Routes>
								<Route path="/reactDemo01" element={<ReactDemo01 />} />
								<Route path="/reactDemo02" element={<ReactDemo02 />} />
								<Route path="/" element={Home} />
							</Routes>
						</div>
					</Router>
				</div>
			</>
		);
	}
}
