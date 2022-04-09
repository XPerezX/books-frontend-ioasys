import * as React from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import useGlobalContext from "../../hooks/useGlobalContext";
import useHome from "../../hooks/useHome";

import {
	Section,
} from "../../components";

export const Home: React.FC = () => {
	const { auth } = useGlobalContext();
	const navigator = useNavigate();
	const home = useHome();

	React.useEffect(() => {
		auth.checkIfUserIsLoggedIn(() => navigator("/login"))
	}, []);

	if (auth.isLoading || !auth.currentUser) {
		return <Spinner alignSelf="center" />
	}

	return (
		<Flex
			background="url('home-background.svg')"
			bgRepeat="no-repeat"
			bgPosition="center"
			backgroundSize="cover"
			minH="100vh"
		>
			<Section
				mx={{ base: 4, sm: 10, lg: "auto"}}
				maxW="1280px"
				currentUserName={auth.currentUser?.user.name || ""}
			>
			</Section>

		</Flex>
	);
};

export default Home;
