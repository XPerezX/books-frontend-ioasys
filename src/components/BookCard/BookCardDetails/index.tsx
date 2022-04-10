import React from "react";
import { Text, VStack, TextProps, StackProps } from "@chakra-ui/react";

import strings from "../../../resources/strings";

interface IProps extends StackProps {
	pageCount: number;
	published: number;
	publisher: string;
}

export const BookCardDetails: React.FC<IProps> = (props) => {
	const { pageCount, published, publisher, ...restProps } = props;

	const componentStrings = strings.components.bookCard.details;

	const commumTextProps: TextProps = {
		color: "gray.500",
		fontSize: "xs",
		maxW: "100%",
		isTruncated: true
	};

	return (
		<VStack
			spacing={0.2}
			alignItems="flex-start"
			{...restProps}
		>
			<Text {...commumTextProps}>{componentStrings.numberOfPages(pageCount)}</Text>
			<Text {...commumTextProps}>{componentStrings.publisedOn(published)}</Text>
			<Text {...commumTextProps}>{componentStrings.publisher(publisher)}</Text>
		</VStack>
	);
};
