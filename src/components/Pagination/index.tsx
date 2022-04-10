import React from "react";
import {
	Text,
	HStack,
	StackProps,
} from "@chakra-ui/react";

import * as api from "../../resources/api";
import strings from "../../resources/strings";

import { IconButton } from "../../components";

interface IProps extends StackProps {
	pagination: api.types.IPagination;
	onNextPage: () => void;
	onPreviousPage: () => void;
	disable?: boolean;
}

export const Pagination: React.FC<IProps> = (props) => {
	const { pagination, onNextPage, onPreviousPage, disable,  ...rest } = props;
	const componentStrings = strings.components.pagination;
	return (
		<HStack {...rest}>
			<Text>
				{componentStrings.pageOutOfTotalPages(pagination.page, pagination.totalPages)}
			</Text>
			<IconButton
				onClick={onPreviousPage}
				src="lefArrowIcon.svg"
				isDisabled={pagination.page === 1 || disable}
			/>
			<IconButton
				onClick={onNextPage}
				src="rightArrowIcon.svg"
				isDisabled={pagination.page >= pagination.totalPages || disable}
			/>
		</HStack>
	);
};