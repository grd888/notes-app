import React from "react";
import PropTypes from "prop-types";

export default function NoteList({ notes }) {
  if (notes.length === 0)
    return <p className="text-center text-gray-500">No notes yet</p>;

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className="p-4 bg-white rounded-lg shadow-md border-l-4"
        >
          <h3 className="text-lg font-semibold">{note.title}</h3>
          <p className="text-sm text-gray-500">
            <strong>Category: </strong>
            {note.category}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Priority: </strong>
            {note.priority}
          </p>
          <p className="mt-2">{note.description}</p>
        </div>
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
