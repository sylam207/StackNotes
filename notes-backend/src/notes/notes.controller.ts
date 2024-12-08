import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note-dto';
import { Note } from './schemas/note.schema';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  async create(@Body() CreateNoteDto: CreateNoteDto): Promise<Note> {
    return this.notesService.create(CreateNoteDto);
  }

  @Get()
  async findAll(): Promise<Note[]> {
    return this.notesService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() UpdateNoteDto: UpdateNoteDto,
  ): Promise<Note> {
    return this.notesService.update(id, UpdateNoteDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Note> {
    return this.notesService.delete(id);
  }
}
