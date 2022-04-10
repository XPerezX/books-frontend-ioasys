import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import * as api from "../resources/api";

const useBookModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [book, setBook] = React.useState<api.types.Book | null>(null);

    const onOpenBookModal = (book: api.types.Book) => {
        setBook(book);
        onOpen();
    };

	return {
        isOpen,
        onOpenBookModal,
        book,
        onClose
	}
};

export default useBookModal