import React from "react";
import { Grid, GridProps, Flex } from "@chakra-ui/react";
import * as api from "../../resources/api"
import { Pagination } from "../../components";

interface IProps<DataType> extends GridProps {
	items: DataType[];
	renderItem: (item: DataType, index?: number) => JSX.Element;
	isLoading?: boolean;
	footer?: JSX.Element;
}

export const PaginatedList = <DataType, >(props: IProps<DataType>) => {
	const { items, renderItem, isLoading, footer, ...restProps } = props;

	return (
		<Flex flexDirection="column">
			<Grid {...restProps}>
				{items.map((item, index) => renderItem(item, index))}
			</Grid>
			{footer}
		</Flex>
	)
};
