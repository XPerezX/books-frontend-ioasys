import React from "react";
import {
	Text,
	Button,
	Image,
	HStack,
	StackProps,
} from "@chakra-ui/react";

import * as api from "../../resources/api";
import strings from "../../resources/strings";

interface IProps  extends StackProps {
	pagination: api.types.IPagination;
	onNextPage: () => void;
	onPreviousPage: () => void;
}

export const Pagination: React.FC<IProps> = (props) => {
	const { pagination, onNextPage, onPreviousPage,  ...rest } = props;
	const componentStrings = strings.components.pagination;
	return (
		<HStack {...rest}>
			<Text>
				{componentStrings.pageOutOfTotalPages(pagination.page, pagination.totalPages)}
			</Text>
			<Button
				rounded="full"
				bg="#FFFFFF32"
				backdropBlur={2}
				borderWidth={1}
				p={1}
				isDisabled={pagination.page === 1}
				borderColor="gray.400"
				onClick={onPreviousPage}
			>
				<Image src="lefArrowIcon.svg" />
			</Button>
			<Button
				rounded="full"
				isDisabled={pagination.page >= pagination.totalPages}
				bg="#FFFFFF32"
				backdropBlur={2}
				borderWidth={1}
				p={1}
				borderColor="gray.400"
				onClick={onNextPage}
			>
				<Image src="rightArrowIcon.svg" />
			</Button>
		</HStack>
	);
};