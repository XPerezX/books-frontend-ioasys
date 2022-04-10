import React from "react";
import { VStack, Text, Box, BoxProps } from "@chakra-ui/react";
import { types } from "../../../resources/api";
import strings from "../../../resources/strings";
import { DetailsRow } from "../../DetailsRow";

interface IProps extends BoxProps {
	book: types.Book;
}
export const BookModalDetails: React.FC<IProps> = (props) => {
	const { book, ...rest } = props;
	const componentStrings = strings.components.bookDetails;
	return (
		<Box {...rest}>
			<Text
				fontWeight="bold"
				textTransform="uppercase"
				fontSize="sm"
				color="gray.700"
				mb={5}
			>
				{componentStrings.title}
			</Text>

			<VStack
				spacing={0.5}
				alignItems="flex-start"
			>
				<DetailsRow
					field={componentStrings.fields.pages}
					value={componentStrings.pages(book.pageCount)}
				/>
				<DetailsRow
					field={componentStrings.fields.publisher}
					value={book.publisher}
				/>
				<DetailsRow
					field={componentStrings.fields.published}
					value={book.published}
				/>
				<DetailsRow
					field={componentStrings.fields.language}
					value={book.language}
				/>
				<DetailsRow
					field={componentStrings.fields.originalTitle}
					value={book.title}
				/>
				<DetailsRow
					field={componentStrings.fields.isbn10}
					value={book.isbn10}
				/>
				<DetailsRow
					field={componentStrings.fields.isbn13}
					value={book.isbn13}
				/>
			</VStack>
		</Box>
	);
};
