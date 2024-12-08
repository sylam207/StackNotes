import { useState } from 'react';
import NoteForm from './NoteForm';
import { Note } from '../types/note';

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
  onNoteUpdated: (updatedNote: Note) => void; // Include the required prop
}

export default function NoteCard({ note, onDelete, onNoteUpdated }: NoteCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCloseForm = () => {
    setIsEditing(false);
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      {isEditing ? (
        <NoteForm
          note={note}
          onClose={handleCloseForm}
          onNoteUpdated={(updatedNote) => {
            onNoteUpdated(updatedNote); // Pass updated note to the parent
            setIsEditing(false); // Close the form after updating
          }}
        />
      ) : (
        <>
          <h2 className="text-lg font-bold">{note.title}</h2>
          <p>{note.content}</p>
          <div className="mt-4 flex space-x-2">
            <button
              className="btn btn-blue"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="btn btn-red"
              onClick={() => onDelete(note._id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}