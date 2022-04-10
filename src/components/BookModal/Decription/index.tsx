import React from "react";
import {
	Box,
	Text,
	BoxProps,
} from "@chakra-ui/react";

import strings from "../../../resources/strings";

interface IProps extends BoxProps {
	text: string;
}
export const Decription: React.FC<IProps> = (props) => {
	const { text, ...rest } = props;
	const componentStrings = strings.components.bookModal.description;
	return (

		<Box {...rest}>
			<Text
				fontWeight="bold"
				textTransform="uppercase"
				fontSize="sm"
				color="gray.700"
				mb={2}
			>
				{componentStrings.title}
			</Text>
			<Text
				color="gray.400"
				fontSize="12px"
			>
				{text}
			</Text>
		</Box>
	);
};