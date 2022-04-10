import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import useGlobalContext from "../../hooks/useGlobalContext";
import useHome from "../../hooks/useHome";

import { Section, BookCard, GridList, Pagination, Loading, BookModal } from "../../components";
import useBookModal from "../../hooks/useBookModal";

export const Home: React.FC = () => {
	const { auth } = useGlobalContext();
	const navigator = useNavigate();
	const home = useHome();
	const bookmodalHook = useBookModal();

	React.useEffect(() => {
		if (!auth.currentUser) {
			auth.checkIfUserIsLoggedIn(() => navigator("/login"));
		}
	}, [auth.currentUser]);

	if (auth.isLoading) {
		return (
			<Loading
				justifyContent="center"
				my={20}
			/>
		);
	}

	return (
		<Flex
			background="url('home-bg.svg')"
			bgRepeat="no-repeat"
			bgPosition="center"
			backgroundSize="cover"
			py={10}
			minH="100vh"
		>
			<Section
				mx={{ base: 4, sm: 10, xl: "auto" }}
				maxW="1200px"
				currentUserName={auth.currentUser?.user.name || ""}
				onLogout={auth.logout}
				disable={auth.isLoading}
			>
				<GridList
					items={home.items}
					renderItem={(item, index) => (
						<BookCard
							book={item}
							key={index}
							onClick={() => {
								bookmodalHook.onOpenBookModal(item);
							}}
						/>
					)}
					gap={5}
					templateColumns="repeat(auto-fit, minmax(280px, 1fr))"
					isLoading={home.isLoading}
					footer={
						home.pagination ? (
							<Pagination
								pagination={home.pagination}
								onNextPage={home.nextPage}
								onPreviousPage={home.previousPage}
								disable={home.isLoading}
								alignSelf="flex-end"
								mt={5}
							/>
						) : undefined
					}
				/>
				<BookModal
					isOpen={bookmodalHook.isOpen}
					onClose={bookmodalHook.onClose}
					book={bookmodalHook.book}
				/>
			</Section>
		</Flex>
	);
};

export default Home;
