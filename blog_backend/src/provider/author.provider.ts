import { AuthorTable } from "src/entity/author.entity";
export const authorProviders = [
  {
    provide: 'AUTHOR_REPOSITORY',
    useValue: AuthorTable,
  },
];