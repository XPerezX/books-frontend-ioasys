import React from "react";
import useAuthenticate from "../hooks/useAuthenticate";

interface IGlobalContext {
	auth: ReturnType<typeof useAuthenticate>;
}

export const GlobalContext = React.createContext<IGlobalContext | null>(null);

const GlobalProvier: React.FC = (props) => {
	const { children } = props;
	const auth = useAuthenticate();

	return <GlobalContext.Provider value={{ auth }}>{children}</GlobalContext.Provider>;
};

export default GlobalProvier;
