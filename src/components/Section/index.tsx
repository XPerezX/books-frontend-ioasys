import * as React from "react";
import { Flex, Image, Button, Text, FlexProps } from "@chakra-ui/react";
import { Logo } from "../../components";
import strings from "../../resources/strings";

interface IProps extends FlexProps {
	currentUserName: string;
}

export const Section: React.FC<IProps> = (props) => {
	const { currentUserName, children , ...restProps } = props;
	const componentStrings = strings.components.section;

	return (
		<Flex
			alignSelf="flex-start"
			flexDirection="column"
			w="100%"
			{...restProps}
		>
			<Flex alignItems="center" w="100%" justifyContent="space-between" mb={10}>
				<Logo mode="dark" />
				<Flex alignItems="center">
					<Flex mr={5} display={{ base: "none", md: "flex" }}>
						<Text fontSize="lg">
							{componentStrings.welcome}
						</Text>
						<Text fontWeight="bold" fontSize="lg" ml={2}>
							{currentUserName}
						</Text>
					</Flex>
					<Button
						rounded="full"
						bg="#FFFFFF32"
						backdropBlur={2}
						borderWidth={1}
						p={1}
						borderColor="gray.400"
					>
						<Image src="logoutIcon.svg" />
					</Button>
				</Flex>
			</Flex>
			{children}
		</Flex>
	);
};
