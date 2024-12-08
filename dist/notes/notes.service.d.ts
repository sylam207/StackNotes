import { Model } from 'mongoose';
import { Note } from './schemas/note.schema';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note-dto';
export declare class NotesService {
    private readonly noteModel;
    constructor(noteModel: Model<Note>);
    create(CreateNoteDto: CreateNoteDto): Promise<Note>;
    findAll(): Promise<Note[]>;
    update(id: string, updateNoteDto: UpdateNoteDto): Promise<Note>;
    delete(id: string): Promise<Note>;
}
