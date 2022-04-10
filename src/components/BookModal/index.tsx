import React from "react";
import {
	Modal,
	ModalOverlay,
	ModalBody,
	ModalContent,
	ModalCloseButton,
	Image,
	Flex,
	Box,
	Text,
	Heading,
	ChakraProps
} from "@chakra-ui/react";

import { types } from "../../resources/api";

import { BookModalDetails } from "./BookModalDetails";
import { BookModalDescription } from "./BookModalDescription";

interface IProps {
	isOpen: boolean;
	onClose: () => void;
	book?: types.Book | null;
}
export const BookModal: React.FC<IProps> = (props) => {
	const { isOpen, onClose, book } = props;

	const scrollStyle: ChakraProps["css"] = {
		"&::-webkit-scrollbar": {
		width: "4px",
		borderRadius: "20px",
		},
		"&::-webkit-scrollbar-thumb": {
		backgroundColor: "#AB2680",
		borderRadius: "20px",
		},
	};

	return (
		<Modal onClose={onClose} isOpen={isOpen} isCentered>
			<ModalOverlay />
			<ModalContent
				maxW={{ base: "480px", md: "900px"}}
				w="100%"
				m={{ base: 5, lg: 0}}
				position="relative"
			>
				<ModalCloseButton
					zIndex={1000}
					bg="white"
					rounded="full"
					position="fixed"
				/>
				<ModalBody>
					{book && (
						<Flex
							w="100%"
							maxH={{ base: "80vh", md: "auto"}}
							p={{ base: 2, lg: 5}}
							flexDirection={{ base: "column", md: "row"}}
							overflowY={{ base: "auto", md: "hidden" }}
							css={scrollStyle}
						>
							<Image
								w={{ base: "100%", md: "50%"}}
								mr={{ md: "5%"}}
								mb={{ base: 5, md: 0 }}
								src={book.imageUrl}
							/>
							<Flex
								flexDirection="column"
								w={{ base: "100%", md: "45%"}}
								justifyContent="space-between"
								overflowY={{ md: "auto"}}
								pr={{ md: 2}}
								css={scrollStyle}
							>

								<Box>
									<Heading color="gray.700">
										{book.title}
									</Heading>
				
									<Text
										color="primary.600"
										fontWeight="bold"
										fontSize="xs"
									>
										{book.authors.join(", ")}
									</Text>
									
								</Box>
								
								<BookModalDetails
									book={book}
									mt={{ base: 8, md: 0 }}
								/>

								<BookModalDescription
									mt={{ base: 8, md: 0 }}
									text={book.description}
								/>

							</Flex>
						</Flex>
					)}
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};