import React from "react";

const useLoader = () => {
	const [loading, setLoading] = React.useState(false);

	const start = () => {
		setLoading(true);
	};

	const end = () => {
		setLoading(false);
	};

	return {
		isLoading: loading,
		start,
		end
	};
};

export default useLoader;
