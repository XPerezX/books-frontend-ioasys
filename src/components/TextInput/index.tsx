import React from "react";
import {
	Input,
	FormControl,
	FormLabel,
	FormControlProps,
	InputProps,
	Box,
	BoxProps
} from "@chakra-ui/react";

interface IProps extends FormControlProps {
	onChangeText: (value: string) => void;
	label?: string;
	value?: string;
	inputProps?: InputProps;
	disable?: boolean;
	rightElement?: {
		props?: BoxProps;
		childreen: JSX.Element;
	};
}

export const TextInput: React.FC<IProps> = (props) => {
	const { onChangeText, disable, value, label, inputProps, rightElement, ...rest } = props;

	return (
		<FormControl
			backdropBlur={2}
			bg="#00000032"
			maxW="400px"
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
				{label}
			</FormLabel>
			<Input
				pt={4}
				w="100%"
				borderWidth={0}
				color="white"
				fontWeight={400}
				fontSize="16px"
				isDisabled={disable}
				h="100%"
				value={value}
				onChange={(e) => onChangeText(e.target.value)}
				{...inputProps}
				pr={100}
			/>
			{rightElement && (
				<Box position="absolute" right={4} top={2.5} {...rightElement.props}>
					{rightElement.childreen}
				</Box>
			)}
		</FormControl>
	);
};
