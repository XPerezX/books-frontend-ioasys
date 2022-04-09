import * as React from "react";
import { Flex, Image, Heading, Text, Box, VStack, FlexProps } from "@chakra-ui/react";

import * as api from "../../resources/api";
import strings from "../../resources/strings";

interface IProps extends FlexProps {
	book: api.types.Book;
	onClickBookCard?: (book: api.types.Book) => void;
}

export const BookCard: React.FC<IProps> = (props) => {
	const { book, onClickBookCard, ...restProps } = props;
	const componentStrings = strings.components.bookCard;

	return (
		<Flex
			onClick={onClickBookCard ? () => onClickBookCard(book) : undefined}
			h="160px"
			bg="white"
			p={5}
			cursor="pointer"
			borderRadius="4px"
			boxShadow="0px 6px 24px rgba(84, 16, 95, 0.13)"
			_hover={{
				boxShadow: "0px 16px 80px rgba(84, 16, 95, 0.32)",
			}}
			{...restProps}
		>
			<Image
				w="30%"
				src={book.imageUrl}
			/>
			<Flex ml="8%" maxW="62%" flexDirection="column" justifyContent="space-between">

				<Box>
					<Heading fontSize="md">
						{book.title}
					</Heading>
								
					{book.authors.map((item) => (
						<Text
							color="#B22E6F"
							key={item} fontSize="xs" fontWeight="bold"
						>
							{item}
						</Text>
					))}
				</Box>
				<VStack spacing={0.2} alignItems="flex-start"> 
					<Text
						color="gray.500"
						fontSize="xs"
					>
						{componentStrings.numberOfPages(book.pageCount)}
					</Text>
					<Text
						color="gray.500"
						fontSize="xs"
						maxW="100%"
						isTruncated
					>
						{componentStrings.publisedOn(book.published)}
					</Text>
					<Text
						color="gray.500"
						fontSize="xs"
						maxW="100%"
						isTruncated
					>
						{componentStrings.publisher(book.publisher)}
					</Text>
				</VStack>
							
			</Flex>
		</Flex>
				

	);
};
