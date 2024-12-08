import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note-dto';
import { Note } from './schemas/note.schema';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    create(CreateNoteDto: CreateNoteDto): Promise<Note>;
    findAll(): Promise<Note[]>;
    update(id: string, UpdateNoteDto: UpdateNoteDto): Promise<Note>;
    delete(id: string): Promise<Note>;
}
