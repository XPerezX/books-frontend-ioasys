const strings = {
	components: {
		loading: {
			pleaseWait: "Carregando. Por favor espere..."
		},
		logo: {
			books: "Books"
		},
		section: {
			welcome: "Bem vindo,"
		},
		bookCard: {
			details: {
				numberOfPages: (amount: number) => `${amount} páginas`,
				publisedOn: (year: number) => `Publicado em ${year}`,
				publisher: (name: string) => `Editora ${name}`
			}
		},
		bookModal: {
			description: {
				title: "Resenha da editora"
			}
		},
		bookDetails: {
			title: "Informações",
			fields: {
				pages: "Páginas",
				publisher: "Editora",
				published: "Publicado",
				language: "Idioma",
				originalTitle: "Titulo Original",
				isbn10: "ISBN-10",
				isbn13: "ISBN-13"
			},
			pages: (pages: number) => `${pages} páginas`
		},
		pagination: {
			pageOutOfTotalPages: (page: number, totalPages: number) =>
				`Página ${page} de ${totalPages}`
		}
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
		theresNoMorePreviousPages: "Não é mais possível retornar de página"
	},
	pages: {
		login: {
			success: (name: string) => `Bem Vindo ${name}`
		}
	}
};

export default strings;
