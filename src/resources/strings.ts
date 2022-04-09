const strings = {
	components: {
		logo: {
			books: "Books"
		},
		section: {
			welcome: "Bem vindo,",
		},
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
