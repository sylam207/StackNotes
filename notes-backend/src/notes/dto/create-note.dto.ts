import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty() // Title is required
  title: string;

  @IsOptional() // Content is optional
  content?: string;
}
