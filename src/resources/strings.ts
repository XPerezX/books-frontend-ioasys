const strings = {
	components: {
		logo: {
			books: "Books"
		}
	},
	fields: {
		email: "E-mail",
		password: "Senha"
	},
	actions: {
		signIn: "Entrar"
	},
	pages: {
		login: {
			success: (name: string) => `Bem Vindo ${name}`,
		},
	},
};

export default strings;
