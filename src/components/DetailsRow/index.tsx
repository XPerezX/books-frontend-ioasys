import React from "react";
import { Flex, Text } from "@chakra-ui/react";

interface IProps {
	field: string;
	value: string | number;
}
export const DetailsRow: React.FC<IProps> = (props) => {
	const { field, value } = props;

	return (
		<Flex
			justifyContent="space-between"
			w="100%"
		>
			<Text
				fontSize="xs"
				color="gray.700"
				fontWeight="bold"
			>
				{field}
			</Text>
			<Text
				fontSize="xs"
				color="gray.500"
			>
				{value}
			</Text>
		</Flex>
	);
};
