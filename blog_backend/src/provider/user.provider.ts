import { UserTable } from "src/entity/user.entity";
export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: UserTable,
  },
];