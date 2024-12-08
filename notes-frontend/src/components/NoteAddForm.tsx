import { useState } from 'react';
import { createNote } from '../lib/api';

interface AddNoteFormProps {
  onNoteAdded: () => void; // Callback to refresh the notes list
}

export default function AddNoteForm({ onNoteAdded }: AddNoteFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required.');
      return;
    }

    try {
      await createNote({
        title,
        content,
        createdAt: new Date().toISOString(),
      });
      setTitle('');
      setContent('');
      setError('');
      onNoteAdded(); // Notify parent to refresh the notes list
    } catch (err) {
      console.error('Failed to add note:', err);
      setError('Failed to add note.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label className="block text-sm font-bold">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter note title"
        />
      </div>
      <div>
        <label className="block text-sm font-bold">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter note content"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Note
      </button>
    </form>
  );
}