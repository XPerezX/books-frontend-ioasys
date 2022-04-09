import { createStandaloneToast, UseToastOptions } from "@chakra-ui/react";

const toast = createStandaloneToast();

const success = (message: string, options?: UseToastOptions) => {
	toast({
		title: message,
		status: "success",
		duration: 4000,
		isClosable: true,
		...options
	});
};

const error = (message: string, options?: UseToastOptions) => {
	toast({
		title: message,
		status: "error",
		duration: 4000,
		isClosable: true,
		...options
	});
};

const custom = (options: UseToastOptions) => {
	toast(options);
};

export default {
	success,
	error,
	custom
};
