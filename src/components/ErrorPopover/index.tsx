import React from "react";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverArrow,
	PopoverBody
} from "@chakra-ui/popover";

interface IProps {
	isOpen: boolean;
	onClose: () => void;
	errorMessage?: string;
}

export const ErrorPopover: React.FC<IProps> = (props) => {
	const { isOpen, onClose, errorMessage } = props;
	return (
		<Popover
			returnFocusOnClose={false}
			isOpen={isOpen}
			onClose={onClose}
			placement="bottom-start"
			closeOnBlur={false}
		>
			<PopoverTrigger>{props.children}</PopoverTrigger>
			<PopoverContent
				borderRadius={4}
				backdropBlur={2}
				bg="rgba(255, 255, 255, 0.4)"
				borderWidth={0}
				maxW="400px"
				w="100%"
				p={1}
				mt={5}
				position="relative"
			>
				<PopoverArrow
					bg="rgba(255, 255, 255, 0.4)"
					backdropBlur={2}
				/>
				<PopoverBody
					color="white"
					fontWeight={700}
				>
					{errorMessage}
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};
