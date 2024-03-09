import { Sequelize } from 'sequelize-typescript';
import { AuthorTable } from 'src/entity/author.entity';
import { CategoryTable } from 'src/entity/category.entity';
import { PostTable } from 'src/entity/post.entity';
import { UserTable } from 'src/entity/user.entity';
require('dotenv').config();


export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: process.env.HOST,
                username: process.env.DATABASE_USER,
                password: process.env.PASSWORD,
                database: process.env.DATABASE,
                define: {
                  timestamps: true,
                },
              });
        
              sequelize.addModels([ 
                AuthorTable,
                CategoryTable,
                PostTable,
                UserTable
              ]);

              return sequelize;
        }
    }
]