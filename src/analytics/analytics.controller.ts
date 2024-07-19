// analytics.controller.ts
import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private analyticsService: AnalyticsService) {}

  @Post('log')
  async logEvent(
    @Body('event') event: string,
    @Body('userId') userId: string,
    @Body('metadata') metadata: Record<string, any>,
  ) {
    return this.analyticsService.logEvent(event, userId, metadata);
  }

  @Get('user/:userId')
  async getEventsByUser(@Param('userId') userId: string) {
    return this.analyticsService.getEventsByUser(userId);
  }

  @Get('event/:event')
  async getEventMetrics(@Param('event') event: string) {
    return this.analyticsService.getEventMetrics(event);
  }

  @Get('metrics')
  async getPrometheusMetrics() {
    return this.analyticsService.getPrometheusMetrics();
  }
}

