import React from "react";
import {
	CenterProps,
    Center,
    Spinner,
	Heading,
} from "@chakra-ui/react";
import strings from "../../resources/strings";

export const Loading: React.FC<CenterProps> = (props) => {
	const componentStrings = strings.components.loading;

	return (
		<Center flexDirection="column" {...props}>
			<Spinner />
			<Heading
				fontSize="lg"
				mt={5}
			>
				{componentStrings.pleaseWait}
			</Heading>
		</Center>
	);
};