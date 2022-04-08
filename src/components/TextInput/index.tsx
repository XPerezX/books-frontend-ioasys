import React from "react";
import { Input, FormControl, FormLabel, FormControlProps } from "@chakra-ui/react";

interface IProps extends FormControlProps {
	onChangeText?: () => void;
}

export const TextInput: React.FC<IProps> = (props) => {
	const { ...rest } = props;
	return (
		<FormControl
			backdropBlur={2}
			bg="#00000032"
			maxW="370px"
			h="60px"
			borderRadius="4px"
			position="relative"
			{...rest}
		>
			<FormLabel
				top={1}
				left={4}
				position="absolute"
				fontSize="sm"
				color="#FFFFFF"
				opacity={0.5}
			>
				Email
			</FormLabel>
			<Input
				pt={4}
				borderWidth={0}
				color="white"
				fontWeight={400}
				fontSize="16px"
				h="100%"
			/>
		</FormControl>
	);
};