import * as React from "react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => (
	<>
		<Text>Home</Text>
		<Link to="/login">go to login</Link>
	</>
);

export default Home;
