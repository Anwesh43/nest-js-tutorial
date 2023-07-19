import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import PersonController from './person.controller';
import PersonRepository from './person.repository';
import PersonService from './person.service';

@Module({
  imports: [],
  controllers: [AppController, PersonController],
  providers: [AppService, PersonService, PersonRepository],
})
export class AppModule {}
