import React from "react";
import PropTypes from "prop-types";
import Note from "./Note";
export default function NoteList({ notes, handleDelete }) {
  if (notes.length === 0)
    return <p className="text-center text-gray-500">No notes yet</p>;

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <Note key={note.id} note={note} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string,
      priority: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};
