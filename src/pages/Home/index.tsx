import * as React from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import useGlobalContext from "../../hooks/useGlobalContext";

export const Home: React.FC = () => {
	const { auth } = useGlobalContext();

	return (
		<>
			<Text>Home {auth.email}</Text>
			<Link to="/login">go to login</Link>
		</>
	);
};

export default Home;
