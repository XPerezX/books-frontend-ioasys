interface CustomError {
	message: string;
	status: number;
}

const treatError = (e: any): CustomError => {
	return {
		message: e.response.data.errors.message,
		status: e.response.status,
	}
};

export default treatError;