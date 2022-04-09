import * as React from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { LoginForm } from "../../components";

import useGlobalContext from "../../hooks/useGlobalContext";

const Login: React.FC = () => {
	const { auth } = useGlobalContext();
	const navigator = useNavigate();
	const { isOpen, onClose, onOpen } = useDisclosure();

	const onSignIn = () => {
		const success = () => navigator("/");
		auth.login(success, onOpen)
	};

	return (
		<Flex
			bgImage="url('/Background-Image.svg')"
			bgRepeat="no-repeat"
			bgPosition="center"
			backgroundSize="cover"
			minH="100vh"
		>

			<LoginForm
				authHook={auth}
				onSignIn={onSignIn}
				mx={{ base: 5, sm: 10, lg: 0 }}
				ml={{ lg: "20%" }}
				alignSelf="center"
				flexDirection="column"
				maxW="500px"
				w="100%"
				popover={{
					isOpen,
					onClose,
				}}
			/>
		</Flex>
	);
};

export default Login;
