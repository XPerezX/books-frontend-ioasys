import React from "react";
import * as api from "../resources/api";
import showToast from "../resources/showToasts";
import useLoader from "./useLoader";
import strings from "../resources/strings";
import treatError from "../resources/treatError";

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

	const login = async (onSuccess: () => void) => {
		loader.start();
		if (loader.isLoading) {
			return;
		}
		try {
			const authenticatedUser = await api.userLogin(email.trim(), password.trim());

			saveIntoLocalStorage(authenticatedUser);
			showToast.success(strings.pages.login.success(authenticatedUser.user.name));
			onSuccess();
		} catch (e) {
			cleanLocalStorage();
			const error = treatError(e);
			showToast.error(error.message);
		} finally {
			loader.end();
		}
	};

	return {
		login,
		currentUser,
		email,
		password,
		setPassword,
		setEmail,
		isLoading: loader.isLoading,
	};
};

export default useAuthenticate;
