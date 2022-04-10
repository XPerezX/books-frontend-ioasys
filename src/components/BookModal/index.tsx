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
} from "@chakra-ui/react";

import { types } from "../../resources/api";

import { BookDetails } from "../BookDetails";
import { Decription } from "./Decription";

interface IProps {
	isOpen: boolean;
	onClose: () => void;
	book?: types.Book | null;
}
export const BookModal: React.FC<IProps> = (props) => {
	const { isOpen, onClose, book } = props;
	return (
		<Modal onClose={onClose} isOpen={isOpen} isCentered>
			<ModalOverlay />
			<ModalContent
				maxW={{ base: "480px", md: "900px"}}
				w="100%"
				m={{ base: 5, lg: 0}}
			>
				<ModalCloseButton />
				<ModalBody>
					{book && (
						<Flex
							w="100%"
							maxH={{ base: "90vh", md: "auto"}}
							p={{ base: 2, lg: 5}}
							flexDirection={{ base: "column", md: "row"}}
							overflowY={{ base: "auto", md: "hidden" }}
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
							>

								<Box>
									<Heading color="gray.700">
										{book.title}
									</Heading>
				
									<Text
										color="#B22E6F"
										fontWeight="bold"
										fontSize="sm"
									>
										{book.authors.join(", ")}
									</Text>
									
								</Box>
								
								<BookDetails
									book={book}
									mt={{ base: 8, md: 0 }}
								/>

								<Decription
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