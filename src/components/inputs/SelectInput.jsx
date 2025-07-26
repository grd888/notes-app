const SelectInput = ({ label, name, value, onChange, options }) => {
  return (
    <div className="mb-4">
      <label
        className="block font-semibold"
        htmlFor={name}
      >
        {label}
      </label>
      <select
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
        name={name}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
