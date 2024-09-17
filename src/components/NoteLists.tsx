import { formatDate, Note } from "../lib/NotesData";
import NoteItem from "./NoteItem";

interface NoteListsProps {
  notes: Note[];
  noteSection: string;
}

const NoteLists = ({ notes, noteSection }: NoteListsProps) => {
  return (
    <div className="py-4">
      <h2 className="pb-6 text-2xl font-bold">{noteSection}</h2>
      {/* List of NoteItems */}
      <div className="grid grid-flow-row gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {notes.length === 0 ? (
          <div className="text-center text-2xl text-gray-500">
            <p className="text-center">Tidak ada catatan</p>
          </div>
        ) : (
          notes.map((note) => {
            return (
              <NoteItem
                key={note.id}
                noteTitle={note.title}
                noteContent={note.body}
                noteDate={formatDate(note.createdAt)}
                noteArchived={note.archived}
              />
            );
          })
        )}
      </div>
      {/* End List of NoteItems */}
    </div>
  );
};

export default NoteLists;
