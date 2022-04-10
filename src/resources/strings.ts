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
	errors: {
		userIsNotLoggedIn: "Usuário não está logado",
		stillRunning: "Ainda Carregando. Por favor espere",
		theresNoMorePages: "Não há mais páginas",
		theresNoMorePreviousPages: "Não é mais possível retornar de página",
	},
	pages: {
		login: {
			success: (name: string) => `Bem Vindo ${name}`,
		},
	},
};

export default strings;
