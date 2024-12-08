import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Note extends Document {
  @Prop({ required: true }) // This address where we require a title field
  title: string;

  @Prop() // This is the field for content
  content: string;

  @Prop({ default: Date.now }) // This is the field for createdAt
  createdAt: Date;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
