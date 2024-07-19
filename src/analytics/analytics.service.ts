import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Analytics, AnalyticsDocument } from '../schema/analytics.schema';

//Add Prometheus Client
import * as client from 'prom-client';

// Initialize Prometheus metrics
const eventCounter = new client.Counter({
  name: 'event_counter',
  help: 'Total number of events',
  labelNames: ['event'],
});

@Injectable()
export class AnalyticsService {
    constructor(@InjectModel(Analytics.name) private analyticsModel: Model<AnalyticsDocument>) {}

    async logEvent(event: string, userId: string, metadata: Record<string, any> = {}) {
      eventCounter.inc({ event });
        const newEvent = new this.analyticsModel({
          event,
          userId,
          timestamp: new Date(),
          metadata,
        });
        return newEvent.save();
      }
    
      async getEventsByUser(userId: string) {
        return this.analyticsModel.find({ userId }).exec();
      }
    
      async getEventMetrics(event: string) {
        return this.analyticsModel.find({ event }).exec();
      }

      // Create a new method to expose metrics
      async getPrometheusMetrics() {
      return client.register.metrics();
    }   
}
