import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Routes, BrowserRouter, Route } from "react-router-dom";

import GlobalProvider from "../contexts/GlobalContext";

import Login from "./Login";
import Home from "./Home";

export const App: React.FC = () => (
	<ChakraProvider theme={theme}>
		<GlobalProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</GlobalProvider>
	</ChakraProvider>
);
