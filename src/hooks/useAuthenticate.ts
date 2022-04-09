import React from "react";
import * as api from "../resources/api";
import showToast from "../resources/showToasts";
import useLoader from "./useLoader";
import strings from "../resources/strings";
import treatError from "../resources/treatError";

const useAuthenticate = () => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [errorMessage, setErrorMessage] = React.useState("");

	const loader = useLoader();

	const [currentUser, setCurrentUser] = React.useState<api.types.AuthenticatedUser | null>(null);

	const local_storage_key = "books-frontend-current-user";

	const saveIntoLocalStorage = (currentAuthenticatedUser: api.types.AuthenticatedUser): api.types.AuthenticatedUser => {
		setCurrentUser(currentAuthenticatedUser);
		localStorage.setItem(local_storage_key, JSON.stringify(currentAuthenticatedUser));

		return currentAuthenticatedUser;
	};

	const getCurrentUserFromLocalStorage = (): api.types.AuthenticatedUser=> {
		const currentUserJson = localStorage.getItem(local_storage_key);
		if (!currentUserJson) {
			throw new Error("It's not Logged in");
		}
		const currentUser = JSON.parse(currentUserJson) as api.types.AuthenticatedUser;

		return currentUser;
	};

	const cleanLocalStorage = () => {
		localStorage.removeItem(local_storage_key);
	};

	const login = async (onSuccess: () => void, onError: () => void) => {
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
			setErrorMessage(error.message);
			onError();
		} finally {
			loader.end();
		}
	};

	const getCurrentUser = async () => {
		loader.start();
		try {
			const userFromLocalStorage = getCurrentUserFromLocalStorage();

			const tokens = await api.refreshToken(userFromLocalStorage.refreshToken);
			
			const currentUser = ({...userFromLocalStorage, ...tokens });
			saveIntoLocalStorage(currentUser);
			return currentUser;
		} catch (error) {
			cleanLocalStorage();
			console.log(error);
		} finally {
			loader.end();
		}
	};

	const checkIfUserIsLoggedIn = async (onFail: () => void, onSuccess?: () => void, ) => {
		if (! await getCurrentUser()) {
			onFail();
			return;
		}
		onSuccess && onSuccess();
	}

	return {
		login,
		currentUser,
		email,
		password,
		setPassword,
		setEmail,
		isLoading: loader.isLoading,
		errorMessage,
		getCurrentUser,
		checkIfUserIsLoggedIn,
	};
};

export default useAuthenticate;
