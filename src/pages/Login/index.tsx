import * as React from 'react';
import { Button, Flex } from '@chakra-ui/react';

import { TextInput, Logo } from '../../components';
import strings from '../../resources/strings';

const Login: React.FC = () => {
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
				ml={{ lg: '20%' }}
				alignSelf="center"
				flexDirection="column"
				maxW="500px"
				w="100%"
			>
				<Logo />

				<TextInput label={strings.fields.email} onChangeText={(e) => e} mb={5} />
				<TextInput
					label={strings.fields.password}
					onChangeText={(e) => e}
					inputProps={{ type: 'password' }}
					rightElement={{
						childreen: (
							<Button borderRadius="44px" color="#B22E6F">
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
