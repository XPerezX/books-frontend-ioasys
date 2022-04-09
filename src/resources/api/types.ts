export interface User {
	id: string;
	name: string;
	email: string;
	birthdate: string;
	gender: string;
}

export interface AuthenticatedUser {
    user: User;
    authorization: string;
    refreshToken: string;
}

export interface Tokens {
    authorization: string;
    refreshToken: string;
}

export interface Book {
	authors: string[];
	title: string;
	description: string;
	pageCount: 1538;
	category: string;
	imageUrl: string;
	language: string;
	isbn10: string;
	isbn13: string;
	publisher: string;
	published: number;
	id: string;
}

export enum BookCategory {
	biographies = "biografias",
	collections = "coleções",
	behavior = "comportamento",
	tales = "contos",
	"literary-criticism" = "crítica literária",
	scienceFiction = "ficção científica",
	folklore = "folclore",
	genealogy = "Genealogia",
	humor = "humor",
	children = "crianças",
	games = "jogos",
	newspapers = "jornal",
	"brazilian-literature" = "literatura brasileira",
	"foreign-literature" = "literatura estrangeira",
	"rare-books" = "livros raros",
	manuscripts = "manuscritos",
	poetry = "poesia",
	"another-subjects" = "outros assuntos"
}
