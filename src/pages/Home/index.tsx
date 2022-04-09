import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import useGlobalContext from "../../hooks/useGlobalContext";

import {
	Section,
} from "../../components";

export const Home: React.FC = () => {
	const { auth } = useGlobalContext();
	const navigator = useNavigate();

	React.useEffect(() => {
		auth.checkIfUserIsLoggedIn(() => navigator("/login"))
	}, []);
	console.log(auth.currentUser?.user)
	return (
		<Flex
			background="url('home-background.svg')"
			bgRepeat="no-repeat"
			bgPosition="center"
			backgroundSize="cover"
			minH="100vh"
		>
			<Section
				mx="auto"
				maxW="1280px"
				currentUserName={auth.currentUser?.user.name || ""}
			>
			</Section>

		</Flex>
	);
};

export default Home;
