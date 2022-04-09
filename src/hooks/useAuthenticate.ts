import React from "react";
import * as api from "../resources/api";
import showToast from "../resources/showToasts";
import useLoader from "./useLoader";

const useAuthenticate = () => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const loader = useLoader();

	const [currentUser, setCurrentUser] = React.useState<api.types.AuthenticatedUser | null>(null);

	const local_storage_key = "books-frontend-current-user";

	const saveIntoLocalStorage = (currentAuthenticatedUser: api.types.AuthenticatedUser) => {
		setCurrentUser(currentAuthenticatedUser);
		localStorage.setItem(local_storage_key, JSON.stringify(currentAuthenticatedUser));
	};

	const cleanLocalStorage = () => {
		localStorage.removeItem(local_storage_key);
	};

	const login = async () => {
		loader.start();
		if (loader.isLoading) {
			return;
		}
		try {
			const authenticatedUser = await api.userLogin(email.trim(), password.trim());

			saveIntoLocalStorage(authenticatedUser);
			showToast.success(authenticatedUser.user.name);
		} catch (error) {
			cleanLocalStorage();
			showToast.error("Error");
		}
	};

	return {
		login,
		currentUser,
		email,
		password,
		setPassword,
		setEmail
	};
};

export default useAuthenticate;
