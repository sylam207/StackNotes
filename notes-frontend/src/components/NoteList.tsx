import { Note } from '../types/note';
import NoteCard from './NoteCard';

interface NoteListProps {
  notes: Note[];
  onDelete: (id: string) => void; // Add onDelete to props
  onNoteUpdated: (updatedNote:Note) => void // Add callback
}

export default function NoteList({ notes, onDelete, onNoteUpdated }: NoteListProps) {
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} onDelete={onDelete} onNoteUpdated={onNoteUpdated} /> // Pass onDelete
      ))}
    </div>
  );
}
