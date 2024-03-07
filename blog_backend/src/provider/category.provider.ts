import { CategoryTable } from "src/entity/category.entity";
export const categoryProviders = [
    {
      provide: 'CATEGORY_REPOSITORY',
      useValue: CategoryTable,
    },
  ];