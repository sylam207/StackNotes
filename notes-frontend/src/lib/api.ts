import { Note } from '../types/note';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function fetchNotes(): Promise<Note[]> {
  const res = await fetch(`${API_URL}/notes`);
  if (!res.ok) throw new Error('Unable to fetch notes');
  return res.json();
}

export async function createNote(data: Partial<Note>): Promise<Note> {
  const res = await fetch(`${API_URL}/notes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Unable to create note');
  return res.json();
}

export async function updateNote(id: string, updatedNote: Omit<Note, 'id'>): Promise<Note> {
  const res = await fetch(`${API_URL}/notes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedNote),
  });

  if (!res.ok) {
    throw new Error('Unable to update note');
  }
  const updatedNoteResponse = await res.json();
  console.log('Updated Note:', updatedNoteResponse); // Debugging line
  return updatedNoteResponse;
}

export async function deleteNote(id: string): Promise<void> {
  const res = await fetch(`${API_URL}/notes/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Unable to delete note');
}
