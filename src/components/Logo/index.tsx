import React from "react";
import { Text, Flex, Image, FlexProps } from "@chakra-ui/react";
import strings from "../../resources/strings";

const logoModes = {
	light: "/LogoLight.svg",
	dark: "/LogoDark.svg"
};

interface IProps extends FlexProps {
	mode?: keyof typeof logoModes;
}

export const Logo: React.FC<IProps> = (props) => {
	const componentStrings = strings.components.logo;
	const { mode = "light" } = props;

	return (
		<Flex
			alignItems="center"
			{...props}
		>
			<Image src={logoModes[mode]} />
			<Text
				ml={5}
				fontWeight={300}
				color={mode === "light" ? "white" : "#333333"}
				fontSize="xx-large"
			>
				{componentStrings.books}
			</Text>
		</Flex>
	);
};
