import { PostTable } from "src/entity/post.entity";
export const postProviders = [
  {
    provide: 'POST_REPOSITORY',
    useValue: PostTable,
  },
];