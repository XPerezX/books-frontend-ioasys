import React from "react";
import { Flex, Image, Heading, Text, Box, FlexProps } from "@chakra-ui/react";

import * as api from "../../resources/api";

import { BookCardDetails } from "./BookCardDetails";

interface IProps extends FlexProps {
	book: api.types.Book;
	onClickBookCard?: (book: api.types.Book) => void;
}

export const BookCard: React.FC<IProps> = (props) => {
	const { book, onClickBookCard, ...restProps } = props;

	return (
		<Flex
			onClick={onClickBookCard ? () => onClickBookCard(book) : undefined}
			h={160}
			bg="white"
			p={5}
			cursor="pointer"
			borderRadius={2}
			boxShadow="0px 6px 24px rgba(84, 16, 95, 0.13)"
			_hover={{
				boxShadow: "0px 16px 80px rgba(84, 16, 95, 0.32)"
			}}
			{...restProps}
		>
			<Image
				w="30%"
				src={book.imageUrl}
			/>
			<Flex
				ml="8%"
				maxW="62%"
				flexDirection="column"
				justifyContent="space-between"
			>
				<Box>
					<Heading
						fontSize="sm"
						noOfLines={2}
					>
						{book.title}
					</Heading>

					<Text
						color="primary.600"
						fontSize="xs"
						fontWeight="bold"
						noOfLines={2}
					>
						{book.authors.join("\n")}
					</Text>
				</Box>

				<BookCardDetails
					spacing={0.2}
					alignItems="flex-start"
					pageCount={book.pageCount}
					published={book.published}
					publisher={book.publisher}
				/>
			</Flex>
		</Flex>
	);
};
