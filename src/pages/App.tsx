import * as React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";


import Login from "./Login";
import Home from "./Home";

export const App: React.FC = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>	
	)
};
