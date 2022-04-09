import * as React from "react";
import { Button, Flex, FlexProps } from "@chakra-ui/react";

import { ErrorPopover, TextInput, Logo } from "../../components";
import strings from "../../resources/strings";

import useAuthenticate from "../../hooks/useAuthenticate";

interface IProps extends FlexProps {
	authHook: ReturnType<typeof useAuthenticate>;
	onSignIn: () => void;
	popover: {
		isOpen: boolean;
		onClose: () => void;
	},
}

export const LoginForm: React.FC<IProps> = (props) => {
	const { authHook, onSignIn, popover, ...flexprops } = props;

	return (
		<ErrorPopover
			isOpen={popover.isOpen}
			onClose={popover.onClose}
			errorMessage={authHook.errorMessage}
		>
			<Flex {...flexprops}>
				<Logo mb={10} />

				<TextInput
					label={strings.fields.email}
					onChangeText={(value) => authHook.setEmail(value)}
					mb={5}
				/>
				<TextInput
					label={strings.fields.password}
					onChangeText={(value) => authHook.setPassword(value)}
					inputProps={{ type: "password" }}
					rightElement={{
						childreen: (
							<Button
								borderRadius="44px"
								color="#B22E6F"
								onClick={onSignIn}
								isLoading={authHook.isLoading}
							>
								{strings.actions.signIn}
							</Button>
						)
					}}
				/>
			</Flex>
		</ErrorPopover>
	);
};
