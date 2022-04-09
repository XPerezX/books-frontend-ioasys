import * as React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { TextInput, Logo } from "../../components";
import strings from "../../resources/strings";

import useGlobalContext from "../../hooks/useGlobalContext";

const Login: React.FC = () => {
	const { auth } = useGlobalContext();
	const navigator = useNavigate();

	const signIn = () => {
		const success = () => navigator("/");
		auth.login(success)
	};

	return (
		<Flex
			bgImage="url('/Background-Image.svg')"
			bgRepeat="no-repeat"
			bgPosition="center"
			backgroundSize="cover"
			minH="100vh"
		>
			<Flex
				mx={{ base: 5, sm: 10, lg: 0 }}
				ml={{ lg: "20%" }}
				alignSelf="center"
				flexDirection="column"
				maxW="500px"
				w="100%"
			>
				<Logo />

				<TextInput
					label={strings.fields.email}
					onChangeText={(value) => auth.setEmail(value)}
					mb={5}
				/>
				<TextInput
					label={strings.fields.password}
					onChangeText={(value) => auth.setPassword(value)}
					inputProps={{ type: "password" }}
					rightElement={{
						childreen: (
							<Button
								borderRadius="44px"
								color="#B22E6F"
								onClick={signIn}
								isLoading={auth.isLoading}
							>
								{strings.actions.signIn}
							</Button>
						)
					}}
				/>
			</Flex>
		</Flex>
	);
};

export default Login;
