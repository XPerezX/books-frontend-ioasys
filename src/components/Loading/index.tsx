import React from "react";
import {
	CenterProps,
    Center,
    Spinner,
} from "@chakra-ui/react";

export const Loading: React.FC<CenterProps> = (props) => {

	return (
		<Center {...props}>
			<Spinner w={80} h={80} />
		</Center>
	);
};