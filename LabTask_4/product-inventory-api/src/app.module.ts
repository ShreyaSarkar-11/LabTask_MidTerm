import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './products/products.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { ConfigModule } from '@nestjs/config';

@Module({ 
  imports: [ProductsModule, TypeOrmModule.forRoot({ 
      type: 'postgres', 
      host: 'localhost', 
      port: 5432, 
      username: 'postgres', 
      password: 'admin', 
      database: 'LabTaskDB', 
      autoLoadEntities: true, 
      synchronize: true, 
    }), 
  ], 
}) 
export class AppModule {} 