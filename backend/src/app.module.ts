import { Todo } from './todos/entity/todo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        name: 'postgres', // This field sets the connection when calling forRoot
        type: 'postgres',
        host: 'localhost',
        port: 5444,
        username: 'postgres',
        password: 'password',
        database: 'postgres',
        entities: [Todo],
        synchronize: true,
      }),
    }),
    TodosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
