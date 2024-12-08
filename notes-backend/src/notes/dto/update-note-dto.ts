import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateNoteDto {
  @IsNotEmpty() // Title updated but not required
  title?: string;

  @IsOptional() // Content is optional
  content?: string;
}
