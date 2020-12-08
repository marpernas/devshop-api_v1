import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql/dist/graphql.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import {Category} from './category/category.entity'
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}), 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async(ConfigService: ConfigService) => ({
        type: 'postgres',
        url: ConfigService.get('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: true,
        logging: true
      })

    }),
    /*
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://postgres:123@localhost:5432/devshop',
      autoLoadEntities: true,
      synchronize: true,
      //entities: [Category],
      logging: true
    }),
    */
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
