import React from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const useGlobalContext = () => {
	const context = React.useContext(GlobalContext);

	if (!context) {
		throw new Error("Context was initialized");
	}

	return context;
};

export default useGlobalContext;
