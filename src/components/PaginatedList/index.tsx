import React from "react";
import { Grid, GridProps, Flex, Progress } from "@chakra-ui/react";

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
			{isLoading && 
				<Progress mt={2} isIndeterminate size="xs" colorScheme="primary" />
			}
			{footer}
		</Flex>
	)
};
