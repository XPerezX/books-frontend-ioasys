import axios from "axios";
import * as types from "./types";
export * as types from "./types";

const axiosBase = axios.create({
	baseURL: "https://books.ioasys.com.br/api/v1"
});

export const userLogin = async (
	email: string,
	password: string
): Promise<types.AuthenticatedUser> => {
	const response = await axiosBase.post<types.User>("/auth/sign-in", {
		email,
		password
	});

	return {
		authorization: response.headers.authorization,
		user: response.data,
		refreshToken: response.headers["refresh-token"]
	};
};

export const refreshToken = async (refreshToken: string): Promise<types.Tokens> => {
	const response = await axiosBase.post<types.Tokens>("/auth/refresh-token", {
		refreshToken
	});

	return {
		authorization: response.headers.authorization,
		refreshToken: response.headers["refresh-token"]
	};
};

export const getPaginatedBooks = async (
	authorizationToken: string,
	page = 1,
	itemsPerPage = 20
): Promise<types.IPaginetedBookList> => {
	const response = await axiosBase.get<types.IPaginetedBookList>(
		`/books?page=${page}&amount=${itemsPerPage}`,
		{
			headers: {
				authorization: `Bearer ${authorizationToken}`
			}
		}
	);

	return response.data;
};

export const getBookById = async (id: string, authorizationToken: string): Promise<types.Book> => {
	const response = await axiosBase.get<types.Book>(`/books/${id}`, {
		headers: {
			authorization: `Bearer ${authorizationToken}`
		}
	});

	return response.data;
};
