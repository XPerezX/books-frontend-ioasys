import React from "react";
import { Flex, Text, FlexProps } from "@chakra-ui/react";
import { Logo, IconButton } from "../../components";
import strings from "../../resources/strings";

interface IProps extends FlexProps {
	currentUserName: string;
	onLogout?: () => void;
	disable?: boolean;
}

export const Section: React.FC<IProps> = (props) => {
	const { currentUserName, onLogout, disable, children, ...restProps } = props;
	const componentStrings = strings.components.section;

	return (
		<Flex
			alignSelf="flex-start"
			flexDirection="column"
			w="100%"
			{...restProps}
		>
			<Flex
				alignItems="center"
				w="100%"
				justifyContent="space-between"
				mb={10}
			>
				<Logo mode="dark" />
				<Flex alignItems="center">
					<Flex
						mr={5}
						display={{ base: "none", md: "flex" }}
					>
						<Text fontSize="lg">{componentStrings.welcome}</Text>
						<Text
							fontWeight="bold"
							fontSize="lg"
							ml={2}
						>
							{currentUserName}
						</Text>
					</Flex>
					<IconButton
						src="logoutIcon.svg"
						disabled={disable}
						onClick={onLogout}
					/>
				</Flex>
			</Flex>
			{children}
		</Flex>
	);
};
