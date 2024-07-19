// schemas/analytics.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type AnalyticsDocument = Analytics & Document;

@Schema()
export class Analytics {
  @Prop({ required: true })
  event: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  timestamp: Date;

  @Prop({ type: MongooseSchema.Types.Mixed })
  metadata: Record<string, any>;
}

export const AnalyticsSchema = SchemaFactory.createForClass(Analytics);
