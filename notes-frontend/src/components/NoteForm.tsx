import { useState } from 'react';
import { updateNote, createNote } from '../lib/api';
import { Note } from '../types/note';

interface NoteFormProps {
  note?: Note; // Optional for adding new notes
  onClose: () => void;
  onNoteUpdated: (updatedNote: Note) => void; // Callback to update state in parent
}

export default function NoteForm({ note, onClose, onNoteUpdated }: NoteFormProps) {
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required.');
      return;
    }

    try {
      const updatedAt = new Date().toISOString();

      if (note) {
        const updatedNote = { ...note, title, content, updatedAt };
        const response = await updateNote(note._id, updatedNote); // Fix: Capture API response
        onNoteUpdated(response); // Fix: Pass the updated note to the callback
      } else {
        await createNote({
          title,
          content,
          createdAt: new Date().toISOString(),
        });
      }
      setError('');
      onClose(); // Close the form
    } catch (err) {
      console.error('Failed to save note:', err);
      setError('Failed to save note.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label className="block text-sm font-bold mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          placeholder="Enter note title"
        />
      </div>
      <div>
        <label className="block text-sm font-bold mb-1">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="input"
          placeholder="Enter note content"
        />
      </div>
      <div className="flex space-x-2">
        <button
          type="submit"
          className={`btn btn-green`}
        >
          {note ? 'Update Note' : 'Add Note'}
        </button>
        <button
          type="button"
          onClick={onClose}
          className={`btn btn-red`}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}