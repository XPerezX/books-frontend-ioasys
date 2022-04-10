import * as React from "react";
import { Image, Button, ButtonProps } from "@chakra-ui/react";

interface IProps extends ButtonProps {
    src: string;
}

export const IconButton: React.FC<IProps> = (props) => {
    const { src, ...restProps } = props;
	return (
		<Button
			rounded="full"
			bg="#FFFFFF32"
			backdropBlur={2}
			borderWidth={1}
			p={1}
			borderColor="gray.400"
			{...restProps}
		>
			<Image src={src} />
		</Button>
	);
};
