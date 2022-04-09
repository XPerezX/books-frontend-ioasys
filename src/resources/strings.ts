const strings = {
	components: {
		logo: {
			books: "Books"
		},
		section: {
			welcome: "Bem vindo,",
		},
		bookCard: {
			numberOfPages: (amount: number) => `${amount} páginas`,
			publisedOn: (year: number) => `Publicado em ${year}`,
			publisher: (name: string) => `Editora ${name}`,
		},
		pagination: {
			pageOutOfTotalPages: (page: number, totalPages: number) => `Página ${page} de ${totalPages}`,
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
