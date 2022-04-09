import * as React from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import useGlobalContext from "../../hooks/useGlobalContext";
import useHome from "../../hooks/useHome";

import {
	Section,
	BookCard,
	PaginatedList,
	Pagination,
} from "../../components";

export const Home: React.FC = () => {
	const { auth } = useGlobalContext();
	const navigator = useNavigate();
	const home = useHome();

	React.useEffect(() => {
		auth.checkIfUserIsLoggedIn(() => navigator("/login"))
	}, []);

	if (auth.isLoading || !auth.currentUser) {
		return <Spinner alignSelf="center" />
	}

	return (
		<Flex
			background="url('home-background.svg')"
			bgRepeat="no-repeat"
			bgPosition="center"
			backgroundSize="cover"
			py={10}
			minH="100vh"
		>
			<Section
				mx={{ base: 4, sm: 10, xl: "auto"}}
				maxW="1200px"
				currentUserName={auth.currentUser?.user.name || ""}
			>
				<PaginatedList
					items={home.items}
					renderItem={(item, index) => (
						<BookCard book={item} key={index} />
					)}
					gap={5}
					templateColumns="repeat(auto-fit, minmax(280px, 1fr))"
					footer={
						home.pagination ?
							<Pagination
								pagination={home.pagination}
								onNextPage={home.nextPage}
								onPreviousPage={home.previousPage}
								alignSelf="flex-end"
								mt={5}
							/>
						: undefined
					}
				/>
			</Section>

		</Flex>
	);
};

export default Home;
