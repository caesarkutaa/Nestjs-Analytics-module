import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import {Analytics,AnalyticsSchema} from '../schema/analytics.schema'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:Analytics.name, schema:AnalyticsSchema}]),
     ConfigModule],
  providers: [AnalyticsService],
  controllers: [AnalyticsController]
})
export class AnalyticsModule {}
