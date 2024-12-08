import { useState, useEffect } from 'react';
import { fetchNotes, deleteNote } from '../lib/api';
import NoteList from '../components/NoteList';
import { Note } from '../types/note';
import NoteAddForm from '../components/NoteAddForm';


export default function HomePage() {
  const [notes, setNotes] = useState<Note[]>([]);

  const loadNotes = async () => {
    try {
      const fetchedNotes = await fetchNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error('Failed to load notes:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteNote(id);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
  };

  const handleNoteUpdated = (updatedNote: Note) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note._id === updatedNote._id ? updatedNote : note))
    );
  };


  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-5xl font-bold text-green-600">StackNotes</h1>
      <NoteAddForm onNoteAdded={loadNotes} /> {/* Add note form */}
      <NoteList notes={notes} onDelete={handleDelete} onNoteUpdated={handleNoteUpdated}/> {/* Pass onDelete */}
    </div>
  );
}
