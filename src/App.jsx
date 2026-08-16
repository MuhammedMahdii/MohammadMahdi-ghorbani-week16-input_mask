
import { useState } from 'react';
import Input from './Input';
import cities from './cities.json';

function App() {
  const [input, setInput] = useState('');
  const [hint, setHint] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length > 0) {
      const suggestion = cities.find(city =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );

      if (suggestion) {
        const hintText = suggestion.slice(value.length);
        setHint(hintText);
      } else {
        setHint('');
      }
    } else {
      setHint('');
    }
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>City Finder</h1>
      <Input handleChange={handleChange} hint={hint} value={input} />
      {input && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          <p>Selected: <strong>{input + hint}</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;
