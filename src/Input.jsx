const Input = ({ handleChange, hint, value }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        id="input"
        value={value}
        onChange={handleChange}
        placeholder="Type a city name..."
        className="input-field"
      />
      <div className="input-hint">{value}<span className="hint-suggestion">{hint}</span></div>
    </div>
  );
};

export default Input;
