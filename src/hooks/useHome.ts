import React from "react";
import useLoader from "./useLoader";
import * as api from "../resources/api";
import treatError from "../resources/treatError";
import showToasts from "../resources/showToasts";
import useGlobalContext from "./useGlobalContext";

const useHome = () => {
	const { auth } = useGlobalContext();
	const loader = useLoader();

	const [items, setItems] = React.useState<api.types.Book[]>([]);
	const [pagination, setPagination] = React.useState<api.types.IPagination | null>(null);
	
	React.useEffect(() => {
		if (auth.currentUser) {
			fetchPage();
		}
	}, [auth.currentUser]);

	const fetchPage = async (page = 1) => {
		loader.start();
		if (loader.isLoading) {
			return;
		}
		if (!auth.currentUser) {
			return;
		}
		try {
			const response = await api.getPaginatedBooks(auth.currentUser.authorization, page);

			afterFetch(response);
		} catch (e) {
			const error = treatError(e);
			showToasts.error(error.message);
		} finally {
			loader.end();
		}
	};

	const afterFetch = (paginetedBookList: api.types.IPaginetedBookList) => {
		setPagination({
			page: paginetedBookList.page,
			totalItems: paginetedBookList.totalItems,
			totalPages: paginetedBookList.totalPages,
		})
		setItems(paginetedBookList.data);
	}

	const nextPage = () => {
		if (pagination) {
			if (pagination.page + 1 >= pagination.totalPages) {
				showToasts.error("Não há mais paginas")
				return;
			}
			fetchPage(pagination.page + 1)
			console.log(pagination)
		}
	};

	const previousPage = () => {
		if (pagination) {
			if (pagination.page === 1) {
				showToasts.error("Não é possivel diminuir paginação")
				return;
			}
			fetchPage(pagination.page - 1)
		}
	};

	return {
		isLoading: loader.isLoading,
		fetchPage,
		items,
		pagination,
		nextPage,
		previousPage
	}
};

export default useHome