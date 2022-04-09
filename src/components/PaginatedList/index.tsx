import React from "react";
import { Grid, GridProps } from "@chakra-ui/react";
import { } from "../../components";

interface IProps<DataType> extends GridProps {
	items: DataType[];
	renderItem: (item: DataType, index?: number) => JSX.Element;
	isLoading?: boolean;
}

export const PaginatedList = <DataType, >(props: IProps<DataType>) => {
	const { items, renderItem, isLoading, ...restProps } = props;

	return (
		<Grid {...restProps}>
			{items.map((item, index) => renderItem(item, index))}
		</Grid>
	)
};
