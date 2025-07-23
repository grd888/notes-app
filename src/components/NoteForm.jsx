import { useState } from "react";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.title || !formData.description) return;

    const newNote = { id: Date.now(), ...formData }
    setNotes([newNote, ...notes])
    setFormData({
      title: "",
      priority: "Medium",
      category: "Work",
      description: "",
    })
  }

  return (
    <form className="mb-6" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block font-semibold"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.title}
          onChange={handleChange}
          name="title"
        />
      </div>

      <div className="mb-4">
        <label
          className="block font-semibold"
          htmlFor="priority"
        >
          Priority
        </label>
        <select
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.priority}
          onChange={handleChange}
          name="priority"
        >
          <option value="High">🔴 High</option>
          <option value="Medium">🟡Medium</option>
          <option value="Low">🟢 Low</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          className="block font-semibold"
          htmlFor="category"
        >
          Category
        </label>
        <select
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.category}
          onChange={handleChange}
          name="category"
        >
          <option value="Work">📂 Work</option>
          <option value="Personal">🏠 Personal</option>
          <option value="Ideas">💡 Ideas</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          className="block font-semibold"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="w-full p-2 border rounded-lg"
          value={formData.description}
          onChange={handleChange}
          name="description"
        />
      </div>
      <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
