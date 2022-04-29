import sendRequest from './send-request';

const BASE_URL = '/api/notes';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function createNote(noteData) {
  return sendRequest(BASE_URL, 'POST', noteData);
}