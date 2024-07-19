import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnalyticsModule } from './analytics/analytics.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    MongooseModule.forRoot(""), // Adjust your MongoDB URI accordingly
    AnalyticsModule, UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log('Mongoose connection established.');
  }
}