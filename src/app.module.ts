import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import UserGuard from './guards/UserGuard';
import LoggingInterceptor from './interceptors/LoggingInterceptor';
import LoggerMiddleware from './middlewares/logger.middleware';
import PersonController from './person.controller';
import PersonRepository from './person.repository';
import PersonService from './person.service';
import AnalyticsService from './services/analytics.service';

@Module({
  imports: [],
  controllers: [AppController, PersonController],
  providers: [AppService, PersonService, PersonRepository, UserGuard, LoggingInterceptor, {
    provide: AnalyticsService, 
    useValue: new AnalyticsService('person')
  }],
})
export class AppModule implements NestModule{

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("/person/all")
  }
}
